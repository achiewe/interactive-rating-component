import styled from "styled-components";
import { useState } from "react";
import imageThanks from "/public/illustration-thank-you.svg";

function SecondComponent() {
  return (
    <Main>
      <TopDiv>
        <img src={imageThanks} alt="image thanks" />
        <ResultDiv>
          <ResultP> You selected out of 5</ResultP>
        </ResultDiv>
        <WordThank> Thank you!</WordThank>
      </TopDiv>
      <BottomP>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!{" "}
      </BottomP>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: radial-gradient(
    98.96% 98.96% at 50% 0%,
    #232a34 0%,
    #181e27 100%
  );
  border-radius: 30px;
  padding: 34px 24px 37px 24px;
  box-sizing: border-box;
  max-width: 327px;
`;

const TopDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 17px;
`;

const ResultDiv = styled.div`
  width: 168px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #262e38;
  border-radius: 22.5px;
`;

const ResultP = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: #fc7614;
`;

const WordThank = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: center;
  color: #ffffff;
`;

const BottomP = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: #969fad;
`;

export default SecondComponent;
