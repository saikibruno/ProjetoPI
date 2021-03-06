import React, { useEffect, useState } from "react";
import apiDeputados from "../services/apiDeputados";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiUserGroup } from "react-icons/hi";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";

const Bancadas = () => {

  const [frentes, setFrentes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPerPage] = useState(6);  

  let end = page * totalPerPage;
  let start = end - totalPerPage;
  const paginado = frentes.slice(start, end);
  const TotalPages = Math.ceil(frentes.length / totalPerPage);  
  function prevPage() {
    if (page <= 1) {
      return;
    }
    setPage(page - 1);
  }

  function nextPage() {
    if (page >= TotalPages) {
      return null;
    }
    setPage(page + 1);
  }
  useEffect(() => {
    apiDeputados.get("frentes?pagina=1").then((resultado) => {
      setFrentes(resultado.data.dados);      
    });    
  }, []);

  return (
    <div>
      <br></br>
      <h1>
        <strong className="text-success">
          <HiUserGroup /> Frentes Parlamentares
        </strong>
      </h1>      
      <Button className="btn btn-success" onClick={prevPage}>
        <BiSkipPrevious />
      </Button>{" "}
      {page} / {TotalPages}{" "}
      <Button className="btn btn-success" onClick={nextPage}>
        <BiSkipNext />
      </Button>
      <br></br>
      <br></br>
      <Table striped bordered hover className="bg_fosco" >
        <thead>
          <tr>
            <th className="text-center">Id</th>
            <th>Titulo</th>
            <th className="text-center">Legislatura</th>            
          </tr>
        </thead>
        <tbody>
          {paginado.map((item, index) => (
            <tr key={index}>
              <td className="text-center">{item.id}</td>
              <td>{item.titulo}</td>
              <td className="text-center">{item.idLegislatura}ª</td>              
            </tr>
          ))}
        </tbody>
      </Table>            
      <Button className="btn btn-success" onClick={prevPage}>
        <BiSkipPrevious />
      </Button>{" "}
      {page} / {TotalPages}{" "}
      <Button className="btn btn-success" onClick={nextPage}>
        <BiSkipNext />
      </Button>
      <br></br>
      <br />
      <Link className="btn btn-danger" to={-1}>
        Voltar
      </Link>
      <br></br>
      <br></br>
    </div>
  );
};

export default Bancadas;
