'use client'
import useLanguage from '@/hooks/useLanguage'

function Titulo({titulo, title}) {

    const {ingles} = useLanguage()

    return (
        <h1>{ingles ? title : titulo}</h1>
    )
}

export default Titulo
