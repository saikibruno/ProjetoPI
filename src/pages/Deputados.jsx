import { CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiDeputados from '../services/apiDeputados'
import { BsPeopleFill } from "react-icons/bs";

const LIMIT = 12;
const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Deputados = () => {
    const [deputados, setDeputados] = useState([])
    const [offset, setOffset] = useState([1])

    useEffect(() => {
        apiDeputados
            .get(
                "deputados?pagina=" +
                atual +
                "&itens=" +
                LIMIT +
                "&ordem=ASC&ordenarPor=nome"
            )
            .then((resultado) => {
                setDeputados(resultado.data.dados);
                console.log(offset);
            });
    }, [offset]);

    const atual = offset;
    const pages = 43;
    const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
    const first = Math.min(Math.max(atual - MAX_LEFT, 1), maxFirst);


    return (
        <>

            <div>
                <br></br>
                <h1 className="text-success"><strong><BsPeopleFill />  Quem são os deputados</strong></h1>
                <br></br>
                <Row>
                    {deputados.map(item => (
                        <Col key={item.id} md={2} className="mb-4">
                            <Card sx={{
                                maxWidth:
                                    285
                            }}>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={item.urlFoto}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h7" component="div" className="text-success">
                                        <strong>{item.nome}</strong>
                                    </Typography>
                                    <Typography variant="body2" className="text-success">
                                        <strong>{item.siglaPartido}</strong>
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <h6><Link className='btn btn-success' to={'/deputados/' + item.id} size="small"><strong>Mais informações</strong></Link></h6>
                                </CardActions>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <br></br>
                <ul class="pagination" color="text.success">
                    {Array.from({ length: Math.min(MAX_ITEMS, pages) })
                        .map((_, index) => index + first)
                        .map((page) => (
                            <li key={page}>
                                <button
                                    onClick={() => setOffset(page)}
                                    className={page === atual ? "pagination__item--active" : null}
                                >
                                    {page}
                                </button>
                            </li>
                        ))}
                </ul>
                <Link className='btn btn-danger' to={-1}>Voltar</Link>
                <br></br>
                <br></br>
            </div>
        </>

    )
}


export default Deputados