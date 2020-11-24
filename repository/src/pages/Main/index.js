import React from 'react';
import { FaGithub, FaPlus } from 'react-icons/fa';
import { Container, Form, SubmiteButton } from './style';

export default function Main() {
    return (
        <Container>
            <h1>
                <FaGithub size={25} />
                <h1>Meus Repositórios</h1>
            </h1>
            <Form onSubmit={() => { }}>
                <input type="text" placeholder="Adicionar Repositórios" />
                <SubmiteButton>
                    <FaPlus color="#FFF" size={14} />
                </SubmiteButton>
            </Form>
        </Container>
    )
}