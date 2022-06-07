import { Avatar, Chip } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Badge, Card, Col, Figure, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import apiDeputados from '../services/apiDeputados';

const AgendaDetalhes = () => {
    const params = useParams();

    const [agenda, setAgenda] = useState({});
    const [participantes, setParticipantes] = useState([]);
    const [organizador, setOrganizador] = useState([]);


    useEffect(() => {
        apiDeputados.get('eventos/' + params.id).then(resultado => {
            setAgenda(resultado.data.dados);            
        })

        apiDeputados.get('eventos/' + params.id + '/deputados').then(resultado => {
            setParticipantes(resultado.data.dados);            
        })

        apiDeputados.get('eventos/' + params.id + '/orgaos').then(resultado => {
            setOrganizador(resultado.data.dados);            
        })

    }, [])

    return (
        <div>
            {agenda.id &&
                <>
                    <br></br>
                    <Figure.Image
                        width={151}
                        height={160}
                        alt="271x280"
                        src="https://www12.senado.leg.br/radio/1/primeiro-item/2021/06/14/agenda-da-camara-dos-deputados/@@images/a5b20c2d-8cc6-4d90-a135-fc498d0297f5.jpeg"
                    />
                    <h1 className="text-success"><strong>{agenda.descricaoTipo}</strong></h1>
                    <Badge bg="danger" text="Light">{agenda.situacao}</Badge>
                    <br></br>
                    <br></br>
                    <Card border="success" className='bg_fosco'>
                        <Card.Body>
                            <Card.Text>
                                <strong className="text-success">Data e Horário: </strong>
                                {agenda.dataHoraInicio}
                            </Card.Text>
                            <Card.Text>
                                <strong className="text-success">Local: </strong>
                                {agenda.localExterno} {agenda.localCamara [agenda.localCamara.name] }
                            </Card.Text>
                            <Card.Text>
                                <strong className="text-success">Descrição: </strong>
                                {agenda.descricao}
                            </Card.Text>
                            {organizador.map(item => (
                                <Card.Text>
                                    <strong className="text-success">Orgão Organizador do Evento: </strong>
                                    {item.sigla} - {item.nome}
                                </Card.Text>
                            ))}
                            <Card.Text>
                                <strong className="text-success">Deputados Partiicipantes: </strong>
                            </Card.Text>
                            <Row>
                                {participantes.map(item => (
                                    <Col md={2} className="mb-4">                                        
                                        <Link to={'/deputados/' + item.id} size="auto" style={{ textDecoration: 'none' }}><Chip
                                            color="success"
                                            avatar={<Avatar  src={item.urlFoto} />}
                                            label={item.nome}
                                            variant="outlined"
                                            sx={{ width: 194, height: 44 }}  
                                            style={{ cursor: 'pointer' }}                                          
                                        /></Link>
                                    </Col>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <Link className='btn btn-danger' to={-1}>Voltar</Link>
                    <br></br>
                    <br></br>
                </>
            }
        </div >
    )
}

export default AgendaDetalhes

