import { Col, Container, FloatingLabel, Form, Row, Button, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incluirProduto, atualizarProduto } from "../../redux/produtoReducer.js";
import buscarCategorias from "../../redux/categoriaReducer.js";
import { toast } from "react-toastify"
import ESTADO from "../../redux/recursos/estado.js";
export default function FormCadProduto(props) {

    const produtoVazio = {
        codigo: 0,
        nome: '',
        descricao: '',
        qtdEstoque: '',
        dataValidade: '',
        precoCusto: '',
        precoVenda: '',
        categoria: {
            codigo: 0,
            descricao: '',
        },
    };
    const estadoInicialProduto = props.produtoParaEdicao;
    const [produto, setProduto] = useState(estadoInicialProduto);
    const [formValidado, setFormValidado] = useState(false);

    const { estado: estadoCat, mensagem: mensagemCat, categorias } = useSelector((state) => state.categoria);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(buscarCategorias());//Passando por parametro o retorno da função
        //Ações só chegam no estado global da aplicação 
    }, [dispatch]);//Observar o despachante para buscar cateogrias e manter a interface atualizada com as categorias

    const { estado, mensagem, produtos } = useSelector((state) => state.produto);//no estado da aplicação tem uma fatia chamada produto//state.produto


    function manipularMudancas(e) {
        const componente = e.currentTarget;
        setProduto({ ...produto, [componente.name]: componente.value });
    }

    function selecionarCategoria(e){
        const componente = e.currentTarget;
        setProduto({...produto, categoria:{
            "codigo": componente.value,
            "descricao": componente.options[componente.selectedIndex].text
        }});
    }

    function manipularSubmissao(e) {
        const form = e.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                dispatch(incluirProduto(produto));
                props.setMensagem('Produto incluído com sucesso');
                props.setTipoMensagem('success');
                props.setMostrarMensagem(true);
            }
            else {
                dispatch(atualizarProduto(produto));
                props.setModoEdicao(false);
                props.setProdutoParaEdicao(produtoVazio);
                props.setMensagem('Produto alterado com sucesso');
                props.setTipoMensagem('success');
                props.setMostrarMensagem(true);
            }
            setProduto(produtoVazio);
            setFormValidado(false);
        }
        else {
            setFormValidado(true);
        }
        e.stopPropagation();
        e.preventDefault();
    }

    return (
        <Container>
            {estado === ESTADO.ERRO ?
                toast.error(( {closeToast}) => {
                    <div>
                        <p>{mensagem}</p>
                    </div>
                    }, {toastId: estado})
                :
                null
            }
            {
                estado === ESTADO.PENDENTE ?
                toast(({closeToast})=>
                    <div>
                        <Spinner animation="border" role="status"></Spinner>
                        <p>Processando a requisição...</p>
                    </div>
                    , {toastId: estado})
                    :
                    null
            }
            {
                estado === ESTADO.OCIOSO ?
                setTimeout(()=>{
                    toast.dismiss();
                }, 2000)
                :
                null
            }
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Nome:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Ex: Cadeira"
                                    id="nome"
                                    name="nome"
                                    onChange={manipularMudancas}
                                    value={produto.nome}
                                    required />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group>
                            <FloatingLabel

                                label="Categoria:"
                                className="mb-3"
                            >
                                <Form.Select
                                    type="text"
                                    placeholder="Ex: 10,99"
                                    id="categoria"
                                    name="categoria"
                                    onChange={selecionarCategoria}
                                    value={produto.categoria.codigo}
                                    required />
                                        <option value="0" selected>Selecione uma categoria</option>
                                        {
                                            categorias?.map((categoria) =>
                                                <option key={categoria.codigo} value={categoria.codigo}>
                                                    {categoria.descricao}
                                                </option>
                                            )
                                        }
                                    {
                                        estadoCat === ESTADO.PENDENTE ?
                                        <Spinner animation="border" role="status">
                                            <span className="visually-hidden">Carregando categorias...</span>
                                        </Spinner>
                                        :
                                        null
                                    }
                                    {
                                        estadoCat === ESTADO.ERRO ?
                                        <p>Erro ao carregar as categorias: {mensagemCat}</p>
                                        :
                                        null
                                    }
                            </FloatingLabel>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group>
                        <FloatingLabel

                            label="Descrição:"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                placeholder="..."
                                id="descricao"
                                name="descricao"
                                onChange={manipularMudancas}
                                value={produto.descricao}
                                required />
                        </FloatingLabel>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group>
                        <FloatingLabel

                            label="Quantidade estoque:"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Ex: 100"
                                id="qtdEstoque"
                                name="qtdEstoque"
                                onChange={manipularMudancas}
                                value={produto.qtdEstoque}
                                required />
                        </FloatingLabel>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group>
                        <FloatingLabel

                            label="Preço Custo(R$):"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Ex: 10,99"
                                id="precoCusto"
                                name="precoCusto"
                                onChange={manipularMudancas}
                                value={produto.precoCusto}
                                required />
                        </FloatingLabel>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group>
                        <FloatingLabel

                            label="Preço Venda(R$):"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Ex: 10,99"
                                id="precoVenda"
                                name="precoVenda"
                                onChange={manipularMudancas}
                                value={produto.precoVenda}
                                required />
                        </FloatingLabel>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group>
                        <FloatingLabel

                            label="Data Validade:"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Ex: 4,9"
                                id="dataValidade"
                                name="dataValidade"
                                onChange={manipularMudancas}
                                value={produto.dataValidade}
                                required />
                        </FloatingLabel>
                    </Form.Group>
                </Col>
            </Row>


            <Row>
                <Col>
                    <Button type="submit" variant={"primary"}>{props.modoEdicao ? "Alterar" : "Cadastrar"}</Button>
                </Col>
                <Col>
                    <Button type="submit" variant={"secondary"} onClick={() => {
                        props.exibirFormulario(false);
                    }}>Voltar</Button>
                </Col>
            </Row>
        </Form>
        </Container >
    );
}