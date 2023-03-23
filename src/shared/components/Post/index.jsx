import { Link } from "react-router-dom";
import { Container_Post } from "./styled";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

export const Post = ({ title, image, desc, data }) => {
  const { setPost } = useContext(DataContext);
  return (
    <Container_Post>
      <div className="img">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <a className="link">
          <h1>{title}</h1>
        </a>
        <p>{desc}</p>
        <Link className="button" to={"/post"} onClick={() => setPost(data)}>
          Read More
        </Link>
      </div>
    </Container_Post>
  );
};
