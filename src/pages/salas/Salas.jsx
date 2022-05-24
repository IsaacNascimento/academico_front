import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { useForm } from 'react-hook-form';
import salaValidator from '../../validators/salaValidator';
import SalaService from '../../services/academico/SalaService';


const Salas = () => {
    
    const params = useParams();
    const navigate = useNavigate();
    const {register, handleSubmit, setValue, formState: { errors },} = useForm();
  
    useEffect(() => {
      if (params.id) {
        const sala = SalaService.get(params.id);
  
        for (let campo in sala) {
          setValue(campo, sala[campo]);
        }
      }
    }, []);
  
    function salvar(dados) {
      if (params.id) {
        SalaService.update(params.id, dados);
      } else {
        SalaService.create(dados);
      }
      navigate("/salas");
    }   

    return (
        <div>
            <h1>Salas</h1>
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" placeholder="Informe seu Nome Completo" isInvalid={errors.nome} {...register("nome", salaValidator.nome )} />
                    {errors.nome && <p style={{color: "red"}}>{errors.nome.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="capacidade">
                    <Form.Label>Capacidade: </Form.Label>
                    <Form.Control type="text" placeholder="Informe Capacidade da sala" isInvalid={errors.capacidade} {...register("capacidade", salaValidator.capacidade)} />
                    {errors.capacidade && <p style={{color: "red"}}>{errors.capacidade.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="tipo">
                    <Form.Label>Tipo da sala: </Form.Label>
                    <Form.Control type="text" placeholder="Informe qual é o Tipo da sala" isInvalid={errors.tipo} {...register("tipo", salaValidator.tipo)} />
                    {errors.tipo && <p style={{color: "red"}}>{errors.tipo.message}</p>}
                </Form.Group>
                <div className="text-center">
                    <Button onClick={handleSubmit(salvar)} className='btn btn-sucess'><FaCheck /> Salvar</Button>{' '}
                    <Link to={-1} className='btn btn-danger'><BsArrowLeft />  Voltar</Link>
                </div>
            </Form>
        </div>
    )
}

export default Salas