import { useId } from "react";

/**
 * Device ingest path from the iot-ingest-stack: providers post to API Gateway, an inbound
 * Lambda proxies to Device Manager, and failed deliveries are buffered in SQS and replayed.
 */
export default function IngestDiagram({ animate = true }: { animate?: boolean }) {
  const titleId = useId();
  const descId = useId();

  // Below ~440px the labels get too small to read, so the figure scrolls sideways instead of shrinking.
  return (
    <div role="region" aria-label="Device ingest diagram" tabIndex={0} className="overflow-x-auto">
      <svg
        viewBox="0 0 520 292"
        role="img"
        aria-labelledby={`${titleId} ${descId}`}
        className="ingest block h-auto w-full min-w-[440px]"
      >
        <title id={titleId}>Device ingest path</title>
        <desc id={descId}>
          Gateways send uplinks through API Gateway and a Lambda front door to Device Manager. On a server error or
          timeout the request is buffered in SQS. A retry Lambda health-checks Device Manager and replays it. After five
          failures a message moves to a dead-letter queue, which raises an alarm.
        </desc>
        <style>{`
        .ingest .box{fill:var(--sheet);stroke:var(--ink);stroke-width:1.2}
        .ingest .t{font:600 12.5px var(--font-sans);fill:var(--ink)}
        .ingest .st{font:10.5px var(--font-mono);fill:var(--muted)}
        .ingest .ok{stroke:var(--signal);stroke-width:1.6;fill:none}
        .ingest .bad{stroke:var(--flag);stroke-width:1.4;fill:none;stroke-dasharray:4 3}
        .ingest .lbl{font:10.5px var(--font-mono);fill:var(--flag)}
        .ingest .lblok{font:10.5px var(--font-mono);fill:var(--signal)}
        .ingest .dot{fill:var(--signal);opacity:0}
        .ingest .dot.run{animation:ingest-packet 2.6s ease-in-out .5s 3 both}
        @keyframes ingest-packet{0%{transform:translateX(0);opacity:0}10%{opacity:1}85%{opacity:1}100%{transform:translateX(284px);opacity:0}}
      `}</style>

        <text className="st" x="10" y="22">
          device ingest · ap-southeast-2 · AWS CDK
        </text>

        <rect className="box" x="10" y="40" width="112" height="52" />
        <text className="t" x="20" y="62">
          Gateways
        </text>
        <text className="st" x="20" y="79">
          ~720 · LoRaWAN
        </text>

        <rect className="box" x="150" y="40" width="112" height="52" />
        <text className="t" x="160" y="62">
          API Gateway
        </text>
        <text className="st" x="160" y="79">
          HTTP API
        </text>

        <rect className="box" x="290" y="40" width="96" height="52" />
        <text className="t" x="300" y="62">
          Lambda
        </text>
        <text className="st" x="300" y="79">
          5 s proxy
        </text>

        <rect className="box" x="406" y="40" width="104" height="52" />
        <text className="t" x="416" y="62">
          Device
        </text>
        <text className="t" x="416" y="78">
          Manager
        </text>

        <path className="ok" d="M122 66 H150 M262 66 H290 M386 66 H406" />
        <circle className={animate ? "dot run" : "dot"} cx="122" cy="66" r="4.5" />

        <path className="bad" d="M338 92 V160" />
        <text className="lbl" x="330" y="130" textAnchor="end">
          5xx / timeout
        </text>

        <rect className="box" x="290" y="160" width="96" height="46" />
        <text className="t" x="300" y="181">
          SQS
        </text>
        <text className="st" x="300" y="196">
          14-day buffer
        </text>

        <path className="bad" d="M386 183 H406" />

        <rect className="box" x="406" y="160" width="104" height="46" />
        <text className="t" x="416" y="181">
          Retry Lambda
        </text>
        <text className="st" x="416" y="196">
          health-check
        </text>

        <path className="ok" d="M458 160 V92" />
        <text className="lblok" x="450" y="130" textAnchor="end">
          replay
        </text>

        <path className="bad" d="M458 206 V236" />
        <text className="lbl" x="450" y="226" textAnchor="end">
          5 failures
        </text>

        <rect className="box" x="406" y="236" width="104" height="42" />
        <text className="t" x="416" y="262">
          DLQ + alarm
        </text>
      </svg>
    </div>
  );
}
