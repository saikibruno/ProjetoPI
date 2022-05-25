import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiDeputados from '../services/apiDeputados'

const LIMIT = 18;
const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Bancadas = () => {
    const [frentes, setFrentes] = useState([])
    const [offset, setOffset] = useState([1])

    useEffect(() => {
        apiDeputados
            .get(
                "frentes?pagina=" +
                atual +
                "&itens=" +
                LIMIT +
                "&ordem=ASC&ordenarPor=nome"
            )
            .then((resultado) => {
                setFrentes(resultado.data.dados);
                console.log(offset);
            });
    }, [offset]);

    const atual = offset;
    const pages = 43;
    const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
    const first = Math.min(Math.max(atual - MAX_LEFT, 1), maxFirst);

  return (
    <div>

      <h1 ><strong className="text-success">Frentes</strong></h1>

      {frentes.map(item => (
        <ListGroup variant="flush">
          <ListGroup.Item variant="warning"><strong className="text-success">{item.titulo}</strong></ListGroup.Item>
        </ListGroup>
      ))}
                      <ul className="pagination">
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
                <br></br>
                <Link className='btn btn-danger' to={-1}>Voltar</Link>
                <br></br>
                <br></br>
    </div>
  )
}

export default Bancadas