import React from "react";
import { Container, Figure, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsInstagram, BsFacebook, BsTwitter, BsTelegram } from "react-icons/bs";
import '../App.css';

const Menu = () => {
  return (
    <div>
      <Nav style={{ backgroundColor: "#2f7958" }} defaultActiveKey="/home">
      <Container>
        <Nav.Item>
          
            <Stack direction="horizontal" gap={4}>
              <div className=" ms-auto"> <a target={"_blank"} rel={"noreferrer"} href="https://t.me/CamaradosDeputados"><h4><BsTelegram className="text-light " /></h4>{'    '}</a></div>
              <div> <a target={"_blank"} rel={"noreferrer"} href="https://www.facebook.com/camaradeputados"><h4><BsFacebook className="text-light" /></h4>{'    '}</a></div>
              <div> <a target={"_blank"} rel={"noreferrer"} href="https://twitter.com/camaradeputados"> <h4><BsTwitter className="text-light" /></h4>{'    '}</a></div>
              <div> <a target={"_blank"} rel={"noreferrer"} href="https://www.instagram.com/camaradeputado0s/"><h4><BsInstagram className="text-light" /></h4>{'    '}</a></div>
            </Stack>    
        </Nav.Item>
        </Container>
      </Nav>
      <Navbar style={{ backgroundColor: "#004a2f" }} variant="dark">
        <Container>
          <Figure.Image
            width={341}
            margin={10}
            height={180}
            alt="491x500"
            src="data:image/png;base64,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"
          />
        </Container>
        <Container>
          <Nav >
            <Link className="nav-link" to="/deputados"><strong className="text-light">Deputados</strong></Link>
            <Link className="nav-link" to="/bancadas"><strong className="text-light">Frentes Parlamentares</strong></Link>
            <Link className="nav-link" to="/partidos"><strong className="text-light">Partidos</strong></Link>
            <Link className="nav-link" to="/agenda"><strong className="text-light">Agenda</strong></Link>
            <Link className="nav-link" to="/home"><strong className="text-light">Notícias</strong></Link>
            <Link className="nav-link" to="/faleConosco"><strong className="text-light">Fale Conosco</strong></Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
