// 1 - criar contexto
import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const DataContext = createContext();

// 2 - criar provider
export const DataContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  //LISTAR POSTS
  useEffect(() => {
    api
      .get("/posts")
      .then((response) => setPosts(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [posts]);

  //LISTAR COMENTARIOS
  const Comments = (id) => {
    useEffect(() => {
      window.scrollTo(0, 0); //ira scrolar ao top da pagina, quando o componente renderizar ${id}
      api
        .get(`/posts/${id}/comments`)
        .then((response) => setComments(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);
  };

  return (
    <DataContext.Provider value={{ post, setPost, posts, Comments, comments }}>
      {children}
    </DataContext.Provider>
  );
};
