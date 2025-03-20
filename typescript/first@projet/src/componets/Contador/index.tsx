import { useState } from "react"
import Title from "../Title"


interface ContadorProps {
    count: number
}
export default function Contador(){
    const [count, setCount] = useState<ContadorProps>(0)


    function handleSoma () {
        setCount( (prevCount) => prevCount  + 1)
    }

    function handleMenos () {
        if (count > 0)   setCount((prevCount) => prevCount -1)
    }

  
    return(
        <>
            <div className="container">
                <Title title="Contador" />

                <button onClick={handleSoma}>+</button>
                <span>{count}</span>
                <button onClick={handleMenos}>-</button>
            </div>
        </>
    )
}