
import { GoArrowDownLeft } from "react-icons/go";

import Flex from "./Flex";
import useToggle from "@/data/models/hooks/UseToggle";
import { LuMoveUpRight } from "react-icons/lu";

interface MenuSecaoProps {
    titulo: string
    mini: boolean
    aberta: boolean
    children: any
    onClick?: () => void
}

export default function MenuSecao(props: MenuSecaoProps) {
    
    const { titulo, mini,aberta } = props;


    return (
        <Flex col gap={4} className={`${mini && "items-center"}`}>
            <span className={`
                flex items-center justify-between
                text-zinc-400 uppercase font-bold 
                ${mini && "text-[11px]"} cursor-pointer
            `} onClick={() => props.onClick?.()}>
                {mini ? titulo : (
                    <>
                        {titulo}
                        {aberta ? <LuMoveUpRight size={15} /> : <GoArrowDownLeft size={15} />}
                    </>
                )}
            </span>
            {aberta && (
                <Flex col gap={1.5}>
                    {props.children}
                </Flex>
            )}
        </Flex>
    );
}
