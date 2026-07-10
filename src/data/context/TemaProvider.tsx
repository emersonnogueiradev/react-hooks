import { createContext, useState } from "react";

const ContextoTema = createContext({} as any);

export function TemaProvider(props: any) {
    const cores = ["blue-500","red-800","yellow-600","purple-600"]

    const [corDestaque, setCorDestaque] = useState<any>(cores);
    const ctx = { cores, corDestaque,setCorDestaque }


    return (

        <ContextoTema.Provider value={ctx} >
            {props.children}
        </ContextoTema.Provider>
    )
}

export default ContextoTema;



