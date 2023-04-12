import { useState } from "react";
// import "./App.css";
import styled from "styled-components";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";

function App() {
  const [showrating, setshowrating] = useState(false);
  return (
    <Background>
      {showrating ? <SecondComponent /> : <FirstComponent />}
    </Background>
  );
}

const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #131518;
  padding: 0 24px;
  box-sizing: border-box;
`;

export default App;
