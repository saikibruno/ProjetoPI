import React from "react";
import { Container, Figure, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsInstagram, BsFacebook, BsTwitter, BsTelegram } from "react-icons/bs";
import '../App.css';

const Menu = () => {
  return (
    <div>
      <Nav style={{ backgroundColor: "#2f7958" }} defaultActiveKey="/home">
        <Nav.Item>
          <Container className="container-sm">
            <BsTelegram className="text-light" />{'    '}
            <BsFacebook className="text-light" />{'    '}
            <BsTwitter className="text-light" />{'    '}
            <BsInstagram className="text-light" />{'    '}
          </Container>
        </Nav.Item>
      </Nav>
      <Navbar style={{ backgroundColor: "#004a2f" }} variant="dark">
        <Container>
          <Figure.Image
            width={141}
            margin={10}
            height={180}
            alt="291x300"
            src="https://www.camara.leg.br/midias/image/2022/03/marca-camara-preferencial-cores.png"
          />
        </Container>
        <Container>
          <Nav className="me-auto">
            <Link className="nav-link" to="/deputados"><strong className="text-light">Deputados   </strong></Link>{'    '}
            <Link className="nav-link" to="/bancadas"><strong className="text-light">Bancadas   </strong></Link>{'    '}
            <Link className="nav-link" to="/partidos"><strong className="text-light">Partidos   </strong></Link>{'    '}
            <Link className="nav-link" to="/agenda"><strong className="text-light">Agenda   </strong></Link>{'    '}
            <Link className="nav-link" to="/home"><strong className="text-light">Notícias   </strong></Link>{'    '}
            <Link className="nav-link" to="/faleConosco"><strong className="text-light">Fale Conosco   </strong></Link>{'    '}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
