import { useState } from "react"
import {useForm} from "react-hook-form"

interface FormProps {
    name: string;
    idade:number
}

export default function Form(){
   
const [infoAluno, setInfoAluno] = useState<FormProps>()

const { register, handleSubmit, reset} = useForm()

function showAluno (data) {
    setInfoAluno({
        name: data.name,
        idade: data.idade
    })
    
   reset()
}

    return(
        <>
           <form onSubmit={handleSubmit(showAluno)}>
            <label>Nome: <input type="text" placeholder="Digite nome" {...register("name")}   />
            </label> 

            <br />

            <label>Idade:
                 <input type="number"  placeholder="Idade" 
                 {...register("idade")} />
            </label>

            <br />

            <input type="submit" value="Mostrar aludo" />
           </form>
        <hr/>
           <p>Nome: {infoAluno?.name}</p>

           <p>idae: {infoAluno?.idade}</p>
        </>
    )
}