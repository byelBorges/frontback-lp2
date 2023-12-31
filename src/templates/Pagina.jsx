import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import Menu from "./Menu";

export default function Pagina(props) {
    //Snippet - componente coringa react
    return (
        <>
            <Cabecalho conteudo="Sistema de Gestão Comercial" />
            <Menu />
            <div>
                {
                    //Filhos da página = props children
                }
                {props.children}
            </div>
            <Rodape conteudo="Rua X, 10 - Vila - Presidente Prudente/SP - CNPJ: 00.000.000/0001-00"/>
        </>

    );
}