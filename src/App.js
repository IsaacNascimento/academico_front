import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import CursosForm from "./pages/cursos/CursosForm";
import Professor from "./pages/professores/Professor";
import Disciplina from "./pages/disciplinas/Disciplina";
import Aluno from "./pages/alunos/Aluno";
import AlunosLista from "./pages/alunos/AlunosLista";

import Semestres from "./pages/semestres/Semestres";
import SemestresLista from "./pages/semestres/SemestresLista";

import Salas from "./pages/salas/Salas";
import SalasLista from "./pages/salas/SalasLista";

import CursosLista from "./pages/cursos/CursosLista";
import DisciplinasLista from "./pages/disciplinas/DisciplinasLista";
import ProfessoresLista from "./pages/professores/ProfessoresLista";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/cursos" element={<CursosLista />} />
            <Route path="/cursos/:id" element={<CursosForm />} />
            <Route path="/cursos/create" element={<CursosForm />} />

            <Route path="/disciplinas" element={<DisciplinasLista />} />
            <Route path="/disciplinas/:id" element={<Disciplina />} />
            <Route path="/disciplinas/create" element={<Disciplina />} />

            <Route path="/professores" element={<ProfessoresLista />} />
            <Route path="/professores/:id" element={<Professor />} />
            <Route path="/professores/create" element={<Professor />} /> 

            <Route path="/salas" element={<SalasLista />} />
            <Route path="/salas/:id" element={<Salas />} />
            <Route path="/salas/create" element={<Salas />} />

            <Route path="/alunos" element={<AlunosLista />} />
            <Route path="/alunos/:id" element={<Aluno />} />
            <Route path="/alunos/create" element={<Aluno />} />

            <Route path="/semestres" element={<SemestresLista />} />
            <Route path="/semestres:id" element={<Semestres />} />
            <Route path="/semestres/create" element={<Semestres />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;


// <Route path="/professores" element={<Professor />} /> aqui coloco a lista