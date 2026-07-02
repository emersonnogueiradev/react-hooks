import InputFormatado from "@/components/template/InputFormatado";
import Pagina from "@/components/template/Pagina";
import useStateValidado from "@/data/models/hooks/useStateValidado";

export default function(){

    function validaSenha(senha:any){
        let conrrespondencia = senha.match(/[\d\S]{8,}/)
        return conrrespondencia?.[0].length === senha.length
    }
    const[senha,setSenha,senhaEhvalida] = useStateValidado("",validaSenha)


    let borda;
    if(senha===""){
        borda = "border-blu-600"
    }else if(senhaEhvalida){
        borda = "border-green-600"
    }else if(!senhaEhvalida){
        borda = "border-red-600"
    }


    return(
        <Pagina titulo="Validando senha" subtitulo="Usando um hook personalizado">

            <InputFormatado
            
            valor={senha}
            onInput={(e)=>setSenha(e.target.value)}

            label="Senha"
            tipo="text"
            className= {`${borda} border-4 w-18 flex`}
            
            ></InputFormatado>
        </Pagina>
    )
}