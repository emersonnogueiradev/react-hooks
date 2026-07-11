import useTema from "@/data/models/hooks/useTema";
import { Bs0SquareFill } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";

interface MenuItemProps {
    icone?: any;
    titulo: string;
    tag?: string;
    url: string;
    mini?: boolean;
    selecionado?: boolean | undefined;
}

export default function MenuItem(props: MenuItemProps) {
    const { icone, titulo, tag, url, mini, selecionado } = props;
    const { corDestaque } = useTema();

    return (
        <Link
            id={titulo}
            href={url}
            className={`
            flex items-center gap-2 text-${corDestaque} rounded-md
            hover:bg-zinc-800 px-3 py-2
            ${selecionado && `text-${corDestaque} bg-zinc-900`}
        `}
        >
            {icone ?? <Bs0SquareFill />}
            {!mini && titulo}
            {!mini && tag && (
                <span
                    className={`
                    ${selecionado ? `bg-${corDestaque}` : "bg-zinc-700"}
                    text-${corDestaque} text-[11px] rounded-full px-2
                `}
                >
                    {tag}
                </span>
            )}
        </Link>
    );
}
