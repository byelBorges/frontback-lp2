import { Col, Container, FloatingLabel, Form, Row, Button } from "react-bootstrap";
import { useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {adicionarProduto, atualizarProduto} from "../../redux/produtoReducer";
export default function FormCadProduto(props) {

    const produtoVazio = {
        nome: '',
        descricao: '',
        quantidade: '',
        avaliacao: '',
        preco: ''
    };
    const estadoInicialProduto = props.produtoParaEdicao;
    const [produto, setProduto] = useState(estadoInicialProduto)
    const [formValidado, setFormValidado] = useState(false);
    const {status, mensagem, listaProdutos} = useSelector((state)=>state.produto);
    const dispatch = useDispatch();
    function manipularMudancas(e){
        const componente = e.currentTarget;
        setProduto({...produto, [componente.name]: componente.value});
    }

    function manipularSubmissao(e){
        const form = e.currentTarget;
        if(form.checkValidity()){
            if(!props.modoEdicao){
                dispatch(adicionarProduto(produto));
                props.setMensagem('Produto incluído com sucesso');
                props.setTipoMensagem('success');
                props.setMostrarMensagem(true);
            }
            else{
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
        else{
            setFormValidado(true);
        }
        e.stopPropagation();
        e.preventDefault();
    }

    return (
        <Container>
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

                                label="Quantidade:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Ex: 100"
                                    id="quantidade"
                                    name="quantidade"
                                    onChange={manipularMudancas}
                                    value={produto.quantidade}
                                    required />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group>
                            <FloatingLabel

                                label="Preço (R$):"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Ex: 10,99"
                                    id="preco"
                                    name="preco"
                                    onChange={manipularMudancas}
                                    value={produto.preco}
                                    required />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group>
                            <FloatingLabel

                                label="Avaliação:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Ex: 4,9"
                                    id="avaliacao"
                                    name="avaliacao"
                                    onChange={manipularMudancas}
                                    value={produto.avaliacao}
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
        </Container>
    );
}