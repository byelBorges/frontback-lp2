import { Container, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap"
import { useState } from "react";
export default function FormCadFornecedor(props) {

    const fornecedorVazio = {
        cnpj:'',
        nome: '',
        endereco: '',
        email: '',
        numero: '',
        cep:'',
        telefone: '',
    }
    const estadoInicialFornecedor = props.fornecedorParaEdicao;
    const [fornecedor, setFornecedor] = useState(estadoInicialFornecedor);
    const [formValidado, setFormValidado]= useState(false);

    function manipularSubmissao(e){
        const form = e.currentTarget;
        if(form.checkValidity()){
            if(!props.modoEdicao){
                props.setListaFornecedores([...props.listaFornecedores, fornecedor]);
                props.setMensagem("Fornecedor incluido com sucesso!");
                props.setTipoMensagem("success");
                props.setMostrarMensagem(true);
            }
            else{
                props.setListaFornecedores([...props.listaFornecedores.filter((itemFornecedor)=>itemFornecedor.cnpj !== fornecedor.cnpj), fornecedor]);
                props.setModoEdicao(false);
                props.setFornecedorParaEdicao(fornecedorVazio);
                props.setMensagem("Fornecedor alterado com sucesso!");
                props.setTipoMensagem("success");
                props.setMostrarMensagem(true);
            }
            setFornecedor(fornecedorVazio);
            setFormValidado(false);
        }
        else{

            setFormValidado(true);
        }
        e.stopPropagation();
        e.preventDefault();
    }

    function manipularMudancas(e){
        const componente = e.currentTarget;
        setFornecedor({...fornecedor, [componente.name]: componente.value});
    }

    return (
        <Container>
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="CNPJ:"
                                className="mb-3"
                                
                            >

                                <Form.Control 
                                type="text" 
                                placeholder="00.000.000/0001-00" 
                                id="cnpj" 
                                name="cnpj"
                                onChange={manipularMudancas}
                                value={fornecedor.cnpj}
                                required/>

                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o CNPJ!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Nome Fantasia:"
                                className="mb-3"
                            >
                                <Form.Control 
                                type="text" 
                                placeholder="Informe o nome completo" 
                                id="nome" 
                                name="nome"
                                onChange={manipularMudancas}
                                value={fornecedor.nome}
                                required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Endereço:"
                                className="mb-3"
                            >
                                <Form.Control 
                                type="text" 
                                placeholder="Avenida/Rua/Alameda/Viela" 
                                id="endereco" 
                                name="endereco" 
                                onChange={manipularMudancas}
                                value={fornecedor.endereco}
                                required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o endereço!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email:"
                                className="mb-3"
                            >
                                <Form.Control 
                                type="text" 
                                placeholder="exemplo@dominio.com" 
                                id="email" 
                                name="email"
                                onChange={manipularMudancas}
                                value={fornecedor.email}
                                required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o email!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Nº:"
                                className="mb-3"
                            >
                                <Form.Control 
                                type="text" 
                                placeholder="Ex: 130" 
                                id="numero" 
                                name="numero" 
                                onChange={manipularMudancas}
                                value={fornecedor.numero}
                                required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o bairro!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="CEP:"
                                className="mb-3"
                            >
                                <Form.Control 
                                type="text" 
                                placeholder="00000-000" 
                                id="cep" 
                                name="cep" 
                                onChange={manipularMudancas}
                                value={fornecedor.cep}
                                required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o CEP!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Telefone:"
                                className="mb-3"
                            >
                                <Form.Control 
                                type="text" 
                                placeholder="(00) 00000-0000" 
                                id="telefone" 
                                name="telefone" 
                                onChange={manipularMudancas}
                                value={fornecedor.telefone}
                                required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o Telefone!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} offset={5}>
                        <Button type="submit" variant={"primary"}>{props.modoEdicao?'Alterar':'Cadastrar'}</Button>
                    </Col>

                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"} onClick={()=>{
                            props.exibirFormulario(false);
                        }}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>

        /*
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label=":"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="" id="" />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
        */
    );
}