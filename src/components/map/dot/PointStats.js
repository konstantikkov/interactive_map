import React, {useRef, useState} from 'react'
import {usePoint} from "./PointContext/PointContext";
import {useMap} from "../mapContext/mapContext";
import '../../../css/MapPlane.css';

export const PointStats = ({name, value}) =>{
    const {visible, toggle} = usePoint()
    const {zIndex}= useMap()
    const prevIndex = useRef(zIndex)
    const prevVision = useRef(visible)
    console.log(prevIndex.current+'before'+name)
    if(!visible){
        prevVision.current=false;
        return null
    }

    if(!prevVision.current){
        prevVision.current=true;
        prevIndex.current=zIndex
    }


    console.log(visible)
    return(
            <div className="PointStats" style={{zIndex:`${prevIndex.current}`}}
                 onClick={event=>toggle()
            }>
                <h2>{name}</h2>
                <div>{value}</div>
            </div>
)
}