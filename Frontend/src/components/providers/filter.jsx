import { createContext, useContext, useState } from "react"

const FilterContext = createContext()

export const FilterProvider = ({ children }) => {

    const [seats, setSeats] = useState(1)
    const [bagageSmall, setBagageSmall] = useState(false)
    const [bagageMedium, setBagageMedium] = useState(false)
    const [bagageLarge, setBagageLarge] = useState(false)
    const [comfort, setComfort] = useState(false)
    const [music, setMusic] = useState(false)
    const [animalsAllowed, setAnimalsAllowed] = useState(false)
    const [childrenAllowed, setChildrenAllowed] = useState(false)
    const [smokingAllowed, setSmokingAllowed] = useState(false)
    const [destinationStart, setDestinationStart] = useState("")
    const [destinationEnd, setDestinationEnd] = useState("")
    const [seatsBooked, setSeatsBooked] = useState(1)

    return (
        <FilterContext.Provider value={{
            seats, setSeats,
            bagageSmall, setBagageSmall,
            bagageMedium, setBagageMedium,
            bagageLarge, setBagageLarge,
            comfort, setComfort,
            music, setMusic,
            animalsAllowed, setAnimalsAllowed,
            childrenAllowed, setChildrenAllowed,
            smokingAllowed, setSmokingAllowed,
            destinationStart, setDestinationStart,
            destinationEnd, setDestinationEnd,
            seatsBooked, setSeatsBooked
        }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => {
    const ctx = useContext(FilterContext);
    if (!ctx) throw new Error("useFilter must be used within <FilterProvider>");
    return ctx;
};