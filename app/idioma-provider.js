'use client'
import { createContext } from "react"

export const LanguageContext = createContext({})

export default function LanguageProvider({children, ingles}) {
    return <LanguageContext.Provider value={ingles}>{children}</LanguageContext.Provider>
}