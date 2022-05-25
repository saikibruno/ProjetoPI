import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Col, Container, Nav, Row} from "react-bootstrap";
import Agenda from "./pages/agenda";
import AgendaDetalhes from "./pages/AgendaDetalhes";
import FaleConosco from "./pages/FaleConosco";
import Deputados from "./pages/Deputados";
import Partidos from "./pages/Partidos";
import Bancadas from "./pages/Bancadas";

function App() {
  return (
    <div class="background-image">
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
           
            <Route path="/home" element={<Home />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/agenda/:id" element={<AgendaDetalhes />} />
            <Route path="/deputados" element={<Deputados />} />
            <Route path="/faleConosco" element={<FaleConosco />} />
            <Route path="/partidos" element={<Partidos />} />
            <Route path="/bancadas" element={<Bancadas />} />
          </Routes>
        </Container>
      </BrowserRouter>

      <Nav class="menu-footer">
          <Nav.Item>
            <p><strong>56ª Legislatura - 4ª Sessão Legislativa Ordinária</strong></p>
            <Row>
              <Col class="col-md-6">
                Câmara dos Deputados - Palácio do Congresso Nacional - Praça dos Três Poderes<br />
                Brasília - DF - Brasil - CEP 70160-900<br />
                CNPJ: 00.530.352/0001-59<br />
              </Col>
              <Col class="col-md-6">
                Disque-Câmara: 0800-0-619-619, de 8h às 20h<br />
                Atendimento presencial: de 9h às 19h
              </Col>
            </Row>
            <br />
          </Nav.Item>
        </Nav>
    </div>
  );
}

export default App;