import { createContext, use, useState } from "react";
import {secoes as s} from "../constants/secoes";
import useBoolean from "../models/hooks/UseBoolean";
import useTamanhoJanela from "../models/hooks/UseTamanhoJanela";
import { useEffect } from "react";
import { useRouter } from "next/router";

const ContextoMenu = createContext({} as any);

export function MenuProvider(props: any) {


    const [mini, toggleMini, miniTrue] = useBoolean(false);
    const [secoes, setSecoes] = useState<any>(s);
    let tamanho = useTamanhoJanela()

    const router = useRouter();


    
    useEffect(()=>{

        if(tamanho=== "md" || tamanho=== "sm"){
            miniTrue()
        }else{
            //toggleMini(false)
        }
        

    },[tamanho])

    useEffect(()=>{
        setSecoes(selecionarItem(router.asPath))

    },[router.asPath])

    function selecionarItem(url:string){
        let novasSecoes = secoes.map((secao: any)=>{

            let novosItens = secao.itens.map((item: any)=>{
                return {...item, selecionado: item.url === url}
            })

            return {...secao, itens: novosItens}

        })

        return novasSecoes
        
        
    }

    return (

        <ContextoMenu.Provider value={{secoes,mini,toggleMini}} >
            {props.children}
        </ContextoMenu.Provider>
    )

}


export default ContextoMenu;