
export default function Title({title}:TitleProps){
    
    return(
        <>
            <div>
                <h2>{title}</h2>
            </div>
        </>
    )
}

interface TitleProps  {
    title: string
}