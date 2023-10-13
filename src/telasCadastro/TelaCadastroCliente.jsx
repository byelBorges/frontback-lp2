import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadCliente from "./formularios/FormCadCliente";
import TabelaClientes from "./tabelas/TabelaClientes";
import { useState } from "react";
import TelaMensagem from "./TelaMensagem";

export default function TelaCadastroCliente(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaClientes, setListaClientes] = useState([]);
    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    const [mensagem, setMensagem] = useState("");
    const [tipoMensagem, setTipoMensagem] = useState("");
    const [clienteParaEdicao, setClienteParaEdicao] = useState({
        cpf: '',
        nome: '',
        endereco: '',
        bairro: '',
        numero: '',
        cidade: '',
        uf: 'AC',
        cep: ''
    });
    const [modoEdicao, setModoEdicao] = useState(false);

    if (mostrarMensagem) {
        return (
            <TelaMensagem mensagem={mensagem} tipo={tipoMensagem} setMostrarMensagem={setMostrarMensagem}/> /*Atributo mensagem recebe estado mensagem*/
        );
    }
    else {
        return (
            <Container>
                <Pagina>
                    {
                        //Dinâmica em que o usuário irá alternar entre o formulario de cadastro e a visualização dos registros já cadastrados.
                        exibirFormulario ? <FormCadCliente listaClientes={listaClientes}
                            exibirFormulario={setExibirFormulario}
                            setListaClientes={setListaClientes}
                            clienteParaEdicao={clienteParaEdicao}
                            setClienteParaEdicao={setClienteParaEdicao}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                            setMostrarMensagem={setMostrarMensagem}
                            setMensagem={setMensagem}
                            setTipoMensagem={setTipoMensagem}
                        />
                            :
                            <TabelaClientes listaClientes={listaClientes}
                                exibirFormulario={setExibirFormulario}
                                setListaClientes={setListaClientes}
                                clienteParaEdicao={clienteParaEdicao}
                                setClienteParaEdicao={setClienteParaEdicao}
                                modoEdicao={modoEdicao}
                                setModoEdicao={setModoEdicao}
                            />
                        /*
                            <FormCadCliente listaClientes={listaClientes} //minha resolução: inserirCliente={inserirCliente} setListaClientes = {setListaClientes}/> : <TabelaClientes listaClientes={listaClientes} setListaClientes = {setListaClientes}/>//setListaClientes precisa ser colocado, pois precisamos alterar o estado da lista
                        */
                    }

                </Pagina>
            </Container>
        );
    }
    /*
    function inserirCliente(novoCliente){
        setListaClientes([...listaClientes, novoCliente]);
    }
    */

}