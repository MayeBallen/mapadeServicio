import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import UpperBar from "./UpperBar";
import Libreria from "./presentacion/Libreria";

const Container = styled.div`
  display: grid;
  grid-template-columns: fit-content(100%) repeat(11, 1fr);
  grid-template-rows: fit-content(100%) repeat(9, 1fr);
  height: 100vh;
  box-sizing: border-box;
  @media (min-width: 300px) and (max-width: 425px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const Content = styled.div`
  grid-column: 1 / 13;
  margin: 72px 0 0 0;
  padding: 0 1em;
  /* scroll-behavior: smooth;
  overflow-y: auto;
  ::-webkit-scrollbar {
    background: #3c3c3c;
    border-radius: 10px;
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #e11066;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-button {
    background: #1a1a1a;
    border-radius: 10px;
  }*/
  @media (min-width: 300px) and (max-width: 425px) {
    grid-column: 1 / 5;
    margin: 75px 0 0 0;
    padding: 0 0.5em;
  }
`;

const Dashboard = () => {
  return (
    <Container>
      <UpperBar />
      <Content>
        <Switch>
          <Route exact path="/" component={Libreria} />
        </Switch>
      </Content>
    </Container>
  );
};

export default Dashboard;
