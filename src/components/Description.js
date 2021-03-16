import React from 'react'
import {useTimeline} from "./timelineContext/TimelineContext";

export const Description = ({descriptionMap})=> {
    const {value} = useTimeline()
    let low=0, i=0;
    let description={};
    for(let item of descriptionMap.entries()){
        i++;
        if(value>=low && value<=item[0]) {
            description=item[1]
            break;
        }
        else if(i===descriptionMap.size){
            description=item[1]
        }
        else{
            low=item[0];
        }
    }
    return(
        <div className="Description">
            <div className="Header">{description.header}</div>
            <div className="Text">{description.text}</div>
        </div>
    )
}