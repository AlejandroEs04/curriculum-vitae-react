"use client"
import { createContext, useState } from "react"

const LanguageContext = createContext()

const LanguageProvider = ({children}) => {
    const [ingles, setIngles] = useState(true)

    const handleChangeIngles = () => {
        setIngles(!ingles)
    }

    return (
        <LanguageContext.Provider
            value={{
                ingles, 
                handleChangeIngles
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

export {
    LanguageProvider
}

export default LanguageContext