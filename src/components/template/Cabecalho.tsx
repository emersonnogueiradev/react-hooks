import Flex from "./Flex";
import Titulo from "./Titulo";
import SeletorDeCor from "./SeletorDeCor";
import useToggle from "@/data/models/hooks/UseToggle";

interface CabecalhoProps {
    titulo?: string;
    subtitulo?: string;
}

export default function Cabecalho(props: CabecalhoProps) {

    const [mostrarSeletor, toggleMostrarSeletor] = useToggle(false);
    return (
        <Flex centerCross className="justify-between">
            {props.titulo ? <Titulo titulo={props.titulo} subtitulo={props.subtitulo} /> :<div></div> }
            <div onClick={toggleMostrarSeletor}>
                {mostrarSeletor? <div>oi</div>: <div>jjjj</div>}

            </div>
            {mostrarSeletor?<SeletorDeCor />: ""}
        </Flex>
    );
}
