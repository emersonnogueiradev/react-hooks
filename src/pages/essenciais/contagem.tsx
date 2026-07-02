import Display from "@/components/template/Display"
import Pagina from "@/components/template/Pagina"
import { useEffect, useState } from "react"

export default function(){


    const quantidadeCaracteres = 400
    const [caracteresRestantes,setCaracteres] = useState(quantidadeCaracteres)

    const [texto,setTexto] = useState("")

    useEffect( ()=>{

        let timer = setTimeout( ()=>{
            let aux = quantidadeCaracteres - texto.length
            setCaracteres(aux)

        },1000)

        return()=>{clearTimeout(timer)}

    }, [texto]  )



    return(

        <Pagina titulo="Contagem de caracteres" subtitulo="Entedendo useEfect">


            <Display texto={ "Digite o texto"} textoComplementar={`${caracteresRestantes}`}/>

            <textarea
            value={texto}
            onInput={(e)=>{setTexto(e.currentTarget.value)}}
            className={`border border-zinc-700 bg-zinc-700 text-white text-2xl w-3/5 h-72 rounded p-5`}

            >

            </textarea>


        </Pagina>
    )
}