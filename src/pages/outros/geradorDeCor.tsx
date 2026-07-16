import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import useBoolean from "@/data/models/hooks/UseBoolean";
import useToggle from "@/data/models/hooks/UseToggle";
import { useEffect, useRef, useState } from "react";

export default function(){

    let [exibirCor, mostrarCor, setAtivoTrue ,  setAtivoFalse] = useBoolean(true);
    const ref = useRef<any>()
    let [texto, setTexto] = useState("Clique em sortear cor")



    useLayoutEffect(() => {

        if(exibirCor){

            const cor = gerarCorAleatoria()
            ref.current.style.backgroundColor = `#${cor}`


            setTexto(`Cor gerada: #${gerarCorAleatoria()}`)


        }else{
            setTexto("Clique em sortear para gerar uma cor aleatória")
        }


    }, [exibirCor])


    function gerarCorAleatoria(){

        const numeroAleatorio = Math.floor(Math.random() * 0xffffff)    ;
        const cor = numeroAleatorio.toString(16)
        return cor;
    }
    return (

        <Pagina titulo="Gerador de Cor" subtitulo="Exemplo de gerador de cor com React">
            <Flex>
                <Botao texto="Sortear Cor" onClick={setAtivoTrue}/>
                <Botao texto="Apagar Cor" onClick={setAtivoFalse}/>

            </Flex>
            <Display texto={texto}/>

            {exibirCor ? <div ref={ref} className={`w-32 h-32 bg-red-400`}></div> : null}
           

        </Pagina>
    )
}