import Pagina from "@/components/template/Pagina";
import { use, useEffect, useState } from "react";

export default function(){

    const [url, setUrl] = useState();




    useEffect(() => {


        fetch("https://dog.ceo/api/breeds/image/random")
        .then((resposta) => resposta.json())
        .then((dados) => setUrl(dados.message))
        .catch((erro) => console.log(erro))




    }, [])



    return(


        <Pagina titulo="Consulta API">
            <img className="max-w-sm shadow-lg" src={url} alt="Imagem do Cão" />

        </Pagina>
    )
}