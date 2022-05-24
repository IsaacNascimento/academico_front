import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import {BsTrash, BsPencil} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {AiOutlineRollback} from 'react-icons/ai'
import SemestreService from '../../services/academico/SemestreService';

const SemestresLista = () => {

    const[salas, setSalas] = useState ([])

    useEffect(()=> {
        setSalas(SemestreService.getAll())
    }, [])

    function apagar(id) {
      if(window.confirm('Quer apagar a parada ?'))
      SemestreService.delete(id)
      setSalas(SemestreService.getAll())
    }

    console.log(SemestreService);
    
  return (
    <div>
        <Container>
        <h1>Semestre</h1>
        <Link className='btn btn-success' to={'/semestres/create'}><AiOutlinePlus/> Novo</Link>
        <Table className="mt-3" striped bordered hover>
         <thead>
        <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Data de inicio do curso</th>
        </tr>
        </thead>
        <tbody>
            {salas.map((item, i) => (
                <tr key={i}>
                <td>
                <Link to={'/semestres/' + i}><BsPencil className='text-primary'/></Link>{"  "}
                <BsTrash onClick={() => apagar (i)} className='text-danger'/>
                </td>
                <td>{item.nome}</td>
                <td>{item.datainicio}</td>
              </tr>
            ))}
        </tbody>
        </Table>
        <Link to={-1} className='btn btn-danger'><AiOutlineRollback/> Voltar</Link>
        </Container>
    </div>
  )
}

export default SemestresLista