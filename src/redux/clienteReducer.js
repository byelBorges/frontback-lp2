import {createSlice} from '@reduxjs/toolkit';
import ESTADO from './recursos/estado';

//name, initialState e reducers são atributos obrigatórios de um objeto que cria uma 'fatia/slice' da store, resultando em um redutor.
const clienteSlice = createSlice({
    name: 'cliente',
    initialState: {
        status: ESTADO.OCIOSO,
        mensagem: '',
        listaClientes: []
    },
    reducers:{
        adicionar:(state, action)=>{
            state.listaClientes.push(action.payload);
        },
        remover:(state, action)=>{
            state.listaClientes = state.listaClientes.filter(cliente => cliente.cpf !== action.payload.cpf);//action.payload guarda um cliente(objeto), se mandássemos só o cpf, usaríamos somente action.payload
        },
        atualizar:(state, action)=>{
            //Atualizar implicará em excluir o cliente da lista e adicioná-lo novamente com seus dados alterados
            //remover -> adicionar novamente com dados atualizados
            const listaTemporariaClientes = state.listaClientes.filter(cliente => cliente.cpf !== action.payload.cpf);
            state.listaClientes = [...listaTemporariaClientes, action.payload];
        },
    }
});
//exportando as actions que alteram o estado 'cliente'
export const {adicionar, remover, atualizar} = clienteSlice.actions;
//exportando o redutor para ser utilizado na store
export default clienteSlice.reducer;