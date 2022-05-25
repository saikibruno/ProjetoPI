import React, { useEffect, useState } from 'react'
import { Alert, Badge, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiDeputados from '../services/apiDeputados'
import { BsArrowLeft } from "react-icons/bs";

const Agenda = () => {

  const [agenda, setAgenda] = useState([])

  useEffect(() => {

    apiDeputados.get('eventos').then(resultado => {
      setAgenda(resultado.data.dados)
      console.log(resultado.data.dados)

    })
  }, [])

  return (
    <div style={{ backgroundImage: 'url("")' }} >

      <h1 className="text-success"><strong>Agenda</strong></h1>
      <Row>
        {agenda.map(item => (
          <Col key={item.id} md={4} className="mb-3">
            <Alert variant="success" style={{ width: '350px', height: '210px' }}>
              <Badge bg="danger" text="Light">{item.situacao}</Badge>
              <Alert.Heading><strong>{item.descricaoTipo}</strong></Alert.Heading>
              <p>
                <strong>Data e Horário: </strong>
                {item.dataHoraInicio}
              </p>
              <Link className="btn btn-success" to={'/agenda/' + item.id}><b>Mais informações</b></Link>
            </Alert>
          </Col>
        ))}
      </Row>

      <br></br>
      <Link className='btn btn-danger' to={-1}><BsArrowLeft />  Voltar</Link>
      <br></br>
      <br></br>
    </div>
  )
}

export default Agenda