'use client'
import EmailContext from "@/context/EmailProvider";
import { useContext } from "react";

const useEmail = () => {
    return useContext(EmailContext)
}

export default EmailContext