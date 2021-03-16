import React, {useContext, useState} from 'react'


const TimelineContext = React.createContext()

export const useTimeline = () => {
    return useContext(TimelineContext)
}

export const TimelineProvider = ({children}) =>{
    const [value, setValue] = useState(0)

    const toggle = (newValue) => setValue(prev=>newValue)

    return(
        <TimelineContext.Provider value={{
            value:value,
            toggle
        }}>
            {children}
        </TimelineContext.Provider>
    )
}