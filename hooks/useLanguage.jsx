'use client'
import { useContext } from "react";
import LanguageContext from "@/context/IdiomaProvider";

const useLanguage = () => {
    return useContext(LanguageContext)
}

export default useLanguage