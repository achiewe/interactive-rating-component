import { useState } from "react";
// import "./App.css";
import styled from "styled-components";
import ParentComponent from "./ParentComponent";
import ChildComponent from "./ChildComponent";

function App() {
  const [showrating, setshowrating] = useState(false);
  console.log(setshowrating);
  const [rating, setrating] = useState(null);
  return (
    <Background>
      {showrating ? (
        <ChildComponent rating={rating} />
      ) : (
        <ParentComponent
          rating={rating}
          setrating={setrating}
          setshowrating={setshowrating}
        />
      )}
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
