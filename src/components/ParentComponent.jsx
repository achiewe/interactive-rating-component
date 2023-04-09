import styled from "styled-components";

function ParentComponent() {
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

export default ParentComponent;
