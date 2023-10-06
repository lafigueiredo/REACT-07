import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../axios";
import { Card, DescricaoCard, DuracaoCard, ImagemCard, SobreCard, SubTituloCard, Titulo, TituloCard } from "./styles";

export const Detalhes = () => {
    const [dados, setDados] = useState()
    const {id} = useParams()

    async function buscar_curso(){
        const {data} = await api.get(id)
        setDados(data)
    }

    useEffect(()=>{
        buscar_curso()
    }, [])

    return(
        <>
            <Titulo>Detalhes</Titulo>
            {dados &&
             <Card>
                <TituloCard>{dados.titulo}</TituloCard>
                <SubTituloCard>{dados.subtitulo}</SubTituloCard>
                <ImagemCard src={dados.foto}/>
                <DescricaoCard>{dados.descricao}</DescricaoCard>
                <DuracaoCard>{dados.duracao}</DuracaoCard>
                <SobreCard>{dados.sobre}</SobreCard>
            </Card>
            }
            
        </>
    )
}

