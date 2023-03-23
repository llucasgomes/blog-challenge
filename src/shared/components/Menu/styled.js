import styled from "styled-components";

export const Container_Menu = styled.section`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 25px;

  h1 {
    font-size: 20px;
    color: #555;
  }
  .post {
    display: flex;
    flex-direction: column;
    gap: 10px;

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    h2 {
      color: #555;
    }
    button {
      width: max-content;
      padding: 7.5px 15px;
      border: none;
      cursor: pointer;
      color: teal;
      background-color: white;
      border: 1px solid teal;

      &:hover {
        border: 1px solid white;
        background-color: $lightGreen;
        color: black;
      }
    }
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;
