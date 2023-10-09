import { createContext, useRef, useState } from "react";

export const Context = createContext()

export const ContextProvider = ({children}) => {
    const AutoScrollRef = useRef()
    const [page, setPage] = useState(0)

    const scrollLeft = () => {
        AutoScrollRef.current.scrollLeft -=  window.innerWidth; // Altere o valor conforme necessário
      };
    
    const scrollRight = () => {
        AutoScrollRef.current.scrollLeft += window.innerWidth; // Altere o valor conforme necessário
    }

    const values = {
        page, setPage,
        AutoScrollRef,
        scrollRight,
        scrollLeft
    } 

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}