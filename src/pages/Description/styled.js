import styled from "styled-components";

export const Container_Page_Desc = styled.section`
  display: flex;
  gap: 50px;
  margin: 50px 200px 0;
  .back {
    position: absolute;
    left: 5%;
    top: 10.5rem;
  }
  .content {
    flex: 5;
    display: flex;
    flex-direction: column;
    gap: 30px;

    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    .user {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
      }

      span {
        font-weight: bold;
      }
    }

    h1 {
      font-size: 42px;
      color: #333;
    }

    p {
      text-align: justify;
      line-height: 30px;
      font-size: 20px;
    }
    .body {
      margin: 0 0 50px 0;
    }
  }

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
