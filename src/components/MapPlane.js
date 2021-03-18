import React from 'react'
import {useTimeline} from "./timelineContext/TimelineContext";
import {Dot} from "./map/Dot";

import '../css/MapPlane.css'

import {MapProvider} from "./map/mapContext/mapContext";

export const MapPlane = ({posMap, pointsDateMap}) => {
    const {value} = useTimeline()
    let key=0;
    const dots = [];

    // function getDots(){
    //     for(item of pointsDateMap)
    //
    // }
    for(let item of pointsDateMap.entries()){
        let low=0, i=0;
        for(let item_ of item[1].entries()){
            i++;
            if(value>=low && value<=item_[0]) {
                dots.push({name: item[0], value: item_[1]})
                break;
            }
            else if(i===item[1].size){
                dots.push({name: item[0], value: item_[1]})
                break;
            }
            else{
                low=item_[0];
            }
        }
    }
    return(
        <MapProvider>
        <div className="MapPlane">{
            dots.map((dot)=>{
                return (
                    <Dot value={dot.value} key={key++} info={posMap.get(dot.name)}/>
                )
            })
        }</div>
        </MapProvider>
    )
}