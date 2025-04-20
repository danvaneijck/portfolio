import { createTimeline } from "animejs";
import { useEffect } from "react";

const Timeline = () => {

    useEffect(() => {
        const tl = createTimeline({ defaults: { duration: 750 } });
        tl.label('start')
            .add('.square', { x: '15rem' }, 500)
            .add('.circle', { x: '15rem' }, 'start')
            .add('.triangle', { x: '15rem', rotate: '1turn' }, '<-=500')
    }, [])


    return (
        <div>

        </div>
    )
}

export default Timeline