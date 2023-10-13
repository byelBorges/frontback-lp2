import { useState } from "react";
import TabelaCategorias from "./tabelas/TabelaCategorias";
import FormCadCategoria from "./formularios/FormCadCategoria";
import Pagina from "../templates/Pagina";
import { Container } from "react-bootstrap";
import TelaMensagem from "./TelaMensagem";
export default function TelaCadastroCategoria(props) {
    const [exibirFormulario, setExibirFormulario] = useState(0);
    const [listaCategorias, setListaCategorias] = useState([]);
    const [mensagem, setMensagem] = useState('');
    const [tipoMensagem, setTipoMensagem] = useState('');
    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    if (mostrarMensagem) {
        return (
            <TelaMensagem mensagem={mensagem} tipo={tipoMensagem} setMostrarMensagem={setMostrarMensagem} />
        );
    }
    else {
        return (
            <Container>
                <Pagina>
                    {
                        exibirFormulario ? <FormCadCategoria exibirFormulario={setExibirFormulario}
                            listaCategorias={listaCategorias}
                            setListaCategorias={setListaCategorias}
                            setMostrarMensagem={setMostrarMensagem}
                            setTipoMensagem={setTipoMensagem}
                            setMensagem={setMensagem}
                        />
                            :
                            <TabelaCategorias exibirFormulario={setExibirFormulario}
                                listaCategorias={listaCategorias}
                                setListaCategorias={setListaCategorias}
                            />
                    }
                </Pagina>
            </Container>
        );
    }
}