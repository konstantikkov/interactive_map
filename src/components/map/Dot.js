import React from 'react'
import {Point} from "./dot/Point";
import {PointStats} from "./dot/PointStats";
import {PointProvider} from "./dot/PointContext/PointContext";

export const Dot = ({value, info}) =>{
    return(<PointProvider>
        <div className="Dot" style={{left:`${info.pos.x}%`, top:`${info.pos.y}%`}}>
            <Point value={value}/>
                <PointStats value={value} name={info.name}/>
        </div>
        </PointProvider>)
}