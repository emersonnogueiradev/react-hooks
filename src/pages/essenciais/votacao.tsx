import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useState } from "react";

export default function(){


    const [votos, setVotos] = useState({votosRoxo: 0,votosVerde: 0})

    function votosRoxo() {
        
        // 1. Chamamos o setVotos do React
        setVotos(function(votosAtuais) {
            
            // 2. O React preenche a variável 'votosAtuais' com {votosRoxo: 0, votosVerde: 0}
            
            // 3. Você manipula e RETORNA o novo objeto completo que vai substituir o antigo
            return {
                votosRoxo: votosAtuais.votosRoxo + 1,
                votosVerde: votosAtuais.votosVerde // Mantém o verde idêntico
            };
            
        });


    }



        function votosVerde() {

            setVotos(

                (votosAtuais) => ({
                    votosRoxo: votosAtuais.votosRoxo, // Mantém o roxo idêntico
                    votosVerde: votosAtuais.votosVerde + 1
                })  

            )
            
        }


        function votosVerdeProf(){


            setVotos(

                (votosAtuais) => ({

                  ...votosAtuais, // Mantém o roxo idêntico
                    votosVerde: votosAtuais.votosVerde + 1  
                })
            )
        }


        function zerarVotos() {
            setVotos({votosRoxo: 0, votosVerde: 0})
        }


    return(




        <Pagina titulo="Votação" subtitulo="Usando estado com objeto">

            <Flex col center >
                <Display texto="Qual a melhor cor?"
                textoComplementar={`${votos.votosRoxo} - Roxo | ${votos.votosVerde} - Verde`}
                />
                <Flex gap={5}>

                    <Botao texto="Roxo" cor="bg-purple-600" onClick={votosRoxo}/>
                    <Botao texto="Verde" cor="bg-green-600" onClick={votosVerdeProf}/>



                </Flex>
                

                <Botao texto="Zerar Votos" cor="bg-gray-600" tamanho="lg" onClick={zerarVotos}/>


            </Flex>

        </Pagina>
    )
}