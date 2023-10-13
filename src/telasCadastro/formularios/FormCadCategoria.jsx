import { Container, Button, Row, Col, FloatingLabel, Form } from "react-bootstrap";
import { useState } from "react";
export default function FormCadCategoria(props) {

    const categoriaVazia = {
        nome: ''
    };
    const [categoria, setCategoria] = useState(categoriaVazia);
    const [formValidado, setFormValidado]= useState(false);

    function manipularMudancas(e) {
        const comp = e.currentTarget;
        setCategoria({ ...categoria, [comp.name]: comp.value });
    }

    function manipularSubmissao(e) {
        const formulario = e.currentTarget;
        if (formulario.checkValidity()) {
            props.setListaCategorias([...props.listaCategorias, categoria]);
            props.setMensagem('Categoria incluída com sucesso');
            props.setTipoMensagem('success');
            props.setMostrarMensagem(true);
            setCategoria(categoriaVazia);
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
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel

                                label="Categoria:"
                                className="mb-3"
                            >

                                <Form.Control
                                    type="text"
                                    placeholder="Eletrodomésticos"
                                    id="nome"
                                    name="nome" onChange={manipularMudancas}
                                    value={categoria.nome}
                                    required />

                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome da categoria!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6} offset={5}>
                        <Button type="submit" variant={"primary"}>Cadastrar</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        
                        <Button type="submit" variant={"secondary"} onClick={()=>{
                            props.exibirFormulario(false);
                        }}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}