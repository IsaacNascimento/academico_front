import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { useForm } from 'react-hook-form';
import semestreValidator from '../../validators/semestreValidator';
import SemestreService from '../../services/academico/SemestreService';


const Semestres = () => {
    
    const params = useParams();
    const navigate = useNavigate();
    const {register, handleSubmit, setValue, formState: { errors },} = useForm();
  
    useEffect(() => {
      if (params.id) {
        const semestre = SemestreService.get(params.id);
  
        for (let campo in semestre) {
          setValue(campo, semestre[campo]);
        }
      }
    }, []);
  
    function salvar(dados) {
      if (params.id) {
        SemestreService.update(params.id, dados);
      } else {
        SemestreService.create(dados);
      }
      navigate("/semestres");
    }  

    return (
        <div>
            <h1>Semestres</h1>
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" placeholder="Informe seu Nome Completo" isInvalid={errors.nome} {...register("nome", semestreValidator.nome )} />
                    {errors.nome && <p style={{color: "red"}}>{errors.nome.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="datainicio">
                    <Form.Label>data do inicio: </Form.Label>
                    <Form.Control type="text" placeholder="Informe data do inicio do curso" isInvalid={errors.datainicio} {...register("datainicio", semestreValidator.datainicio)} />
                    {errors.datainicio && <p style={{color: "red"}}>{errors.datainicio.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="datafim">
                    <Form.Label>data final: </Form.Label>
                    <Form.Control type="text" placeholder="Informe data final do seu curso" isInvalid={errors.datafim} {...register("datafim", semestreValidator.datafim)} />
                    {errors.datafim && <p style={{color: "red"}}>{errors.datafim.message}</p>}
                </Form.Group>
                <div className="text-center">
                    <Button onClick={handleSubmit(salvar)} className='btn btn-sucess'><FaCheck /> Salvar</Button>{' '}
                    <Link to={-1} className='btn btn-danger'><BsArrowLeft />  Voltar</Link>
                </div>
            </Form>
        </div>
    )
}

export default Semestres