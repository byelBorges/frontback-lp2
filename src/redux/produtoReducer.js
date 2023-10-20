import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "./recursos/estado";

const produtoSlice = createSlice({
    name: 'produto',
    initialState:{
        status: ESTADO.OCIOSO,
        mensagem: '',
        listaProdutos: []
    },
    reducers:{
        adicionarProduto:(state, action)=>{
            state.listaProdutos.push(action.payload);
        },
        removerProduto:(state, action)=>{
            state.listaProdutos= state.listaProdutos.filter((item)=> item.cnpj !== action.payload.cnpj);
        },
        atualizarProduto:(state, action)=>{
            const listaTemporariaProd = state.listaProdutos.filter((item)=> item.cnpj !== action.payload.cnpj);
            state.listaProdutos = [...listaTemporariaProd, action.payload];
        }
    }
});

export const {adicionarProduto, removerProduto, atualizarProduto} = produtoSlice.actions;
export default produtoSlice.reducer;