import { useState } from "react";
import Pagina from "@/components/template/Pagina";
import  Display  from "../../components/template/Display"
import  Flex  from "../../components/template/Flex"
import Botao from "@/components/template/Botao";
import { TfiControlSkipForward } from "react-icons/tfi";


export default function (){

    let [count, setCount] = useState(0)

    return(

        <Pagina titulo="Contador" subtitulo="Entendendo o que é um estado">

            <Display texto={count}/>
            <Flex gap={5}>
                <Botao
                
                    redondo

                    icone={<TfiControlSkipForward size={40} />}

                    tamanho="2xl"

                    cor="bg-blue-500"
                    onClick={()=>setCount(count-1)}
                />
                <Botao
                
                    redondo

                    icone= "0"

                    tamanho="2xl"

                    cor="bg-red-500"
                    onClick={()=>setCount(0)}
                />
                <Botao
                
                    redondo

                    icone= "----"

                    tamanho="2xl"

                    cor="bg-green-500"
                    onClick={()=>setCount(count+1)}
                />
            </Flex>

    
        </Pagina>
    )

}