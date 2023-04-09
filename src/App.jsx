import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <Background>
      <ParentComponent />
    </Background>
  );
}

const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #131518;
  padding: 0 24px;
  box-sizing: border-box;
`;

export default App;
