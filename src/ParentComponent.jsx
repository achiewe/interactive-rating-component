import { useState } from "react";
import styled from "styled-components";
// import "./app.css";

function ParentComponent({ rating, setrating, setshowrating }) {
  const [activeRatings, setActiveRatings] = useState({
    oneStar: false,
    TwoStar: false,
    ThreeStar: false,
    FourStar: false,
    FiveStar: false,
  });

  function handleSubmit() {
    setshowrating(true);
  }
  return (
    <Main>
      <Star>
        <img src="resources/images/icon-star.svg" alt="star icon" />
      </Star>
      <TextContainer>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div>
          <NumberP
            // className={activeratings.onestar ? "active" : ""}
            onClick={() => {
              setActiveRatings({
                oneStar: true,
                TwoStar: false,
                ThreeStar: false,
                FourStan: false,
                FiveStar: false,
              });
              setrating(1);
            }}
          >
            1
          </NumberP>
          <NumberP
            // className={activeratings.TwoStar ? "active" : ""}
            onClick={() => {
              setActiveRatings({
                oneStar: false,
                TwoStar: true,
                ThreeStar: false,
                FourStar: false,
                FiveStar: false,
              });
              setrating(2);
            }}
          >
            2
          </NumberP>
          <NumberP
            // className={activeratings.ThreeStar ? "active" : ""}
            onClick={() => {
              setActiveRatings({
                oneStar: false,
                TwoStar: false,
                ThreeStar: true,
                FourStar: false,
                FiveStar: false,
              });
              setrating(3);
            }}
          >
            3
          </NumberP>
          <NumberP
            // className={activeratings.FourStar ? "active" : ""}
            onClick={() => {
              setActiveRatings({
                oneStar: false,
                TwoStar: false,
                ThreeStar: false,
                FourStar: true,
                FiveStar: false,
              });
              setrating(4);
            }}
          >
            4
          </NumberP>
          <NumberP
            // className={activeratings.FiveStar ? "active" : ""}
            onClick={() => {
              setActiveRatings({
                oneStar: false,
                TwoStar: false,
                ThreeStar: false,
                FourStar: false,
                FiveStar: true,
              });
              setrating(5);
            }}
          >
            5
          </NumberP>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </TextContainer>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  height: 360px;
  background: radial-gradient(
    98.96% 98.96% at 50% 0%,
    #232a34 0%,
    #181e27 100%
  );
  border-radius: 30px;
  padding: 24px;
  box-sizing: border-box;
  max-width: 327px;
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
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0px;
    text-align: left;
    color: #ffffff;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: left;
    color: #969fad;
  }
`;

const NumberP = styled.p`
  :focus {
    color: red;
  }
`;

export default ParentComponent;
