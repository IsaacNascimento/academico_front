import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import {Cursos} from "./pages/cursos/Curso";
import CursosLista from "./pages/cursos/CursosLista";
import CursosForm from "./pages/cursos/CursosForm";
import Disciplinas from "./pages/disciplinas/Disciplinas";
import DisciplinasLista from "./pages/disciplinas/DisciplinasLista";
import { Alunos } from "./pages/alunos/Aluno";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<Cursos />} />
            <Route path="/cursos" element={<CursosLista />} />
            <Route path="/cursos/create" element={<Cursos />} />
            <Route path="/disciplinas" element={<DisciplinasLista />} />
            <Route path="/disciplinas/create" element={<Disciplinas />} />
            <Route path="/alunos" element={<Alunos />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
