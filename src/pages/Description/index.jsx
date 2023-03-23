import { useContext } from "react";
import { Container_Page_Desc } from "./styled";
import { DataContext } from "../../shared/contexts/DataContext";
import { Comment } from "../../shared/components/Comment";
import { ArrowCircleLeft } from "phosphor-react";
import { Link } from "react-router-dom";

export const Page_Description = () => {
  const { post, Comments, comments, user } = useContext(DataContext);

  Comments(post.id);

  let usuario = user
    .filter((user) => user.id == post.userId)
    .map((filteredUser) => filteredUser.name);

  return (
    <Container_Page_Desc>
      <div className="back">
        <Link to={"/"}>
          <ArrowCircleLeft size={45} weight="light" color="gray" />
        </Link>
      </div>
      <div className="content">
        <img src="https://source.unsplash.com/800x600" alt="" />
        <div className="user">
          <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="" />
          <div className="info">
            <span>{usuario}</span>
            <p>Posted {"data do post"}</p>
          </div>
        </div>
        <h1>{post.title}</h1>
        <p className="body">{post.body}</p>
        <div className="container_commnets">
          <p>Comentarios</p>

          {comments.map((item) => (
            <Comment
              key={item.id}
              data={item}
              image={"https://source.unsplash.com/800x600"}
            />
          ))}
        </div>
      </div>
    </Container_Page_Desc>
  );
};
