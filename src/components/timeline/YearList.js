import React from 'react'
import {useTimeline} from "../timelineContext/TimelineContext";


const yearArray = ['1941', '1942', '1943', '1944', '1945']

export const YearList = () => {
    const {value} = useTimeline()

    function getYear(value){
        if(value<700){
            return 0;
        }
        else if(value < 1900){
            return 1;
        }
        else if(value < 3100){
            return 2;
        }
        else if(value < 4300){
            return 3;
        }
        else if(value <= 4700){
            return 4;
        }
    }

    let i = getYear(value), j = -1;
    return(
        <ul className="YearList">
            {
                yearArray.map((year)=>{
                    j++
                    if(i==j)
                        return(
                            <li className="Year" style={{color: 'red'}}>{year}</li>
                        )
                    return(
                        <li className="Year">{year}</li>
                    )
                })
            }
        </ul>
    )
}