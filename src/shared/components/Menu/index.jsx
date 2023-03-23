import { useContext } from "react";
import { Container_Menu } from "./styled";
import { DataContext } from "../../contexts/DataContext";

export const Menu = () => {
  const { posts, post, setPost } = useContext(DataContext);

  return (
    <Container_Menu>
      <h1>Outros posts que você pode gostar</h1>

      {posts.map((item) =>
        item.id < 5 ? (
          <div className="post" key={post.id}>
            <img src="https://source.unsplash.com/800x600" alt="" />
            <h2>{item.title}</h2>
            <button onClick={() => setPost(item)}>Saiba mais</button>
          </div>
        ) : null
      )}
    </Container_Menu>
  );
};
