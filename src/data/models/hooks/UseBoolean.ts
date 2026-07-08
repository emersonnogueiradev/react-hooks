import { useState } from "react";   

export default function useBoolean(valor?:boolean){

    const[ativo,setAtivo] = useState(valor??false)

    function toggleAtivo(){

        setAtivo(!ativo)
    }

    function setAtivoTrue(){
        setAtivo(true)
    }

    function setAtivoFalse(){

        setAtivo(false)
    }




    const r:[boolean, ()=>void, ()=>void, ()=>void] = [ativo,toggleAtivo,setAtivoTrue,setAtivoFalse]

    return r
}