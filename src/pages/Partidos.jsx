import React, { useEffect, useState } from 'react'
import { ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiDeputados from '../services/apiDeputados'
import { BsFillPeopleFill } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";
import { Col } from 'antd';

const Partidos = () => {

  const [partidos, setPartidos] = useState([])

  useEffect(() => {

    apiDeputados.get('partidos').then(resultado => {
      setPartidos(resultado.data.dados)
      console.log(resultado.data.dados)
    })
  }, [])

  return (
    <div>

      <h1 ><strong className="text-success">Partidos</strong></h1>

      <Row>
        <Col md={2}>
          {partidos.map(item => (
            <ListGroup variant="flush">
              <ListGroup.Item variant="warning"><strong className="text-success"><BsFillPeopleFill />{'   '}
                {item.sigla} </strong> - {item.nome}</ListGroup.Item>
            </ListGroup>
          ))}
        </Col>
        <Col md={2}></Col>
        <Col md={2}></Col>
      </Row>
      <br></br>
      <Link className='btn btn-danger' to={-1}>Voltar</Link>
      <br></br>
      <br></br>
    </div>
  )
}

export default Partidos