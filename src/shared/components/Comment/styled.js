import styled from "styled-components";

export const Container_Comment = styled.div`
  border: 1px black solid;
  border-radius: 8px;
  padding: 10px;
  margin: 0 0 20px 0;
  background-color: #ffffffff;
  .user {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;

    .img {
      width: 10px;
      height: 100px;
      border-radius: 30%;
      object-fit: cover;
    }

    span {
      font-weight: bold;
      font-size: 16px;
    }
    p {
      text-align: justify;
      line-height: 25px;
      font-size: 15px;
    }
  }
`;
