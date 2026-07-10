import { use, useContext } from "react";
import ContextoTema from "@/data/context/TemaProvider";

export default function useTema(){
    return useContext(ContextoTema)

}