import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "./recursos/estado";

const categoriaSlice = createSlice({
    name: 'categoria',
    initialState:{
        status: ESTADO.OCIOSO,
        mensagem: '',
        listaCategorias: []
    },
    reducers:{
        adicionarCategoria:(state, action)=>{
            state.listaCategorias.push(action.payload);
        },
        removerCategoria:(state, action)=>{
            state.listaCategorias = state.listaCategorias.filter((item)=>item.nome !== action.payload.nome);
        },
        atualizarCategoria:(state, action)=>{
            const listaTempCat = state.listaCategorias.filter((item)=> item.nome !== action.payload.nome);
            state.listaCategorias = [...listaTempCat, action.payload];
        }
    }
});

export const {adicionarCategoria, atualizarCategoria, removerCategoria} = categoriaSlice.actions;
export default categoriaSlice.reducer;