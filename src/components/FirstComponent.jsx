import { useState } from "react";
import styled from "styled-components";
import imageStar from "/public/icon-star.svg";
// import "./app.css";

function FirstComponent({ indicator, setindicator, setshowrating }) {
  const handleClick = () => {
    if (indicator !== "") {
      setshowrating(true);
    }
  };
  return (
    <Main>
      <Star>
        <img src={imageStar} alt="star icon" />
      </Star>
      <TextContainer>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </TextContainer>

      <BottomMain>
        <RatingMainDiv>
          <RatingButton
            onClick={() => {
              setindicator("1");
            }}
          >
            <p> 1 </p>
          </RatingButton>

          <RatingButton
            onClick={() => {
              setindicator("2");
            }}
          >
            <p> 2 </p>
          </RatingButton>

          <RatingButton
            onClick={() => {
              setindicator("3");
            }}
          >
            <p> 3 </p>
          </RatingButton>

          <RatingButton
            onClick={() => {
              setindicator("4");
            }}
          >
            <p> 4 </p>
          </RatingButton>

          <RatingButton
            onClick={() => {
              setindicator("5");
            }}
          >
            <p> 5 </p>
          </RatingButton>
        </RatingMainDiv>
        <SumbitButton onClick={handleClick}> SUBMIT </SumbitButton>
      </BottomMain>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  background: radial-gradient(
    98.96% 98.96% at 50% 0%,
    #232a34 0%,
    #181e27 100%
  );
  border-radius: 30px;
  padding: 24px 24px 32px 24px;
  box-sizing: border-box;
  max-width: 327px;
  @media (min-width: 1024px) {
    max-width: 412px;
    padding: 32px 39px 32px 32px;
  }
`;

const Star = styled.div`
  width: 40px;
  height: 40px;
  background-color: #262e38;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 20px;
  @media (min-width: 1024px) {
    width: 48px;
    height: 48px;
    margin-bottom: 30px;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
  h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0px;
    text-align: left;
    color: #ffffff;
    @media (min-width: 1024px) {
      font-size: 28px;
      line-height: 35.45px;
    }
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: left;
    color: #969fad;
    @media (min-width: 1024px) {
      font-size: 15px;
      line-height: 24px;
    }
  }
`;

const RatingMainDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 18px;
  @media (min-width: 1024px) {
    gap: 21px;
  }
`;

const RatingButton = styled.button`
  width: 42px;
  height: 42px;
  background-color: #262e38;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7c8798;
  cursor: pointer;
  p {
    font-family: "Overpass", sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.17499999701976776px;
    text-align: center;
    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }

  :focus {
    background-color: #7c8798;
    color: white;
  }

  :hover {
    background-color: #fc7614;
    color: white;
  }

  @media (min-width: 1024px) {
    width: 51px;
    height: 51px;
  }
`;

const SumbitButton = styled.button`
  width: 100%;
  height: 45px;
  background-color: #fc7614;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 22.5px;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 1.8666666746139526px;
  text-align: left;
  color: #ffffff;
  :hover {
    background-color: #ffffff;
    color: #fc7614;
  }
`;

const BottomMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: 1024px) {
    gap: 32px;
  }
`;

export default FirstComponent;
