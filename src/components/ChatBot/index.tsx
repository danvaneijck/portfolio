import { useEffect, useState, useRef } from "react"
import { gql, useMutation, useQuery } from "@apollo/client"
import { v4 as uuidv4 } from "uuid"
import dayjs from "dayjs";
import chatFigure from "../../assets/chat_figure.png"

const CREATE_SESSION = gql`
  mutation ($session_id: uuid, $created: timestamptz) {
    insert_ai_agent_chatsession_one(object: {agent_id: 1, session_id: $session_id, created_at: $created}) {
      id
      session_id
    }
  }
`

const ASK_AGENT = gql`
  mutation AskAgent($session_id: uuid!, $agent_id: Int!, $message: String!) {
    askAgent(session_id: $session_id, agent_id: $agent_id, message: $message) {
      success
    }
  }
`

const GET_MESSAGES = gql`
  query GetMessages($session_id: uuid!) {
    ai_agent_chatmessage(
      where: {session: {session_id: {_eq: $session_id}}},
      order_by: {timestamp: asc}
    ) {
      id
      role
      content
      timestamp
    }
  }
`

interface Message {
    id: number
    role: string
    content: string
    timestamp: string
}

const ChatBot = ({ agentId }: { agentId: number }) => {
    const [sessionId] = useState(uuidv4())
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState<Message[]>([])
    const chatEndRef = useRef<HTMLDivElement>(null)
    const hasCreatedSession = useRef(false) // flag to ensure one-time session creation
    const [error, setError] = useState<string | null>(null)

    const [createSession] = useMutation(CREATE_SESSION)
    const [askAgent, { loading: sending }] = useMutation(ASK_AGENT)
    const { data, refetch } = useQuery(GET_MESSAGES, {
        variables: { session_id: sessionId },
        pollInterval: 3000,
    })

    useEffect(() => {
        if (data?.ai_agent_chatmessage) {
            setMessages(data.ai_agent_chatmessage)
            setTimeout(() => {
                chatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
            }, 50)
        }
    }, [data])

    useEffect(() => {
        if (!hasCreatedSession.current) {
            console.log(sessionId, dayjs().format())
            createSession({
                variables: {
                    session_id: sessionId,
                    created: dayjs().toISOString(),
                },
            }).then(() => {
                hasCreatedSession.current = true

            }).catch(() => {
                setError("Server Unavailable, try again later")
            })
        }
    }, [createSession, sessionId])

    const handleSend = async () => {
        if (!input.trim()) return

        await askAgent({
            variables: {
                session_id: sessionId,
                agent_id: agentId,
                message: input,
            },
        })

        setInput("")
        refetch()

    }

    return (
        <div className="w-full max-w-2xl mx-auto bg-gunmetal rounded-lg shadow p-4 flex flex-col h-[40vh]">
            <div className="flex-1 overflow-y-auto space-y-2 p-2 bg-air-force rounded h-[400px]">
                {messages.length == 0 &&
                    <div className="m-auto">
                        <img
                            className="mb-5 w-[200px] m-auto"
                            src={chatFigure}
                        />
                        <div className="text-white bg-gunmetal p-3 rounded-lg text-center animate-float mx-10 text-sm md:text-base">
                            Hello there! I'm DanBot - a smart assistant here to share everything about Dan's expertise, projects, and achievements. Ask me anything!
                        </div>
                    </div>
                }
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`animate-slide-up p-3 rounded-lg max-w-[80%] w-fit ${msg.role === "user"
                            ? "bg-slate-600 self-end text-right ml-auto"
                            : "bg-gunmetal text-left"
                            }`}
                    >
                        <p className="text-base text-white">{msg.content}</p>
                    </div>
                ))}

                <div ref={chatEndRef} />
                {error && <div className="bg-red-700 text-center p-2 text-white font-semibold w-fit mx-auto rounded-lg">{error}</div>}
            </div>

            <div className="mt-4 flex">
                <input
                    type="text"
                    className="flex-1 border px-3 py-2 rounded-l focus:outline-none text-white"
                    placeholder="Ask something..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button
                    className="bg-dark-slate text-white px-4 py-2 rounded-r"
                    onClick={handleSend}
                    disabled={sending || error !== null}
                >
                    Send
                </button>
            </div>
        </div>
    )
}

export default ChatBot
