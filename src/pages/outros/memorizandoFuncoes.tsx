import BotaoMemorizado from "@/components/template/BotaoMemorizado";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import InputFormatado from "@/components/template/InputFormatado";
import Pagina from "@/components/template/Pagina";
import { useCallback, useState } from "react";


export default function (){
    
    
    const[quantidade,setQuantidade] = useState(0);
    const finalizar = useCallback(function(e:any){
        e.preventDefault()
        window.alert("Compra Finalizada!!")
        setQuantidade(0)




    },[])
    
    

    return(
        <Pagina titulo = "Memorizando Funções" subtitulo="Entedendo hook callback" >
            <Display texto="Quantos produtos você quer"/>
            <form>
                <Flex>
                    <InputFormatado valor={quantidade} tipo="number" onInput={(e)=> setQuantidade(+e.target.value)}></InputFormatado>
                    <BotaoMemorizado texto="Confirmar" onClick={finalizar}></BotaoMemorizado>
                </Flex>
            </form>
        </Pagina>
    )

}