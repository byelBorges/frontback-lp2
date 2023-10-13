import { useState } from "react";
import Pagina from "../templates/Pagina";
import TelaMensagem from "./TelaMensagem";
import TabelaProdutos from "./tabelas/TabelaProdutos";
import FormCadProduto from "./formularios/FormCadProduto";
import { Container } from "react-bootstrap";
export default function TelaCadastroProduto(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaProdutos, setListaProdutos] = useState([]);
    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    const [mensagem, setMensagem]= useState('');
    const [tipoMensagem, setTipoMensagem] = useState('');
    const [produtoParaEdicao, setProdutoParaEdicao]= useState({
        nome: '',
        descricao: '',
        quantidade: '',
        avaliacao:'',
        preco: ''
    });
    const [modoEdicao, setModoEdicao]= useState(false);

    if (mostrarMensagem) {
        return(
            <TelaMensagem mensagem={mensagem} tipo={tipoMensagem} setMostrarMensagem={setMostrarMensagem}/>
        );
    }
    else {
        return (
            <Container>
                <Pagina>
                    {
                        exibirFormulario ? <FormCadProduto exibirFormulario={setExibirFormulario}
                        listaProdutos={listaProdutos}
                        setListaProdutos={setListaProdutos}
                        produtoParaEdicao={produtoParaEdicao}
                        setProdutoParaEdicao={setProdutoParaEdicao}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                        setMostrarMensagem={setMostrarMensagem}
                        setMensagem={setMensagem}
                        setTipoMensagem={setTipoMensagem}
                        /> 
                        : 
                        <TabelaProdutos exibirFormulario={setExibirFormulario}
                        setListaProdutos={setListaProdutos}
                        listaProdutos={listaProdutos}
                        produtoParaEdicao={produtoParaEdicao}
                        setProdutoParaEdicao={setProdutoParaEdicao}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                        />
                        //If else só funciona fora do return
                    }
                </Pagina>
            </Container>
        );
    }
}