import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { useForm } from 'react-hook-form';
import professorValidator from '../../validators/professorValidator';
import ProfessorService from '../../services/academico/ProfessorService';

const Professor = () => {
    
    const params = useParams();
    const navigate = useNavigate();
    const {register, handleSubmit, setValue, formState: { errors },} = useForm();
  
    useEffect(() => {
      if (params.id) {
        const professor = ProfessorService.get(params.id);
  
        for (let campo in professor) {
          setValue(campo, professor[campo]);
        }
      }
    }, []);
  
    function salvar(dados) {
      if (params.id) {
        ProfessorService.update(params.id, dados);
      } else {
        ProfessorService.create(dados);
      }
      navigate("/professores");
    }  

    return (
        <div>
            <h1>Professores</h1>
            <Form>
            <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" placeholder="Informe seu Nome Completo" isInvalid={errors.nome} {...register("nome", professorValidator.nome )} />
                    {errors.nome && <p style={{color: "red"}}>{errors.nome.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>CPF: </Form.Label>
                    <Form.Control type="number" placeholder="Informe seu CPF" isInvalid={errors.cpf} {...register("cpf", professorValidator.cpf )} />
                    {errors.cpf && <p style={{color: "red"}}>{errors.cpf.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="matricula">
                    <Form.Label>Matricula: </Form.Label>
                    <Form.Control type="number" placeholder="Informe sua Matricula" isInvalid={errors.matricula} {...register("matricula", professorValidator.matricula )} />
                    {errors.matricula && <p style={{color: "red"}}>{errors.matricula.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="salario">
                    <Form.Label>Salario: </Form.Label>
                    <Form.Control type="number" placeholder="Informe seu Salário" isInvalid={errors.salario} {...register("salario", professorValidator.salario )} />
                    {errors.salario && <p style={{color: "red"}}>{errors.salario.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>E-mail: </Form.Label>
                    <Form.Control type="email" placeholder="coloque seu E-mail" isInvalid={errors.email} {...register("email", professorValidator.email )} />
                    {errors.email && <p style={{color: "red"}}>{errors.email.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>CEP: </Form.Label>
                    <Form.Control type="number" placeholder="Informe seu CEP" isInvalid={errors.cep} {...register("cep", professorValidator.cep )} />
                    {errors.cep && <p style={{color: "red"}}>{errors.cep.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="logadouro">
                    <Form.Label>Logadouro: </Form.Label>
                    <Form.Control type="text" placeholder="Informe seu Logadouro" isInvalid={errors.logadouro} {...register("logadouro", professorValidator.logadouro )} />
                    {errors.logadouro && <p style={{color: "red"}}>{errors.logadouro.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="complemento">
                    <Form.Label>Complemento: </Form.Label>
                    <Form.Control type="text" placeholder="Informe seu Complemento" isInvalid={errors.complemento} {...register("complemento", professorValidator.complemento)} />
                    {errors.complemento && <p style={{color: "red"}}>{errors.complemento.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="numero">
                    <Form.Label>Numero: </Form.Label>
                    <Form.Control type="number" placeholder="Informe seu Numero" isInvalid={errors.numero} {...register("numero", professorValidator.numero)} />
                    {errors.numero && <p style={{color: "red"}}>{errors.numero.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="bairro">
                    <Form.Label>Bairro: </Form.Label>
                    <Form.Control type="text" placeholder="Informe seu Bairro" isInvalid={errors.bairro} {...register("bairro", professorValidator.bairro)} />
                    {errors.bairro && <p style={{color: "red"}}>{errors.bairro.message}</p>}
                </Form.Group>
                <div className="text-center">
                    <Button onClick={handleSubmit(salvar)} className='btn btn-sucess'><FaCheck /> Salvar</Button>{' '}
                    <Link to={-1} className='btn btn-danger'><BsArrowLeft />  Voltar</Link>
                </div>
            </Form>
        </div>
    )
}

export default Professor