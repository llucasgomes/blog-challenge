import { useContext } from "react";
import { Footer } from "../../shared/components/Footer";
import { Post } from "../../shared/components/Post";
import { Container_Posts } from "./styled";
import { DataContext } from "../../shared/contexts/DataContext";

export const Home = () => {
  const { posts } = useContext(DataContext);

  return (
    <Container_Posts>
      {posts.map((item) => (
        <Post
          key={item.id}
          title={item.title}
          desc={item.body}
          data={item}
          image={"https://source.unsplash.com/800x600"}
        />
      ))}
    </Container_Posts>
  );
};
