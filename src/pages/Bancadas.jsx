import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import { BsCalendar3 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import apiDeputados from '../services/apiDeputados'
import { Col, Row } from 'react-bootstrap'

const Bancadas = () => {

  const [agenda, setAgenda] = useState([])

  useEffect(() => {

    apiDeputados.get('eventos').then(resultado => {
      setAgenda(resultado.data.dados)
      console.log(resultado.data.dados)

    })
  }, [])

  return (
    <div>
      <br></br>
      <h1 className="text-success"><strong><BsCalendar3 />  Bancadas</strong></h1>
      <br></br>

      <Row>
        {agenda.map(item => (
          <Col key={item.id} md={4} className="mb-3">
          <Card sx={{ maxWidth:
           345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://www12.senado.leg.br/radio/1/primeiro-item/2021/06/14/agenda-da-camara-dos-deputados/@@images/a5b20c2d-8cc6-4d90-a135-fc498d0297f5.jpeg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {item.descricaoTipo}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          </Col>
        ))}
      </Row>
      <br></br>
      <Link className='btn btn-danger' to={-1}>Voltar</Link>
      <br></br>
      <br></br>
    </div>
  )
}

export default Bancadas