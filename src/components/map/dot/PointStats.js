import React, {useState} from 'react'
import {usePoint} from "./PointContext/PointContext";



export const PointStats = ({name, value}) =>{
    console.log(name)
    const pointInfo = usePoint()

    if(!pointInfo.visible) return null

    return(<div className="PointStats" onClick={event=>pointInfo.toggle()}>
        <h2>{name}</h2>
        <div>{value}</div>
    </div>)
}