import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import apiDeputados from "../services/apiDeputados";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import "../App.css";

const DeputadosDetalhes = () => {
  const params = useParams();
  const [deputado, setDeputado] = useState({});
  const [despesas, setDespesas] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPerPage] = useState(2);

  let end = page * totalPerPage;
  let start = end - totalPerPage;
  const paginado = despesas.slice(start, end);
  const TotalPages = Math.ceil(despesas.length / totalPerPage);

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
    apiDeputados.get("/deputados/" + params.id).then((resultado) => {
      setDeputado(resultado.data.dados);
    });

    apiDeputados
      .get("/deputados/" + params.id + "/despesas")
      .then((resultado) => {
        setDespesas(resultado.data.dados);
      });
  }, []);

  return (
    <div>
      {!deputado.id && <h1>Carregando... Aguarde!</h1>}

      {deputado.id && (
        <div>
          <h1>{deputado.nome}</h1>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={deputado.ultimoStatus.urlFoto} />
              </Card>
            </Col>
            <Col md={8}>
              <h1 className="text-success">
                <strong>{deputado.nomeCivil}</strong>
              </h1>
              <br></br>
              <p>
                <strong>CPF: </strong>
                {deputado.cpf}
              </p>
              <p>
                <strong>E-mail: </strong>
                {deputado.ultimoStatus.gabinete.email}
              </p>
              <p>
                <strong>Escolaridade: </strong>
                {deputado.escolaridade}
              </p>
              <p>
                <strong>Data de Nascimento: </strong>
                {deputado.dataNascimento}
              </p>
              <p>
                <strong>Local de Nascimento: </strong>
                {deputado.municipioNascimento} - {deputado.ufNascimento}
              </p>
              <p>
                <strong>Sexo: </strong>
                {deputado.sexo}
              </p>
              <p>
                <strong>Situação: </strong>
                {deputado.ultimoStatus.situacao}
              </p>
              <p>
                <strong>Condição Eleitoral: </strong>
                {deputado.ultimoStatus.condicaoEleitoral}
              </p>
              <Link className="btn btn-danger" to={-1}>
                Voltar
              </Link>
            </Col>
            <Col md={12} className="mt-3">
              <strong>
                <h1 className="text-success">Despesas</h1>
              </strong>
              <Button className="btn btn-success" onClick={prevPage}>
                <BiSkipPrevious />
              </Button>{" "}
              {page} / {TotalPages}{" "}
              <Button className="btn btn-success" onClick={nextPage}>
                <BiSkipNext />
              </Button>
              <br />
              <br />
            </Col>
            <Row>
              {paginado.map((item) => (
                <Col className="mb-3" md={12} key={item.codDocumento}>
                  <Card className="bg_fosco">
                    <Card.Body>
                      <Card.Title>
                        <strong>{item.tipoDespesa}</strong>
                      </Card.Title>
                      <Card.Text>
                        <strong>Ano: </strong>
                        {item.ano}
                        <br />
                        <strong>Mês: </strong>
                        {item.mes}
                        <br />
                        <strong>Códico do Documento: </strong>
                        {item.codDocumento}
                        <br />
                        <strong>Tipo Documento: </strong>
                        {item.tipoDocumento}
                        <br />
                        <strong>codigo do tipo de documento: </strong>
                        {item.codTipoDocumento}
                        <br />
                        <strong>Data do Documento: </strong>
                        {item.dataDocumento}
                        <br />
                        <strong>Número do Documento: </strong>
                        {item.numDocumento}
                        <br />
                        <strong>Valor do Documento: </strong>R${" "}
                        {item.valorDocumento}
                        <br />
                        <strong>Nome do Fornecedor: </strong>
                        {item.nomeFornecedor}
                        <br />
                        <strong>Valor Liquido: </strong>R$ {item.valorLiquido}
                        <br />
                        <strong>Parcela: </strong>
                        {item.parcela}
                        <br />
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <Col>
              <Button className="btn btn-success" onClick={prevPage}>
                <BiSkipPrevious />
              </Button>{" "}
              {page} / {TotalPages}{" "}
              <Button className="btn btn-success" onClick={nextPage}>
                <BiSkipNext />
              </Button>
              <br />
              <br />
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default DeputadosDetalhes;
