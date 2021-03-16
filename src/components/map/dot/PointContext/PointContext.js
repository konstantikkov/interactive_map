import React, {useState, useContext} from 'react'


const PointContext=React.createContext()

export const usePoint = ()=>{
    return useContext(PointContext)
}


export const PointProvider = ({children})=>{
    const [visb, setVisb] = useState(()=>false)

    const toggle = () => setVisb(prev=>!prev)

    return(
        <PointContext.Provider value={{
            visible: visb,
            toggle
        }}>
            {
                children
            }
        </PointContext.Provider>
    )
}