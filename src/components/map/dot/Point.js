import React, {useState} from 'react'
import {usePoint} from "./PointContext/PointContext";
import styles from '../../../css/MapPlane.css'
import {useMap} from "../mapContext/mapContext";

export const Point = ({value}) =>{
    const [radius, setRadius] = useState(()=>0)
    const {upIndex, downIndex}= useMap()
    const {visible, toggle} = usePoint()

    if(radius!==value){
        setRadius(value)
    }
    return(<div className="Point" style={{
        transform: `scale(${radius})`,
        }} onClick={event=>{
            toggle()
        if(!visible)
            upIndex()
        }}>
    </div>)
}