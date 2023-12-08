import { useState } from "react";
import TabelaCategorias from "./tabelas/TabelaCategorias";
import FormCadCategoria from "./formularios/FormCadCategoria";
import Pagina from "../templates/Pagina";
import { Container } from "react-bootstrap";
import TelaMensagem from "./TelaMensagem";
export default function TelaCadastroCategoria(props) {
    const [exibirFormulario, setExibirFormulario] = useState(0);
    const [mensagem, setMensagem] = useState('');
    const [tipoMensagem, setTipoMensagem] = useState('');
    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [categoriaParaEdicao, setCategoriaParaEdicao] = useState({
        codigo: '0',
        nome: ""
    });

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
                            categoriaParaEdicao={categoriaParaEdicao}
                            setCategoriaParaEdicao={setCategoriaParaEdicao}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                            setMostrarMensagem={setMostrarMensagem}
                            setTipoMensagem={setTipoMensagem}
                            setMensagem={setMensagem}
                        />
                            :
                            <TabelaCategorias exibirFormulario={setExibirFormulario}
                                categoriaParaEdicao={categoriaParaEdicao}
                                setCategoriaParaEdicao={setCategoriaParaEdicao}
                                modoEdicao={modoEdicao}
                                setModoEdicao={setModoEdicao}
                            />
                    }
                </Pagina>
            </Container>
        );
    }
}