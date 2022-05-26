import { Button, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiDeputados from '../services/apiDeputados'

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
                <h1 className="text-success"><strong>Quem são os deputados</strong></h1>
                <Row>
                    {deputados.map(item => (
                        <Col key={item.id} md={3} className="mb-4">
                            <Card sx={{
                                maxWidth:
                                    285
                            }}>
                                <CardMedia
                                    component="img"
                                    height="340"
                                    image={item.urlFoto}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {item.nome}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    {item.siglaPartido}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Veja mais...</Button>
                                </CardActions>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <ul class="pagination">
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