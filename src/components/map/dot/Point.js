import React, {useState} from 'react'
import {usePoint} from "./PointContext/PointContext";



export const Point = ({value, pos}) =>{
    console.log(value, pos)
    const [radius, setRadius] = useState(()=>0)

    const pointInfo = usePoint()

    if(radius!=value){
        setRadius(value)
    }

    return(<div className="Point" onClick={event=>pointInfo.toggle()}>
        o
    </div>)
}