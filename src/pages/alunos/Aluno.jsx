import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate} from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { BsArrowLeft } from 'react-icons/bs';

import  cursoValidator from '../../validators/cursoValidator';
import { useForm } from 'react-hook-form';

export const Alunos = () => {

    // const [nome, setNome] = useState('')
    // const [duracao, setDuracao] = useState('')
    // const [modalidade, setModalidade] = useState('')

    // function handleNome(event){
    //     setNome(event.target.value);
    // }

    // function handleDuracao(event){
    //     setDuracao(event.target.value);
    // }

    // function handleModalidade(event){
    //     setModalidade(event.target.value);
    // }

    // function salvar(){
    //     const dados = {nome, duracao, modalidade}

    //     console.log(dados)
    // }

    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    // function salvar(dados) {
    //   DisciplinaService.create(dados)
    //   navigate('/disciplinas')
    // }

    return (
        <div>
            <h1>Alunos</h1>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" isInvalid={errors.nome} {...register("nome", cursoValidator.nome)} />
                    {errors.nome && <span>{errors.nome.message}</span>}
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Duração: </Form.Label>
                    <Form.Control type="number" isInvalid={errors.duracao} {...register("duracao", cursoValidator.duracao)}/>
                    {errors.duracao && <span>{errors.duracao.message}</span>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Modalidade: </Form.Label>
                    <Form.Control type="text"  isInvalid={errors.modalidade} {...register("modalidade", cursoValidator.modalidade)}/>
                    {errors.modalidade && <span>Campo Obrigatório</span>}
                </Form.Group>
                <div className="text-center">
                    <Button onClick={handleSubmit}><FaCheck /> Salvar</Button>{' '}
                    <Link to={-1} className='btn btn-danger'><BsArrowLeft />  Voltar</Link>
                </div>
            </Form>
        </div>
    )
}
