import styled from "styled-components";

export const Container_Posts = styled.section`
  display: flex;
  flex-direction: column;
  gap: 150px;
  margin: 50px 200px 0;

  @media (min-width: 769px) and (max-width: 1279px) {
    margin: 50px 100px 0;
    gap: 100px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    margin: 50px 50px 0;
    gap: 50px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    margin: 50px 50px 0;
    gap: 25px;
  }
`;
