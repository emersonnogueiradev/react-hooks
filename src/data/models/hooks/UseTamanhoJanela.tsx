import { useEffect, useState } from "react";


function getTamanhoDajanela(){

    if(typeof window !== "undefined"){

        const {innerWidth: largura, innerHeight: altura} = window
        return {largura,altura}

    }else{
        return {largura:-1,altura:-1}
    }
}


export default function useTamanhoJanela(){


    const[tamanhoDaJanela, setTamanhoDaJanela] = useState(getTamanhoDajanela());


    useEffect(()=>{
        function tamanhouMudou()
        {

            setTamanhoDaJanela(getTamanhoDajanela())
        
        
        
        }

        window.addEventListener("resize",tamanhouMudou);

        return()=>{
            window.removeEventListener("resize",tamanhouMudou)
        }

    },[])


}