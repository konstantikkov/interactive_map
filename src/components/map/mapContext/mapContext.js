import React, {useState, useContext} from 'react'


const MapContext=React.createContext()

export const useMap = ()=>{
    return useContext(MapContext)
}


export const MapProvider = ({children})=>{
    const [zIndex, setZIndex] = useState(()=>20)

    const upIndex = () => setZIndex(prev=>prev+1)
    const downIndex = () => setZIndex(prev=>prev-1)
    return(
        <MapContext.Provider value={{
            zIndex: zIndex,
            upIndex,
            downIndex
        }}>
            {
                children
            }
        </MapContext.Provider>
    )
}