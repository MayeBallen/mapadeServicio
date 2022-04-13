import React, { useState } from "react";
import styled from "styled-components";
import ImgYeapContact from "../../assets/images/ImgYeapContact.jpg";

const TablaRadar = styled.div`
  display: grid;
  grid-template-columns: repeat(19, 1fr);
  grid-template-rows: repeat(16, 1fr);
  grid-row-gap: 10px;
  grid-column-gap: 10px;
`;
const CirculoNieto = styled.div`
  grid-column: ${(props) => props.ejeX};
  grid-row: ${(props) => props.ejeY};
  width: 85px;
  height: 85px;
  border-radius: 50%;
  background: ${(props) => props.bg};
  display: ${(props) => (props.mostrar ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  :hover {
    background: #ffd600;
  }
`;
const TextCirculoNieto = styled.p`
  font-size: calc(0.5vw + 0.4em);
  margin: 0 0.2em;
  color: #fff;
  text-align: center;
  :hover {
    color: #000;
  }
`;
const TextCirculoBisNieto = styled.p`
  font-size: calc(0.5vw + 0.3em);
  margin: 0 0.2em;
  color: #fff;
  font-weight: bold;
  text-align: center;
  :hover {
    color: #000;
  }
`;
const CirculoHijo = styled.div`
  grid-column: ${(props) => props.ejeX};
  grid-row: ${(props) => props.ejeY};
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: ${(props) => props.bg};
  display: ${(props) => (props.mostrar ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  :hover {
    background: #ffd600;
  }
`;
const TextCirculoHijo = styled.p`
  font-size: calc(0.5vw + 0.4em);
  margin: 0 0.2em;
  color: #fff;
  text-align: center;
  font-weight: bold;
  :hover {
    color: #000;
  }
`;
const CirculoPadre = styled.div`
  grid-column: ${(props) => props.ejeX};
  grid-row: ${(props) => props.ejeY};
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${(props) => props.bg};
  display: ${(props) => (props.mostrar ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background: #ffd600;
  }
`;
const TextCirculoPadre = styled.p`
  font-size: calc(0.5vw + 0.5em);
  margin: 0 0.2em;
  color: #fff;
  text-align: center;
  font-weight: bold;
`;

