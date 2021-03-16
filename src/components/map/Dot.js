import React, {useState} from 'react'
import {Point} from "./dot/Point";
import {PointStats} from "./dot/PointStats";
import {PointProvider} from "./dot/PointContext/PointContext";



export const Dot = ({value, info}) =>{
    return(<PointProvider>
        <div className="Dot">
            <Point value={value} pos={info.pos}/>
            <PointStats value={value} name={info.name}/>
        </div>
        </PointProvider>)
}