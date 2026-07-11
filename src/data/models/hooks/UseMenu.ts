import { useContext } from "react";
import ContextoMenu from "@/data/context/MenuProvider";


export default function useMenu() {

    return useContext(ContextoMenu);

}
