import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import ProfessorService from '../../services/academico/ProfessorService'
import {BsTrash, BsPencil} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {AiOutlineRollback} from 'react-icons/ai'


const ProfessoresLista = () => {

    const[professores, setProfessores] = useState ([])

    useEffect(()=> {
        setProfessores(ProfessorService.getAll())
    }, [])

    function apagar(id) {
      if(window.confirm('Quer apagar a parada ?'))
      ProfessorService.delete(id)
      setProfessores(ProfessorService.getAll())
    }

    console.log(professores);
    
  return (
    <div>
        <Container>
        <h1>Professores</h1>
        <Link className='btn btn-success' to={'/professores/create'}><AiOutlinePlus/> Novo</Link>
        <Table className="mt-3" striped bordered hover>
         <thead>
        <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Matricula</th>
        </tr>
        </thead>
        <tbody>
            {professores.map((item, i) => (
                <tr key={i}>
                <td>
                <Link to={'/professores/' + i}><BsPencil className='text-primary'/></Link>{"  "}
                <BsTrash onClick={() => apagar (i)} className='text-danger'/>
                </td>
                <td>{item.nome}</td>
                <td>{item.matricula}</td>
              </tr>
            ))}
        </tbody>
        </Table>
        <Link to={-1} className='btn btn-danger'><AiOutlineRollback/> Voltar</Link>
        </Container>
    </div>
  )
}

export default ProfessoresLista