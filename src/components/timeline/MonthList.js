import React from 'react'
import {useTimeline} from "../timelineContext/TimelineContext";


const monthArray = ['июн','июл','авг','сен','окт','ноя','дек',
    'янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек',
    'янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек',
    'янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек',
    'янв','фев','мар','апр','май'
]

export const MonthList = () => {
    const {value} = useTimeline()
    let i = value/100, j = -1;
    let key=0;
    return(
        <ul className="MonthList">
            {
                monthArray.map((month)=>{
                    j++
                    if((j>=i)&&j<(i+1))
                        return(
                            <li className="Month" key={key++} style={{color: 'red'}}>{month}</li>
                        )
                    return(
                        <li className="Month" key={key++}>{month}</li>
                    )
                })
            }
        </ul>
    )
}