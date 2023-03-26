import { useContext } from "react";
import { Rotas } from "../routes";
import {
  DataContext,
  DataContextProvider,
} from "../shared/contexts/DataContext";

import ReactLoading from "react-loading";
import { Container_Loading } from "./styled";

function App() {
  const { isFetching } = useContext(DataContext);

  return (
    <DataContextProvider>
      {isFetching ? (
        <Container_Loading>
          <ReactLoading
            type={"spin"}
            color={"#7279f9"}
            height={100}
            width={100}
          />
        </Container_Loading>
      ) : (
        <Rotas />
      )}
      ;
    </DataContextProvider>
  );
}

export default App;
