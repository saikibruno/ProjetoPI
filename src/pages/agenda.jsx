import React, { useEffect, useState } from 'react'
import { Alert, Badge, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiDeputados from '../services/apiDeputados'
import { BsArrowLeft, BsCalendar3 } from "react-icons/bs";

const Agenda = () => {

  const [agenda, setAgenda] = useState([])

  useEffect(() => {

    apiDeputados.get('eventos').then(resultado => {
      setAgenda(resultado.data.dados)
    })
  }, [])

  return (
    <div>
      <br></br>
      <h1 className="text-success"><strong><BsCalendar3 />  Agenda de Junho</strong></h1>
      <br></br>
      <Row>
        {agenda.map(item => (
          <Col key={item.id} md={4} className="mb-3">
            <Alert variant="success" style={{ width: '350px', height: '220px' }} >
              <Badge bg="danger" text="Light">{item.situacao}</Badge>
              <br></br>
              <br></br>
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
      <Link className='btn btn-danger' to={-1}><BsArrowLeft />  Voltar</Link>
      <br></br>
      <br></br>
    </div>
  )
}

export default Agenda