import { PiListNumbersDuotone } from "react-icons/pi";
import { MenuItem } from "../../data/models/MenuItem";
import { MenuSecao } from "../../data/models/MenuSecao";
import Logo from "./Logo";
import MenuPrincipalItem from "./MenuPrincipalItem";
import MenuPrincipalSecao from "./MenuPrincipalSecao";
import Flex from "./Flex";
import { url } from "inspector";
import Titulo from "./Titulo";
import useToggle from "@/data/models/hooks/UseToggle";
import { MdOutlineMenu } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";
import useTamanhoJanela from "@/data/models/hooks/UseTamanhoJanela";
import { useEffect } from "react";
import useBoolean from "@/data/models/hooks/UseBoolean";

export default function MenuPrincipal() {
    const secoes = [
        {
            titulo: "Essenciais",
            aberta: true,
            itens: [
                {titulo:"Contador",url:"/essenciais/contador",tag:"UseState", icone: <PiListNumbersDuotone />},
                {titulo:"Maior",url:"/essenciais/maior",tag:"UseEffect", icone: <PiListNumbersDuotone />},
                {titulo:"Contagem",url:"/essenciais/contagem",tag:"UseEffect", icone: <PiListNumbersDuotone />}

            ]
        },
        {
            titulo: "Personalizados",
            aberta: true,
            itens: [
                {titulo:"Tamanho Janela",url:"/personalizados/tamanhoJanela",tag:"UseEffect", icone: <PiListNumbersDuotone />}

            ]
        },

        
    ];
    const [mini, toggleMini, miniTrue] = useBoolean(false);

    let tamanho = useTamanhoJanela()
    useEffect(()=>{

        if(tamanho=== "md" || tamanho=== "sm"){
            miniTrue()
        }else{
            //toggleMini(false)
        }
        

    },[tamanho])

    function renderizarSecoes() {
        return secoes.map((secao: MenuSecao) => (
            <MenuPrincipalSecao key={secao.titulo} titulo={secao.titulo} mini={mini} aberta={secao.aberta}>
                {renderizarItens(secao)}
            </MenuPrincipalSecao>
        ));
    }

    function renderizarItens(secao: MenuSecao) {
        return secao.itens.map((item: MenuItem) => (
            <MenuPrincipalItem
                key={`${item.titulo}-${item.tag}`}
                icone={item.icone}
                titulo={item.titulo}
                tag={item.tag}
                url={item.url}
                mini={mini}
            />
        ));
    }

    return (
        <aside
            className={`
            flex flex-col overflow-y-scroll overflow-x-hidden
            bg-black shadow-md shadow-zinc-800
            scrollbar-thumb-zinc-700 scrollbar-track-zinc-800 
            scrollbar-thin
            ${mini ? "items-center w-[130px]" : "w-[370px]"}
        `}
        >
            <Flex center className="m-7">
                {!mini && <Logo />}
                <div className="cursor-pointer" onClick={toggleMini}>

                    {mini ? <MdOutlineMenu /> : <MdMenuOpen />}
                </div>
            </Flex>
            <nav className="flex flex-col gap-4 m-7">{renderizarSecoes()}</nav>
        </aside>
    );
}
