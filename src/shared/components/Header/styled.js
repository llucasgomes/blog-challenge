import styled from "styled-components";

export const Container = styled.header`
  height: 15rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(-45deg, #574ae8, #3ea1db);
  color: #ffffff;

  .title-subtitle {
    width: 60%;
    display: flex;
    align-items: center;
    flex-direction: column;

    .title {
      font-size: 3rem;
    }
    .subtitle {
      font-size: 2rem;
    }
  }

@media (max-width: 768px) {
  height: 7rem;

  .subtitle {
     display: none;
  }
}
`;
