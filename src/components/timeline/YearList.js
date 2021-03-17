import React from 'react'
import {useTimeline} from "../timelineContext/TimelineContext";

const yearArray = ['1941', '1942', '1943', '1944', '1945']

export const YearList = () => {
    const {value} = useTimeline()
    let key=0;
    function getYear(value){
        if(value<600){
            return 0;
        }
        else if(value < 1800){
            return 1;
        }
        else if(value < 3000){
            return 2;
        }
        else if(value < 4200){
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
                    if(i===j)
                        return(
                            <li className="Year" key={key++} style={{color: 'red'}}>{year}</li>
                        )
                    return(
                        <li className="Year" key={key++}>{year}</li>
                    )
                })
            }
        </ul>
    )
}