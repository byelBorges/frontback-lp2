import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "./recursos/estado";


const fornecedorSlice = createSlice({
    name:'fornecedor',
    initialState:{
        status: ESTADO.OCIOSO,
        mensagem:'',
        listaFornecedores: []
    },
    reducers:{
        adicionarFornecedor:(state, action)=>{
            state.listaFornecedores.push(action.payload);
        },
        removerFornecedor:(state, action)=>{
            state.listaFornecedores = state.listaFornecedores.filter((fornecedor)=> fornecedor.cnpj !== action.payload.cnpj);
        },
        atualizarFornecedor:(state, action)=>{
            const listaTemporaria = state.listaFornecedores.filter((fornecedor)=> fornecedor.cnpj !== action.payload.cnpj);
            state.listaFornecedores = [...listaTemporaria, action.payload];
        }
    }
});

export const {adicionarFornecedor, removerFornecedor, atualizarFornecedor} = fornecedorSlice.actions;

export default fornecedorSlice.reducer;