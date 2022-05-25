import React, { useEffect, useState } from 'react'
import { Badge, Card, Figure } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import apiDeputados from '../services/apiDeputados';

const AgendaDetalhes = () => {
    const params = useParams();

    const [agenda, setAgenda] = useState({});

    useEffect(() => {
        apiDeputados.get('eventos/' + params.id).then(resultado => {
            setAgenda(resultado.data.dados);
            console.log(resultado.data.dados)
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
                    <Card border="success">
                        <Card.Body>
                            <Card.Text>
                                <strong className="text-success">Data e Horário: </strong>
                                {agenda.dataHoraInicio}
                            </Card.Text>
                            <Card.Text>
                                <strong className="text-success">Local Externo: </strong>
                                {agenda.localExterno}
                            </Card.Text>
                            <Card.Text>
                                <strong className="text-success">Descrição: </strong>
                                {agenda.descricao}
                            </Card.Text>
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

