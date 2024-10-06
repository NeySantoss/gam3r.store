
'use client'
import { useCallback, useEffect, useState } from "react";
import { Produto } from "@gstore/core";


const urlBase = "http://localhost:3005"
export default function useProdutos() {

    const [produtos, setProdutos] = useState<Produto[]>([])

    async function obterProduto(): Promise<Produto[]> {
        const resp = await fetch(`${urlBase}/produtos`);
        const produtos = await resp.json()
        return produtos ?? [] ;
    }
    

    const obterProdutoPorId = useCallback (async function obterProdutoPorId(id: number): Promise<Produto | null> {
        try{

            const resp = await fetch(`${urlBase}/produtos/${id}`);
            const produto = await resp.json();
            return produto ?? null ;
        }catch(error) {
            console.log('Erro ao obter o produto por id');
            return null
        }
  
    },
    [])



    useEffect(() => {
        obterProduto().then(setProdutos)
    },[])

    return {
        produtos,
        obterProdutoPorId,
    }
}

