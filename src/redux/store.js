import {configureStore} from '@reduxjs/toolkit';
import clienteSlice from './clienteReducer';
import fornecedorSlice from './fornecedorReducer';
import produtoSlice from './produtoReducer';
import categoriaSlice from './categoriaReducer';

const store = configureStore({
    reducer:{
        cliente: clienteSlice,
        fornecedor: fornecedorSlice,
        produto: produtoSlice,
        categoria: categoriaSlice,
    }
});

export default store;