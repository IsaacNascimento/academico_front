import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import { useForm } from "react-hook-form";
import disciplinaValidator from "../../validators/disciplinaValidator";
import DisciplinaService from "../../services/academico/DisciplinaService";

const Disciplina = () => {
  const params = useParams();
  const navigate = useNavigate();
  const {register, handleSubmit, setValue, formState: { errors },} = useForm();

  useEffect(() => {
    if (params.id) {
      const disciplina = DisciplinaService.get(params.id);

      for (let campo in disciplina) {
        setValue(campo, disciplina[campo]);
      }
    }
  }, []);

  function salvar(dados) {
    if (params.id) {
      DisciplinaService.update(params.id, dados);
    } else {
      DisciplinaService.create(dados);
    }
    navigate("/disciplinas");
  }

  return (
    <div>
      <h1>Disciplina</h1>
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Informe seu Nome Completo"
            isInvalid={errors.nome}
            {...register("nome", disciplinaValidator.nome)}
          />
          {errors.nome && <p style={{ color: "red" }}>{errors.nome.message}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="curso">
          <Form.Label>Curso: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Informe seu Curso"
            isInvalid={errors.curso}
            {...register("curso", disciplinaValidator.curso)}
          />
          {errors.curso && (
            <p style={{ color: "red" }}>{errors.curso.message}</p>
          )}
        </Form.Group>
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className="btn btn-sucess"><FaCheck /> Salvar</Button>{" "}
          <Link to={-1} className="btn btn-danger"><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>
    </div>
  );
};

export default Disciplina;
