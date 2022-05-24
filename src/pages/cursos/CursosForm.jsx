import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { useForm } from 'react-hook-form'
import cursoValidator from '../../validators/cursoValidator'
import CursoService from '../../services/academico/CursoService'

const CursosForm = () => {

    const params = useParams();
    const navigate = useNavigate();
    const {register, handleSubmit, setValue, formState: { errors },} = useForm();

    useEffect(() => {
        if (params.id) {
        const cursos = CursoService.get(params.id);

        for (let campo in cursos) {
            setValue(campo, cursos[campo]);
        }
    }
  }, []);

  function salvar(dados) {
    if (params.id) {
        CursoService.update(params.id, dados);
    } else {
        CursoService.create(dados);
    }
    navigate("/cursos");
  }

    return (
        <div>
            <h1>Cursos</h1>
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" placeholder="Informe seu Nome do curso" isInvalid={errors.nome} {...register("nome", cursoValidator.nome)} />
                    {errors.nome && <p style={{color: "red"}}>{errors.nome.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="curso">
                    <Form.Label>Duração: </Form.Label>
                    <Form.Control type="number" placeholder="Informe a Duração do curso" isInvalid={errors.curso} {...register("curso", cursoValidator.curso)} />
                    {errors.curso && <span className="text-danger">{errors.curso.message}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Modalidade: </Form.Label>
                    <Form.Control type="text" placeholder="Informe a Modalidade curso" isInvalid={errors.modalidade} {...register("modalidade", cursoValidator.modalidade)} />
                    {errors.modalidade && <p style={{color: "red"}}>{errors.modalidade.message}</p>}
                </Form.Group>
                <div className="text-center">
                    <Button onClick={handleSubmit(salvar)}><FaCheck /> Salvar</Button>{' '}
                    <Link to={-1} className='btn btn-danger'><BsArrowLeft />  Voltar</Link>
                </div>
            </Form>
        </div>
    )
}

export default CursosForm