import { createContext, useState } from "react"

export const TimeframeContext = createContext()

export default function TimeframeProvider({ children }) {
    const [timeframe, setTimeframe] = useState("weekly")

    return (
        <TimeframeContext.Provider value={{
            timeframe,
            setTimeframe
        }}>
            {children}
        </TimeframeContext.Provider>
    )
}