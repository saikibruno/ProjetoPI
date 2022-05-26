import React, { useEffect, useState } from 'react'
import { ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiDeputados from '../services/apiDeputados'
import { BsFillPeopleFill } from "react-icons/bs";
import { Col } from 'antd';
import { Avatar } from '@mui/material';

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

      

      <Row>
        <Col class="col-md-6">
        <h1 ><strong className="text-success">Partidos</strong></h1>
          {partidos.map(item => (
            <ListGroup variant="flush">
              <ListGroup.Item variant="warning"><strong className="text-success"><Avatar alt="Remy Sharp" src="https://labpixel.com.br/digitalpixel/wp-content/uploads/2016/03/logo-prb.png"/>
                {item.sigla} </strong> - {item.nome}</ListGroup.Item>
            </ListGroup>
          ))}
        </Col>
      </Row>
      <br></br>
      <Link className='btn btn-danger' to={-1}>Voltar</Link>
      <br></br>
      <br></br>
    </div>
  )
}

export default Partidos