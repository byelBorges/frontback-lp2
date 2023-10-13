import TelaCadastroCliente from './telasCadastro/TelaCadastroCliente.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaCadastroCategoria from './telasCadastro/TelaCadastroCategoria.jsx';
import TelaCadastroProduto from './telasCadastro/TelaCadastroProduto.jsx';
import TelaCadastroFornecedor from './telasCadastro/TelaCadastroFornecedor.jsx'
import TelaMenu from './telasCadastro/TelaMenu.jsx';
import Tela404 from './telasCadastro/Tela404.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {
            //Os caminhos(path) devem ser organizados do mais específico para o mais geral
          }
          <Route path='/clientes' element={<TelaCadastroCliente />} />
          <Route path='/produtos' element={<TelaCadastroProduto />} />
          <Route path='/fornecedores' element={<TelaCadastroFornecedor />} />
          <Route path='/categorias' element={<TelaCadastroCategoria />} />
          <Route path='/' element={<TelaMenu />} />

          <Route path='*' element={<Tela404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;