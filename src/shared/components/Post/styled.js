import styled from 'styled-components'

export const Container_Post = styled.div`
  display: flex;
  gap: 100px;

  &:nth-child(2n + 1) {
    flex-direction: row-reverse;
  }

  .img {
    flex: 2;
    position: relative;

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      background-color: #a4ddf8;
      position: absolute;
      top: 20px;
      left: -20px;
      z-index: -1;
    }

    img {
      width: 100%;
      max-height: 400px;
      object-fit: cover;
    }
  }

  .content {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
      font-size: 48px;
    }

    p {
      font-size: 18px;
    }

    .button {
      text-decoration: none;
      width: max-content;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
      background-color: white;
      border: 1px solid #e5e4e2;
      border-radius: 8px;
      color: teal;
      font-size: 14px;

      &:hover {
        border: 1px solid white;
        background-color: #a4ddf8;
        color: #000000;
      }
    }
  }

  @media (min-width: 769px) and (max-width: 900px) {
    border: 1px solid #e5e4e2;
    padding: 20px;
    .img {
      &::after {
        display: none;
      }
    }

    .content {
      h1 {
        font-size: 40px;
      }

      p {
        font-size: 14px;
        margin: 10px 0;
      }

      button {
        margin: 10px 0;
      }
    }
  }
  @media (min-width: 481px) and (max-width: 768px) {
    border: 1px solid #e5e4e2;
    border-radius: 8px;
    padding: 20px;
    background-color: #ffffff;

    .img {
      display: none;
    }

    .content {
      h1 {
        font-size: 30px;
      }

      p {
        font-size: 12px;
        margin: 10px 0;
      }

      button {
        margin: 10px 0;
      }
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    border: 1px solid #e5e4e2;
    border-radius: 8px;
    padding: 20px;
    .img {
      display: none;
    }

    .content {
      h1 {
        font-size: 30px;
      }

      p {
        font-size: 12px;
        margin: 10px 0;
      }

      button {
        margin: 20px 0;
        background: #7279f9;
        color: #000;
        border: 1px solid #e5e4e2;
      }
    }
  }
`
