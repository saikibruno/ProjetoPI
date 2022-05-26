
import React, { useState } from 'react'
import {Form, Row, Col, Button } from 'react-bootstrap'
import { BsChatText } from "react-icons/bs";



const Cadastro = () => {
  
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

  return (
    <div>

    <br></br>
    <h1 className="text-success"><strong><BsChatText/>  Fale Conosco</strong></h1>
    <br></br>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
  <Row className="mb-3">

  

  <Form.Group as={Col} md="5" controlId="validationCustom01">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Insira seu nome"
          />
          <Form.Control.Feedback type="invalid">
              Insira um nome.
            </Form.Control.Feedback>
        </Form.Group>

  <Form.Group as={Col} md="5" controlId="validationCustom01">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Insira seu e-mail"
          />
          <Form.Control.Feedback type="invalid">
              Insira um e-mail.
            </Form.Control.Feedback>
        </Form.Group>


    </Row>

    <Row className="mb-3">

    <Form.Group as={Col} md="5" controlId="validationCustom01">
          <Form.Label>CPF</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="123-456-789-01"
          />
          <Form.Control.Feedback type="invalid">
              Insira um e-mail.
            </Form.Control.Feedback>
        </Form.Group>

  <Form.Group as={Col} md="5" controlId="validationCustom01">
          <Form.Label>Cep</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="88888-888"
          />
          <Form.Control.Feedback type="invalid">
              Insira um Cep.
            </Form.Control.Feedback>
        </Form.Group>


    </Row>

    <Row className="mb-3">

    <Form.Group as={Col} md="5" controlId="validationCustom01">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Insira seu nome"
          />
          <Form.Control.Feedback type="invalid">
              Insira uma senha.
            </Form.Control.Feedback>
        </Form.Group>

  <Form.Group as={Col} md="5" controlId="validationCustom01">
          <Form.Label>Digite novamente sua senha</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Insira novamente sua senha"
          />
          <Form.Control.Feedback type="invalid">
              Insira uma senha.
            </Form.Control.Feedback>
        </Form.Group>

   </Row>

  <Row className="mb-3">

    <Form.Group as={Col}  md="5" controlId="formGridState">
      <Form.Label>País</Form.Label>
      <Form.Select defaultValue="Brasil">
        <option value="BRA">Brasil</option>
                <option value="AFG">Afeganistão</option>
								
								<option value="ZAF">África do Sul</option>
								
								<option value="ALB">Albânia</option>
								
								<option value="DEU">Alemanha</option>
								
								<option value="AND">Andorra</option>
								
								<option value="AGO">Angola</option>
								
								<option value="AIA">Anguilla</option>
								
								<option value="ATA">Antártida</option>
								
								<option value="ATG">Antígua e Barbuda</option>
								
								<option value="SAU">Arábia Saudita</option>
								
								<option value="DZA">Argélia</option>
								
								<option value="ARG">Argentina</option>
								
								<option value="ARM">Armênia</option>
								
								<option value="ABW">Aruba</option>
								
								<option value="AUS">Austrália</option>
								
								<option value="AUT">Áustria</option>
								
								<option value="AZE">Azerbaijão</option>
								
								<option value="BHS">Bahamas</option>
								
								<option value="BHR">Bahrein</option>
								
								<option value="BGD">Bangladesh</option>
								
								<option value="BRB">Barbados</option>
								
								<option value="BEL">Bélgica</option>
								
								<option value="BLZ">Belize</option>
								
								<option value="BEN">Benin</option>
								
								<option value="BMU">Bermudas</option>
								
								<option value="BLR">Bielorrússia</option>
								
								<option value="BOL">Bolívia</option>
								
								<option value="BIH">Bósnia e Herzegovina</option>
								
								<option value="BWA">Botsuana</option>
								
								<option value="BRA" selected="selected">Brasil</option>
								
								<option value="BRN">Brunei</option>
								
								<option value="BGR">Bulgária</option>
								
								<option value="BFA">Burquina Faso</option>
								
								<option value="BDI">Burundi</option>
								
								<option value="BTN">Butão</option>
								
								<option value="CPV">Cabo Verde</option>
								
								<option value="CMR">Camarões</option>
								
								<option value="KHM">Camboja</option>
								
								<option value="CAN">Canadá</option>
								
								<option value="QAT">Catar</option>
								
								<option value="KAZ">Cazaquistão</option>
								
								<option value="TCD">Chade</option>
								
								<option value="CHL">Chile</option>
								
								<option value="CHN">China</option>
								
								<option value="CYP">Chipre</option>
								
								<option value="VAT">Cidade do Vaticano</option>
								
								<option value="COL">Colômbia</option>
								
								<option value="COM">Comores</option>
								
								<option value="COG">Congo - Brazzaville</option>
								
								<option value="COD">Congo - Kinshasa</option>
								
								<option value="PRK">Coreia do Norte</option>
								
								<option value="KOR">Coreia do Sul</option>
								
								<option value="CIV">Costa do Marfim</option>
								
								<option value="CRI">Costa Rica</option>
								
								<option value="HRV">Croácia</option>
								
								<option value="CUB">Cuba</option>
								
								<option value="CUW">Curaçao</option>
								
								<option value="DNK">Dinamarca</option>
								
								<option value="DJI">Djibuti</option>
								
								<option value="DMA">Dominica</option>
								
								<option value="EGY">Egito</option>
								
								<option value="SLV">El Salvador</option>
								
								<option value="ARE">Emirados Árabes Unidos</option>
								
								<option value="ECU">Equador</option>
								
								<option value="ERI">Eritreia</option>
								
								<option value="SVK">Eslováquia</option>
								
								<option value="SVN">Eslovênia</option>
								
								<option value="ESP">Espanha</option>
								
								<option value="USA">Estados Unidos</option>
								
								<option value="EST">Estônia</option>
								
								<option value="ETH">Etiópia</option>
								
								<option value="FJI">Fiji</option>
								
								<option value="PHL">Filipinas</option>
								
								<option value="FIN">Finlândia</option>
								
								<option value="FRA">França</option>
								
								<option value="GAB">Gabão</option>
								
								<option value="GMB">Gâmbia</option>
								
								<option value="GHA">Gana</option>
								
								<option value="GEO">Geórgia</option>
								
								<option value="GIB">Gibraltar</option>
								
								<option value="GRD">Granada</option>
								
								<option value="GRC">Grécia</option>
								
								<option value="GRL">Groenlândia</option>
								
								<option value="GLP">Guadalupe</option>
								
								<option value="GUM">Guam</option>
								
								<option value="GTM">Guatemala</option>
								
								<option value="GGY">Guernsey</option>
								
								<option value="GUY">Guiana</option>
								
								<option value="GUF">Guiana Francesa</option>
								
								<option value="GIN">Guiné</option>
								
								<option value="GNB">Guiné-Bissau</option>
								
								<option value="GNQ">Guiné Equatorial</option>
								
								<option value="HTI">Haiti</option>
								
								<option value="NLD">Holanda</option>
								
								<option value="HND">Honduras</option>
								
								<option value="HKG">Hong Kong, RAE da China</option>
								
								<option value="HUN">Hungria</option>
								
								<option value="YEM">Iêmen</option>
								
								<option value="BVT">Ilha Bouvet</option>
								
								<option value="CXR">Ilha Christmas</option>
								
								<option value="IMN">Ilha de Man</option>
								
								<option value="NFK">Ilha Norfolk</option>
								
								<option value="ALA">Ilhas Aland</option>
								
								<option value="CYM">Ilhas Cayman</option>
								
								<option value="CCK">Ilhas Cocos (Keeling)</option>
								
								<option value="COK">Ilhas Cook</option>
								
								<option value="FRO">Ilhas Faroe</option>
								
								<option value="SGS">Ilhas Geórgia do Sul e Sandwich do Sul</option>
								
								<option value="HMD">Ilhas Heard e McDonald</option>
								
								<option value="FLK">Ilhas Malvinas</option>
								
								<option value="MNP">Ilhas Marianas do Norte</option>
								
								<option value="MHL">Ilhas Marshall</option>
								
								<option value="UMI">Ilhas Menores Distantes dos EUA</option>
								
								<option value="PCN">Ilhas Pitcairn</option>
								
								<option value="SLB">Ilhas Salomão</option>
								
								<option value="TCA">Ilhas Turks e Caicos</option>
								
								<option value="VIR">Ilhas Virgens Americanas</option>
								
								<option value="VGB">Ilhas Virgens Britânicas</option>
								
								<option value="IND">Índia</option>
								
								<option value="IDN">Indonésia</option>
								
								<option value="IRN">Irã</option>
								
								<option value="IRQ">Iraque</option>
								
								<option value="IRL">Irlanda</option>
								
								<option value="ISL">Islândia</option>
								
								<option value="ISR">Israel</option>
								
								<option value="ITA">Itália</option>
								
								<option value="JAM">Jamaica</option>
								
								<option value="JPN">Japão</option>
								
								<option value="JEY">Jersey</option>
								
								<option value="JOR">Jordânia</option>
								
								<option value="KWT">Kuwait</option>
								
								<option value="LAO">Laos</option>
								
								<option value="LSO">Lesoto</option>
								
								<option value="LVA">Letônia</option>
								
								<option value="LBN">Líbano</option>
								
								<option value="LBR">Libéria</option>
								
								<option value="LBY">Líbia</option>
								
								<option value="LIE">Liechtenstein</option>
								
								<option value="LTU">Lituânia</option>
								
								<option value="LUX">Luxemburgo</option>
								
								<option value="MAC">Macau, RAE da China</option>
								
								<option value="MKD">Macedônia</option>
								
								<option value="MDG">Madagascar</option>
								
								<option value="MYS">Malásia</option>
								
								<option value="MWI">Malaui</option>
								
								<option value="MDV">Maldivas</option>
								
								<option value="MLI">Mali</option>
								
								<option value="MLT">Malta</option>
								
								<option value="MAR">Marrocos</option>
								
								<option value="MTQ">Martinica</option>
								
								<option value="MUS">Maurício</option>
								
								<option value="MRT">Mauritânia</option>
								
								<option value="MYT">Mayotte</option>
								
								<option value="MEX">México</option>
								
								<option value="MMR">Mianmar (Birmânia)</option>
								
								<option value="FSM">Micronésia</option>
								
								<option value="MOZ">Moçambique</option>
								
								<option value="MDA">Moldávia</option>
								
								<option value="MCO">Mônaco</option>
								
								<option value="MNG">Mongólia</option>
								
								<option value="MNE">Montenegro</option>
								
								<option value="MSR">Montserrat</option>
								
								<option value="NAM">Namíbia</option>
								
								<option value="NRU">Nauru</option>
								
								<option value="NPL">Nepal</option>
								
								<option value="NIC">Nicarágua</option>
								
								<option value="NER">Níger</option>
								
								<option value="NGA">Nigéria</option>
								
								<option value="NIU">Niue</option>
								
								<option value="NOR">Noruega</option>
								
								<option value="NCL">Nova Caledônia</option>
								
								<option value="NZL">Nova Zelândia</option>
								
								<option value="OMN">Omã</option>
								
								<option value="BES">Países Baixos Caribenhos</option>
								
								<option value="PLW">Palau</option>
								
								<option value="PAN">Panamá</option>
								
								<option value="PNG">Papua-Nova Guiné</option>
								
								<option value="PAK">Paquistão</option>
								
								<option value="PRY">Paraguai</option>
								
								<option value="PER">Peru</option>
								
								<option value="PYF">Polinésia Francesa</option>
								
								<option value="POL">Polônia</option>
								
								<option value="PRI">Porto Rico</option>
								
								<option value="PRT">Portugal</option>
								
								<option value="KEN">Quênia</option>
								
								<option value="KGZ">Quirguistão</option>
								
								<option value="KIR">Quiribati</option>
								
								<option value="GBR">Reino Unido</option>
								
								<option value="CAF">República Centro-Africana</option>
								
								<option value="DOM">República Dominicana</option>
								
								<option value="REU">Reunião</option>
								
								<option value="ROU">Romênia</option>
								
								<option value="RWA">Ruanda</option>
								
								<option value="RUS">Rússia</option>
								
								<option value="ESH">Saara Ocidental</option>
								
								<option value="WSM">Samoa</option>
								
								<option value="ASM">Samoa Americana</option>
								
								<option value="SMR">San Marino</option>
								
								<option value="SHN">Santa Helena</option>
								
								<option value="LCA">Santa Lúcia</option>
								
								<option value="BLM">São Bartolomeu</option>
								
								<option value="KNA">São Cristóvão e Névis</option>
								
								<option value="MAF">São Martinho</option>
								
								<option value="SPM">São Pedro e Miquelão</option>
								
								<option value="STP">São Tomé e Príncipe</option>
								
								<option value="VCT">São Vicente e Granadinas</option>
								
								<option value="SYC">Seicheles</option>
								
								<option value="SEN">Senegal</option>
								
								<option value="SLE">Serra Leoa</option>
								
								<option value="SRB">Sérvia</option>
								
								<option value="SGP">Singapura</option>
								
								<option value="SXM">Sint Maarten</option>
								
								<option value="SYR">Síria</option>
								
								<option value="SOM">Somália</option>
								
								<option value="LKA">Sri Lanka</option>
								
								<option value="SWZ">Suazilândia</option>
								
								<option value="SDN">Sudão</option>
								
								<option value="SSD">Sudão do Sul</option>
								
								<option value="SWE">Suécia</option>
								
								<option value="CHE">Suíça</option>
								
								<option value="SUR">Suriname</option>
								
								<option value="SJM">Svalbard e Jan Mayen</option>
								
								<option value="TJK">Tadjiquistão</option>
								
								<option value="THA">Tailândia</option>
								
								<option value="TWN">Taiwan</option>
								
								<option value="TZA">Tanzânia</option>
								
								<option value="CZE">Tchéquia</option>
								
								<option value="IOT">Território Britânico do Oceano Índico</option>
								
								<option value="ATF">Territórios Franceses do Sul</option>
								
								<option value="PSE">Territórios palestinos</option>
								
								<option value="TLS">Timor-Leste</option>
								
								<option value="TGO">Togo</option>
								
								<option value="TKL">Tokelau</option>
								
								<option value="TON">Tonga</option>
								
								<option value="TTO">Trinidad e Tobago</option>
								
								<option value="TUN">Tunísia</option>
								
								<option value="TKM">Turcomenistão</option>
								
								<option value="TUR">Turquia</option>
								
								<option value="TUV">Tuvalu</option>
								
								<option value="UKR">Ucrânia</option>
								
								<option value="UGA">Uganda</option>
								
								<option value="URY">Uruguai</option>
								
								<option value="UZB">Uzbequistão</option>
								
								<option value="VUT">Vanuatu</option>
								
								<option value="VEN">Venezuela</option>
								
								<option value="VNM">Vietnã</option>
								
								<option value="WLF">Wallis e Futuna</option>
								
								<option value="ZMB">Zâmbia</option>
								
								<option value="ZWE">Zimbábue</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col}  md="5" controlId="formGridState">
      <Form.Label>UF</Form.Label>
      <Form.Select defaultValue="Brasil">

                <option value="">Selecione a UF</option>
								
								<option value="AC">AC - Acre</option>
								
								<option value="AL">AL - Alagoas</option>
								
								<option value="AP">AP - Amapá</option>
								
								<option value="AM">AM - Amazonas</option>
								
								<option value="BA">BA - Bahia</option>
								
								<option value="CE">CE - Ceará</option>
								
								<option value="DF">DF - Distrito Federal</option>
								
								<option value="ES">ES - Espírito Santo</option>
								
								<option value="GO">GO - Goiás</option>
								
								<option value="MA">MA - Maranhão</option>
								
								<option value="MT">MT - Mato Grosso</option>
								
								<option value="MS">MS - Mato Grosso do Sul</option>
								
								<option value="MG">MG - Minas Gerais</option>
								
								<option value="PA">PA - Pará</option>
								
								<option value="PB">PB - Paraíba</option>
								
								<option value="PR">PR - Paraná</option>
								
								<option value="PE">PE - Pernambuco</option>
								
								<option value="PI">PI - Piauí</option>
								
								<option value="RJ">RJ - Rio de Janeiro</option>
								
								<option value="RN">RN - Rio Grande do Norte</option>
								
								<option value="RS">RS - Rio Grande do Sul</option>
								
								<option value="RO">RO - Rondônia</option>
								
								<option value="RR">RR - Roraima</option>
								
								<option value="SC">SC - Santa Catarina</option>
								
								<option value="SP">SP - São Paulo</option>
								
								<option value="SE">SE - Sergipe</option>
								
								<option value="TO">TO - Tocantins</option>
      </Form.Select>
    </Form.Group>

  </Row>

  <Form>
	<Form.Group as={Col} md="10" controlId="exampleForm.ControlTextarea1">
		<Form.Label>Sua mensagem:</Form.Label>
		<Form.Control as="textarea" rows={3} />
	</Form.Group>
	</Form>

  <Form.Group >
        <Form.Check
          required
          label="Li e concordo com os termos de uso."
          feedback="Você deve concordar com os termos de uso."
          feedbackType="invalid"
        />
<br></br>
    </Form.Group>
    <Button variant="success" type="submit">Cadastrar</Button>
    <br></br>
    <br></br>

</Form>

    </div>
    )
}

export default Cadastro 