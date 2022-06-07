import React, { useEffect, useState } from 'react'
import { Col, Container, Figure, Row, Table } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiDeputados from '../services/apiDeputados'
import { BsPeopleFill } from "react-icons/bs";
import { FaSearchPlus } from "react-icons/fa";

const Partidos = () => {

  const params = useParams()
  const [partidos, setPartidos] = useState([])
  useEffect(() => {

    apiDeputados.get('partidos/').then(resultado => {
      setPartidos(resultado.data.dados);
      console.log(resultado.data.dados)
    })

  }, [])

  return (
    <div>
      <br></br>
      <h1 ><strong className="text-success"><BsPeopleFill />  Partidos</strong></h1>
      <br></br>
      <Container>
        <Row>
          <Col sm={6}>
            <Table striped bordered hover variant="success">
              <thead>
                <tr>
                  <th>Sigla</th>
                  <th>Nome do Partido</th>
                  <th>Mais informações</th>
                </tr>
              </thead>
              <tbody>
                {partidos.map(item => (
                  <tr key={item.id}>
                    <td><strong>{item.sigla}</strong></td>
                    <td>{item.nome}</td>
                    <td><Link className='btn btn-success' to={'/partidos/' + item.id} size="small">Veja mais <FaSearchPlus /></Link></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col sm={6}>
            <Figure style={{ width: '500px' }}>
              <Figure.Image
                width={271}
                height={280}
                alt="174x180"
                src="https://media.gazetadopovo.com.br/2022/01/20120059/partidos-logos-principais-960x540.png"
              />
            </Figure>
            <p className="text-success">

            <strong className="text-primary">Partidos políticos no Brasil</strong>
            <br></br>
            <br></br>
            Os partidos políticos representam um pilar fundamental na construção das sociedades globais. Isso porque desde o início das civilizações, ainda que diferentemente dos modelos atuais, as agremiações políticas já se apresentavam de maneira relevante ao unir grupos para a defesa de interesses comuns. Esse fenômeno pode ser observado mesmo em períodos mais remotos, quando Grécia e Roma, por exemplo, já contavam com grupos de seguidores de uma doutrina ou até mesmo de uma ideia.

              A evolução desse modelo fez com que o partido político, como é constituído na atualidade, ganhasse ainda mais espaço e notoriedade, tornando-se um importante instrumento para a organização e o estabelecimento da democracia representativa.

              Além disso, sua consolidação foi responsável, também, por assegurar a constituição de uma sociedade mais plural, conferindo à população a garantia de direitos e a possibilidade de acolhimento de suas demandas. Por essa razão, os partidos políticos se fazem absolutamente necessários para o desenvolvimento dos sistemas político e eleitoral e do país como todo.<br />

              <br />

              O Brasil é uma República presidencial organizada pelos Três Poderes: Executivo, Legislativo e Judiciário – sendo que cada um deles conta com instâncias federais, estaduais e municipais – e os partidos políticos desempenham papel fundamental dentro deste ordenamento.

              A organização das agremiações foi prevista pela Constituição Federal e os critérios para a criação dos partidos foi estabelecido na Lei dos Partidos Políticos, instituída em 1995. De acordo com a legislação, os partidos possuem autonomia para definir sua estrutura interna, organização e funcionamento e sua criação é livre, desde que respeite a soberania nacional, o regime democrático, o pluripartidarismo e os direitos fundamentais.

              O Brasil lidera o índice internacional em número de partidos, com o registro de 33 instituições partidárias no Tribunal Superior Eleitoral (TSE).
              </p>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Link className='btn btn-danger' to={-1}>Voltar</Link>
      <br></br>
      <br></br>
    </div>
  )
}

export default Partidos