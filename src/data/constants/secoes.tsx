
import { PiListNumbersDuotone } from "react-icons/pi";

export    const secoes = [
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
        {
            titulo: "Contexto",
            aberta: true,
            itens: [
                {titulo:"Loja",url:"/contexto/loja",tag:"useContext", icone: <PiListNumbersDuotone />}

            ]
        }
        
    ];


    export default secoes; 
