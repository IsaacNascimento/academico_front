import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import SalaService from '../../services/academico/SalaService'
import {BsTrash, BsPencil} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {AiOutlineRollback} from 'react-icons/ai'


const SalasLista = () => {

    const[salas, setProfessores] = useState ([])

    useEffect(()=> {
        setProfessores(SalaService.getAll())
    }, [])

    function apagar(id) {
      if(window.confirm('Quer apagar a parada ?'))
      SalaService.delete(id)
      setProfessores(SalaService.getAll())
    }

    console.log(SalaService);
    
  return (
    <div>
        <Container>
        <h1>Salas</h1>
        <Link className='btn btn-success' to={'/salas/create'}><AiOutlinePlus/> Novo</Link>
        <Table className="mt-3" striped bordered hover>
         <thead>
        <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Capacidade</th>
        </tr>
        </thead>
        <tbody>
            {salas.map((item, i) => (
                <tr key={i}>
                <td>
                <Link to={'/salas/' + i}><BsPencil className='text-primary'/></Link>{"  "}
                <BsTrash onClick={() => apagar (i)} className='text-danger'/>
                </td>
                <td>{item.nome}</td>
                <td>{item.capacidade}</td>
              </tr>
            ))}
        </tbody>
        </Table>
        <Link to={-1} className='btn btn-danger'><AiOutlineRollback/> Voltar</Link>
        </Container>
    </div>
  )
}

export default SalasLista