import { Avatar, Chip } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Badge, Card, Col, Figure, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import apiDeputados from '../services/apiDeputados';

const PartidoDetalhes = () => {
    const params = useParams();

    const [partido, setPartido] = useState({});
    const [participantes, setParticipantes] = useState([]);
    const [organizador, setOrganizador] = useState([]);


    useEffect(() => {
        apiDeputados.get('eventos/' + params.id).then(resultado => {
            setPartido(resultado.data.dados);
            console.log(resultado.data.dados)
        })

        apiDeputados.get('eventos/' + params.id + '/deputados').then(resultado => {
            setParticipantes(resultado.data.dados);
            console.log(resultado.data.dados)
        })

        apiDeputados.get('eventos/' + params.id + '/orgaos').then(resultado => {
            setOrganizador(resultado.data.dados);
            console.log(resultado.data.dados)
        })

    }, [])

    return (
        <div>
            {partido.id &&
                <>
                    <br></br>
                    <Figure.Image
                        width={151}
                        height={160}
                        alt="271x280"
                        src="https://www12.senado.leg.br/radio/1/primeiro-item/2021/06/14/partido-da-camara-dos-deputados/@@images/a5b20c2d-8cc6-4d90-a135-fc498d0297f5.jpeg"
                    />
                    <h1 className="text-success"><strong>{partido.descricaoTipo}</strong></h1>
                    <Badge bg="danger" text="Light">{partido.situacao}</Badge>
                    <br></br>
                    <br></br>
                    <Card border="success">
                        <Card.Body>
                            <Card.Text>
                                <strong className="text-success">Data e Horário: </strong>
                                {partido.dataHoraInicio}
                            </Card.Text>
                            <Card.Text>
                                <strong className="text-success">Local: </strong>
                                {partido.localExterno} {partido.localCamara [partido.localCamara.name] }
                            </Card.Text>
                            <Card.Text>
                                <strong className="text-success">Descrição: </strong>
                                {partido.descricao}
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
                                        <Chip
                                            color="success"
                                            avatar={<Avatar  src={item.urlFoto} />}
                                            label={item.nome}
                                            variant="outlined"
                                            sx={{ width: 194, height: 44 }}
                                        />
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

export default PartidoDetalhes