import React from 'react'
import {useTimeline} from "./timelineContext/TimelineContext";
import {MonthList} from "./timeline/MonthList";
import {YearList} from "./timeline/YearList";
import '../css/Timeline.css'
export const Timeline = () => {
    const TimelineState = useTimeline()
        return(
        <div className="SliderContainer">
            <input type="range" min="0" max="4700" className="slider" value={TimelineState.value} onChange={event => TimelineState.toggle(event.target.value)}/>
            <MonthList/>
            <YearList/>
        </div>
    )
}