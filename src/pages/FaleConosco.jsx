import { Form, Row, Col, Button } from 'react-bootstrap'
import { BsChatText } from "react-icons/bs";
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import FaleConoscoService from '../services/FaleConoscoService';
import faleConoscoValidator from '../validators/faleConoscoValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { mask, unMask } from 'remask';
import apiCep from '../services/apiCep';


const Cadastro = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (params.id) {
      const cadastro = FaleConoscoService.get(params.id)

      for (let campo in cadastro) {
        setValue(campo, cadastro[campo])
      }


    }
  }, [])

  function salvar(dados) {

    if (params.id) {
      FaleConoscoService.update(params.id, dados)
    } else {
      FaleConoscoService.create(dados)
    }

    navigate('/home')
  }

  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }

  function handleCep(event) {

    const valor = unMask(event.target.value)

    apiCep.get(`/ws/${valor}/json/`).then(resultado => {
      const endereco = resultado.data

      setValue('logradouro', endereco.logradouro)
      setValue('uf', endereco.uf)
      setValue('municipio', endereco.localidade)
      setValue('bairro', endereco.bairro)
    })
  }


  return (
    <div>

      <br></br>
      <h1 className="text-success"><strong><BsChatText />  Fale Conosco</strong></h1>
      <br></br>

      <Form>
        <Row className="mb-3">



          <Form.Group as={Col} md="5" controlId="nome">
            <Form.Label><strong>Nome:</strong></Form.Label>
            <Form.Control isInvalid={errors.nome} type="text" {...register("nome", faleConoscoValidator.nome)}
              placeholder="Insira seu nome" />
            {errors.nome && <span>{errors.nome.message}</span>}
          </Form.Group>

          <Form.Group as={Col} md="5" controlId="email">
            <Form.Label><strong>E-mail</strong></Form.Label>
            <Form.Control isInvalid={errors.email} type="email" {...register("email", faleConoscoValidator.email)}
              placeholder="Insira seu e-mail"
            />
            {errors.email && <span>{errors.email.message}</span>}
          </Form.Group>


        </Row>

        <Row className="mb-3">

          <Form.Group as={Col} md="5" controlId="cpf">
            <Form.Label><strong>CPF:</strong></Form.Label>
            <Form.Control isInvalid={errors.cpf} type="text"
              {...register("cpf", faleConoscoValidator.cpf)}
              mask="999.999.999-99" onChange={handleChange}
              placeholder="123-456-789-01"
            />
            {errors.cpf && <span>{errors.cpf.message}</span>}
          </Form.Group>

          <Form.Group as={Col} md="5" controlId="nascimento">
            <Form.Label><strong>Data de Nascimento: </strong></Form.Label>
            <Form.Control
              isInvalid={errors.nascimento} type="date" {...register("nascimento")}
            />
            {errors.nascimento && <span>{errors.nascimento.message}</span>}
          </Form.Group>

          <Form.Group as={Col} md="5" controlId="cep">
            <Form.Label><strong>CEP: </strong></Form.Label>
            <Form.Control
              type="text"
              {...register("cep")}
              mask="99.999-999"
              onChange={handleChange}
              onBlur={handleCep}
            />
            {errors.cep && <span>{errors.cep.message}</span>}
          </Form.Group>
          <Form.Group as={Col} md="5" controlId="uf">
            <Form.Label><strong>UF: </strong></Form.Label>
            <Form.Control type="text" {...register("uf")} />
            {errors.rua && <span>{errors.rua.message}</span>}
          </Form.Group>

          <Form.Group as={Col} md="5" controlId="bairro">
            <Form.Label><strong>Bairro: </strong></Form.Label>
            <Form.Control
              isInvalid={errors.bairro} type="text" {...register("bairro")}
            />
            {errors.bairro && <span>{errors.bairro.message}</span>}
          </Form.Group>

          <Form.Group as={Col} md="5" controlId="municipio">
            <Form.Label><strong>Município: </strong></Form.Label>
            <Form.Control type="text" {...register("municipio")} />
            {errors.cidade && <span>{errors.cidade.message}</span>}
          </Form.Group>

          <Form.Group as={Col} md="5" controlId="logradouro">
            <Form.Label><strong>Logradouro: </strong></Form.Label>
            <Form.Control type="text" {...register("logradouro")} />
            {errors.estado && <span>{errors.estado.message}</span>}
          </Form.Group>

          <Form.Group as={Col} md="5" controlId="numero">
            <Form.Label><strong>Número: </strong></Form.Label>
            <Form.Control
              isInvalid={errors.numero} type="number" {...register("numero")}
            />
            {errors.numero && <span>{errors.numero.message}</span>}
          </Form.Group>
        </Row>

        <Form>
          <Form.Group as={Col} md="10" controlId="comentario">
            <Form.Label><strong>Sua mensagem:</strong></Form.Label>
            <Form.Control as="textarea" rows={3} isInvalid={errors.complemento} type="text" {...register("comentario")}
            />
          </Form.Group>
        </Form>

        <br></br>
        <br></br>
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success' ><FaCheck /> Enviar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
        <br></br>
        <br></br>

      </Form>

    </div>
  )
}

export default Cadastro 