const ContentCentral = styled.div`
  grid-column: ${(props) => props.ejeX};
  grid-row: ${(props) => props.ejeY};
  width: 200px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CirculoImagen = styled.div`
  width: 200px;
  height: 200px;
  background: black;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const YeapContact = () => {
  const [verAnillo, setVerAnillo] = useState({ padres: false, hijos: false });
  const [verModulo, setVerModulo] = useState({
    voz: false,
    ivr: false,
    redesSociales: false,
    web: false,
    crm: false,
    bots: false,
    calidad: false,
    herramientas: false,
    integraciones: false,
    soporte: false,
  });

  return (
    <TablaRadar>
      {/*CENTRO*/}
      <ContentCentral
        ejeX={"9 / 11"}
        ejeY={"8 / 11"}
        onClick={() => setVerAnillo({ padres: !verAnillo.padres })}
      >
        <CirculoImagen>
          <Img src={ImgYeapContact} />
        </CirculoImagen>
      </ContentCentral>

      {/*VOZ*/}
      <CirculoPadre
        ejeX={"8 / 9"}
        ejeY={"8 / 9"}
        bg={"#12005e"}
        mostrar={verAnillo.padres}
        onClick={() => setVerModulo({ ...verModulo, voz: !verModulo.voz })}
      >
        <TextCirculoPadre>Voz</TextCirculoPadre>
      </CirculoPadre>
      <CirculoHijo
        ejeX={"7 / 8"}
        ejeY={"7 / 8"}
        bg={"#12005e"}
        mostrar={verModulo.voz}
      >
        <TextCirculoHijo>Campañas de marcación</TextCirculoHijo>
      </CirculoHijo>
      <CirculoHijo
        ejeX={"7 / 8"}
        ejeY={"8 / 9"}
        bg={"#12005e"}
        mostrar={verModulo.voz}
      >
        <TextCirculoHijo>Campañas masivos</TextCirculoHijo>
      </CirculoHijo>
      <CirculoNieto
        ejeX={"7 / 8"}
        ejeY={"5 / 6"}
        bg={"#12005e"}
        mostrar={verModulo.voz}
      >
        <TextCirculoNieto>Preview</TextCirculoNieto>
      </CirculoNieto>
      <CirculoNieto
        ejeX={"7 / 8"}
        ejeY={"6 / 7"}
        bg={"#12005e"}
        mostrar={verModulo.voz}
      >
        <TextCirculoNieto>Progresivo</TextCirculoNieto>
      </CirculoNieto>
      <CirculoNieto
        ejeX={"6 / 7"}
        ejeY={"6 / 7"}
        bg={"#12005e"}
        mostrar={verModulo.voz}
      >
        <TextCirculoNieto>Predictivo</TextCirculoNieto>
      </CirculoNieto>
      <CirculoNieto
        ejeX={"6 / 7"}
        ejeY={"7 / 8"}
        bg={"#12005e"}
        mostrar={verModulo.voz}
      >
        <TextCirculoNieto>Call back</TextCirculoNieto>
      </CirculoNieto>
      <CirculoNieto
        ejeX={"5 / 6"}
        ejeY={"8 / 9"}
        bg={"#12005e"}
        mostrar={verModulo.voz}
      >
        <TextCirculoNieto>Virtuales</TextCirculoNieto>
      </CirculoNieto>
      <CirculoNieto
        ejeX={"6/ 7"}
        ejeY={"8 / 9"}
        bg={"#12005e"}
        mostrar={verModulo.voz}
      >
        <TextCirculoNieto>SMS Masivo</TextCirculoNieto>
      </CirculoNieto>
      <CirculoNieto
        ejeX={"5 / 6"}
        ejeY={"9 / 10"}
        bg={"#12005e"}
        mostrar={verModulo.voz}
      >
        <TextCirculoNieto>Mail masivo</TextCirculoNieto>
      </CirculoNieto>

      <CirculoNieto
        ejeX={"4 / 5"}
        ejeY={"7 / 8"}
        bg={"#12005e"}
        mostrar={verModulo.voz}
      >
        <TextCirculoBisNieto>Notificación</TextCirculoBisNieto>
      </CirculoNieto>
      <CirculoNieto
        ejeX={"4 / 5"}
        ejeY={"8 / 9"}
        bg={"#12005e"}
        mostrar={verModulo.voz}
      >
        <TextCirculoBisNieto>Transaccionales</TextCirculoBisNieto>
      </CirculoNieto>

      {/*IVR*/}
      <CirculoPadre
        ejeX={"9 / 10"}
        ejeY={"7 / 8"}
        bg={"#212121"}
        mostrar={verAnillo.padres}
        onClick={() => setVerModulo({ ...verModulo, ivr: !verModulo.ivr })}
      >
        <TextCirculoPadre>IVR</TextCirculoPadre>
      </CirculoPadre>
      <CirculoNieto
        ejeX={"9 / 10"}
        ejeY={"1 / 2"}
        bg={"#212121"}
        mostrar={verModulo.ivr}
      ></CirculoNieto>
      <CirculoNieto
        ejeX={"10 / 11"}
        ejeY={"1 / 2"}
        bg={"#212121"}
        mostrar={verModulo.ivr}
      ></CirculoNieto>
      <CirculoNieto
        ejeX={"11 / 12"}
        ejeY={"1 / 2"}
        bg={"#212121"}
        mostrar={verModulo.ivr}
      ></CirculoNieto>
      <CirculoNieto
        ejeX={"12 / 13"}
        ejeY={"1 / 2"}
        bg={"#212121"}
        mostrar={verModulo.ivr}
      ></CirculoNieto>
      <CirculoNieto
        ejeX={"9 / 10"}
        ejeY={"2 / 3"}
        bg={"#212121"}
        mostrar={verModulo.ivr}
      ></CirculoNieto>
      <CirculoNieto
        ejeX={"10 / 11"}
        ejeY={"2 / 3"}
        bg={"#212121"}
      ></CirculoNieto>
      <CirculoNieto
        ejeX={"11 / 12"}
        ejeY={"2 / 3"}
        bg={"#212121"}
        mostrar={verModulo.ivr}
      ></CirculoNieto>
      <CirculoHijo
        ejeX={"9 / 10"}
        ejeY={"4 / 5"}
        bg={"#212121"}
        mostrar={verModulo.ivr}
      ></CirculoHijo>
      <CirculoHijo
        ejeX={"10 / 11"}
        ejeY={"4 / 5"}
        bg={"#212121"}
        mostrar={verModulo.ivr}
      ></CirculoHijo>
      <CirculoHijo
        ejeX={"11 / 12"}
        ejeY={"4 / 5"}
        bg={"#212121"}
        mostrar={verModulo.ivr}
      ></CirculoHijo>

      {/*Redes sociales y web*/}
      <CirculoPadre
        ejeX={"10 / 11"}
        ejeY={"7 / 8"}
        bg={"#003300"}
        mostrar={verAnillo.padres}
        onClick={() =>
          setVerModulo({
            ...verModulo,
            redesSociales: !verModulo.redesSociales,
          })
        }
      >
        <TextCirculoPadre>Redes sociales</TextCirculoPadre>
      </CirculoPadre>
      <CirculoNieto
        ejeX={"13 / 14"}
        ejeY={"2 / 3"}
        bg={"#003300"}
        mostrar={verModulo.redesSociales}
      ></CirculoNieto>
      <CirculoNieto
        ejeX={"14 / 15"}
        ejeY={"2 / 3"}
        bg={"#003300"}
        mostrar={verModulo.redesSociales}
      ></CirculoNieto>
      <CirculoNieto
        ejeX={"15 / 16"}
        ejeY={"2 / 3"}
        bg={"#003300"}
        mostrar={verModulo.redesSociales}
      ></CirculoNieto>
      <CirculoNieto
        ejeX={"15 / 16"}
        ejeY={"3 / 4"}
        bg={"#003300"}
        mostrar={verModulo.redesSociales}
      ></CirculoNieto>
      <CirculoHijo
        ejeX={"13 / 14"}
        ejeY={"4 / 5"}
        bg={"#003300"}
        mostrar={verModulo.redesSociales}
      ></CirculoHijo>
      <CirculoNieto
        ejeX={"15 / 16"}
        ejeY={"4 / 5"}
        bg={"#003300"}
        mostrar={verModulo.redesSociales}
      ></CirculoNieto>
      <CirculoHijo
        ejeX={"14 / 15"}
        ejeY={"5 / 6"}
        bg={"#003300"}
        mostrar={verModulo.redesSociales}
      ></CirculoHijo>

      {/*Web*/}
      <CirculoPadre
        ejeX={"11 / 12"}
        ejeY={"8 / 9"}
        bg={"#ac1900"}
        mostrar={verAnillo.padres}
        onClick={() => setVerModulo({ ...verModulo, web: !verModulo.web })}
      >
        <TextCirculoPadre>Web</TextCirculoPadre>
      </CirculoPadre>
      <CirculoHijo
        ejeX={"16 / 17"}
        ejeY={"5 / 6"}
        bg={"#ac1900"}
        mostrar={verModulo.web}
      ></CirculoHijo>
      <CirculoHijo
        ejeX={"16 / 17"}
        ejeY={"6 / 7"}
        bg={"#ac1900"}
        mostrar={verModulo.web}
      ></CirculoHijo>
      <CirculoHijo
        ejeX={"16 / 17"}
        ejeY={"7 / 8"}
        bg={"#ac1900"}
        mostrar={verModulo.web}
      ></CirculoHijo>

      {/*CRM*/}
      <CirculoPadre
        ejeX={"11 / 12"}
        ejeY={"9 / 10"}
        bg={"#880e4f"}
        mostrar={verAnillo.padres}
        onClick={() => setVerModulo({ ...verModulo, crm: !verModulo.crm })}
      >
        <TextCirculoPadre>CRM</TextCirculoPadre>
      </CirculoPadre>
      <CirculoHijo
        ejeX={"16 / 17"}
        ejeY={"9 / 10"}
        bg={"#880e4f"}
        mostrar={verModulo.crm}
      ></CirculoHijo>
      <CirculoHijo
        ejeX={"16 / 17"}
        ejeY={"10 / 11"}
        bg={"#880e4f"}
        mostrar={verModulo.crm}
      ></CirculoHijo>
      <CirculoHijo
        ejeX={"16 / 17"}
        ejeY={"11 / 12"}
        bg={"#880e4f"}
        mostrar={verModulo.crm}
      ></CirculoHijo>

      {/*Bots*/}
      <CirculoPadre
        ejeX={"11 / 12"}
        ejeY={"10 / 11"}
        bg={"#002171"}
        mostrar={verAnillo.padres}
        onClick={() => setVerModulo({ ...verModulo, bots: !verModulo.bots })}
      >
        <TextCirculoPadre>Bots</TextCirculoPadre>
      </CirculoPadre>
      <CirculoHijo
        ejeX={"15 / 16"}
        ejeY={"12 / 13"}
        bg={"#002171"}
        mostrar={verModulo.bots}
      ></CirculoHijo>
      <CirculoHijo
        ejeX={"14 / 15"}
        ejeY={"13 / 14"}
        bg={"#002171"}
        mostrar={verModulo.bots}
      ></CirculoHijo>
      <CirculoHijo
        ejeX={"15 / 16"}
        ejeY={"13 / 14"}
        bg={"#002171"}
        mostrar={verModulo.bots}
      ></CirculoHijo>

      {/*Calidad*/}
      <CirculoPadre
        ejeX={"10 / 11"}
        ejeY={"11 / 12"}
        bg={"#004d40"}
        mostrar={verAnillo.padres}
        onClick={() =>
          setVerModulo({ ...verModulo, calidad: !verModulo.calidad })
        }
      >
        <TextCirculoPadre>Calidad</TextCirculoPadre>
      </CirculoPadre>
      <CirculoHijo
        ejeX={"11 / 12"}
        ejeY={"14 / 15"}
        bg={"#004d40"}
        mostrar={verModulo.calidad}
      ></CirculoHijo>
      <CirculoHijo
        ejeX={"12 / 13"}
        ejeY={"14 / 15"}
        bg={"#004d40"}
        mostrar={verModulo.calidad}
      ></CirculoHijo>
      <CirculoHijo
        ejeX={"13 / 14"}
        ejeY={"14 / 15"}
        bg={"#004d40"}
        mostrar={verModulo.calidad}
      ></CirculoHijo>
      <CirculoNieto
        ejeX={"11 / 12"}
        ejeY={"15 / 16"}
        bg={"#004d40"}
        mostrar={verModulo.calidad}
      ></CirculoNieto>
      <CirculoNieto
        ejeX={"12 / 13"}
        ejeY={"15 / 16"}
        bg={"#004d40"}
        mostrar={verModulo.calidad}
      ></CirculoNieto>
      <CirculoNieto
        ejeX={"13 / 14"}
        ejeY={"15 / 16"}
        bg={"#004d40"}
        mostrar={verModulo.calidad}
      ></CirculoNieto>
      <CirculoNieto
        ejeX={"14 / 15"}
        ejeY={"15 / 16"}
        bg={"#004d40"}
        mostrar={verModulo.calidad}
      ></CirculoNieto>
      <CirculoNieto
        ejeX={"13 / 14"}
        ejeY={"16 / 17"}
        bg={"#004d40"}
        mostrar={verModulo.calidad}
      ></CirculoNieto>
      <CirculoNieto
        ejeX={"14 / 15"}
        ejeY={"16 / 17"}
        bg={"#004d40"}
        mostrar={verModulo.calidad}
      ></CirculoNieto>
      <CirculoNieto
        ejeX={"15 / 16"}
        ejeY={"16 / 17"}
        bg={"#004d40"}
        mostrar={verModulo.calidad}
      ></CirculoNieto>

      {/*Herramientas*/}
      <CirculoPadre
        ejeX={"9 / 10"}
        ejeY={"11 / 12"}
        bg={"#b71c1c"}
        mostrar={verAnillo.padres}
        onClick={() =>
          setVerModulo({ ...verModulo, herramientas: !verModulo.herramientas })
        }
      >
        <TextCirculoPadre>Herramientas</TextCirculoPadre>
      </CirculoPadre>
      <CirculoHijo ejeX={"8 / 9"} ejeY={"14 / 15"} bg={"#b71c1c"}></CirculoHijo>
      <CirculoHijo
        ejeX={"9 / 10"}
        ejeY={"14 / 15"}
        bg={"#b71c1c"}
        mostrar={verModulo.herramientas}
      ></CirculoHijo>
      <CirculoNieto
        ejeX={"7 / 8"}
        ejeY={"15 / 16"}
        bg={"#b71c1c"}
        mostrar={verModulo.herramientas}
      ></CirculoNieto>
      <CirculoNieto
        ejeX={"8 / 9"}
        ejeY={"15 / 16"}
        bg={"#b71c1c"}
        mostrar={verModulo.herramientas}
      ></CirculoNieto>
      <CirculoNieto
        ejeX={"9 / 10"}
        ejeY={"15 / 16"}
        bg={"#b71c1c"}
        mostrar={verModulo.herramientas}
      ></CirculoNieto>

      {/*Integraciones*/}
      <CirculoPadre
        ejeX={"8 / 9"}
        ejeY={"10 / 11"}
        bg={"#3e2723"}
        mostrar={verAnillo.padres}
        onClick={() =>
          setVerModulo({
            ...verModulo,
            integraciones: !verModulo.integraciones,
          })
        }
      >
        <TextCirculoPadre>Integraciones</TextCirculoPadre>
      </CirculoPadre>
      <CirculoHijo
        ejeX={"6 / 7"}
        ejeY={"11 / 12"}
        bg={"#3e2723"}
        mostrar={verModulo.integraciones}
      ></CirculoHijo>
      <CirculoHijo
        ejeX={"6 / 7"}
        ejeY={"12 / 13"}
        bg={"#3e2723"}
        mostrar={verModulo.integraciones}
      ></CirculoHijo>
      <CirculoHijo
        ejeX={"6 / 7"}
        ejeY={"13 / 14"}
        bg={"#3e2723"}
        mostrar={verModulo.integraciones}
      ></CirculoHijo>
      <CirculoHijo
        ejeX={"7 / 8"}
        ejeY={"13 / 14"}
        bg={"#3e2723"}
        mostrar={verModulo.integraciones}
      ></CirculoHijo>

      {/*Soporte*/}
      <CirculoPadre
        ejeX={"8 / 9"}
        ejeY={"9 / 10"}
        bg={"#263238"}
        mostrar={verAnillo.padres}
        onClick={() =>
          setVerModulo({ ...verModulo, soporte: !verModulo.soporte })
        }
      >
        <TextCirculoPadre>Soporte</TextCirculoPadre>
      </CirculoPadre>
      <CirculoHijo
        ejeX={"5 / 6"}
        ejeY={"9 / 10"}
        bg={"#263238"}
        mostrar={verModulo.soporte}
      ></CirculoHijo>
      <CirculoHijo
        ejeX={"5 / 6"}
        ejeY={"10 / 11"}
        bg={"#263238"}
        mostrar={verModulo.soporte}
      ></CirculoHijo>
    </TablaRadar>
  );
};

export default YeapContact;
