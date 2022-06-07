import { Avatar, Chip } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Card, Col, Figure, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import apiDeputados from '../services/apiDeputados';
import { BsArrowLeft } from "react-icons/bs";

const PartidoDetalhes = () => {

    const params = useParams();
    const [partido, setPartido] = useState({});
    const [membros, setMembros] = useState([]);

    useEffect(() => {
        apiDeputados.get('partidos/' + params.id).then(resultado => {
            setPartido(resultado.data.dados);
            console.log(resultado.data.dados)
        })

        apiDeputados.get('partidos/' + params.id + '/membros').then(resultado => {
            setMembros(resultado.data.dados);
            console.log(resultado.data.dados)
        })

    }, [])

    return (
        <div>
            {partido.id &&
                <>
                    <br></br>
                    <h1 ><strong className="text-success">{partido.sigla} - {partido.nome}</strong></h1>

                    <Card border="success">
                        <Card.Body>
                            <Row>
                                <Card.Text>
                                    <strong className="text-success">Situação: </strong>
                                    {partido.status.situacao}
                                </Card.Text>
                                <Card.Text>
                                    <strong className="text-success">Legislatura: </strong>
                                    {partido.status.idLegislatura}ª
                                </Card.Text>
                                <Card.Text>
                                    <strong className="text-success">Quantidade de Membros: </strong>
                                    {partido.status.totalMembros}
                                </Card.Text>
                                <Card.Text>
                                    <strong className="text-success">Líder: </strong>
                                    {partido.status.lider.nome}
                                </Card.Text>
                                <Card.Text>
                                    <strong className="text-success">Membros do Partido: </strong>
                                </Card.Text>
                                <br></br>
                            </Row>
                            <Row>
                                {membros.map(item => (
                                    <Col md={2} className="mb-4">
                                        <Link to={'/deputados/' + item.id} size="auto" style={{ textDecoration: 'none' }}>
                                        <Chip
                                            color="success"
                                            avatar={<Avatar src={item.urlFoto} />}
                                            label={item.nome}
                                            variant="outlined"
                                            sx={{ width: 194, height: 44 }}
                                            style={{ cursor: 'pointer' }}
                                        />
                                        </Link>
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