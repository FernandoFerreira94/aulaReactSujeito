import React from "react"
import "./Curso.css"

interface CursoProps {
    curso: string
    valor: number
}
export default function Curso({curso = "Not curso", valor= 0.0} :CursoProps){
    return(
        <>
            <div className="container">
                <p><strong>Curso</strong>: {curso}</p>
                <p><strong>Valor</strong>: {valor}$</p>
            </div>
            <hr />
        </>
    )
}

