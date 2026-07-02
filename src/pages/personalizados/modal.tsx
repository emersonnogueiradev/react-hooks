import Botao from "@/components/template/Botao";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import useToggle from "@/data/models/hooks/UseToggle";

export default function(){

    const [mostrar,toggleMostrar] =  useToggle(false);

    return (



        <Pagina titulo="Modal" subtitulo="Usando um hook persolanizado">

            <Botao texto="Abrir" onClick={toggleMostrar} cor="bg-cyan-500"></Botao>

            {mostrar? (<Flex center col className={`w-80 bg-gray-500 text-white text-2xl p-4 m-4 rounded-md

            
            `}>
                <Botao cor="bg-red-700" tamanho="xl" onClick={toggleMostrar} ></Botao>
                <h1 className="mt-5">Clique em X para sair</h1>
            </Flex>):
             ("")}

        </Pagina>
    )
}