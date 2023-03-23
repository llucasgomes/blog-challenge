import { Rotas } from "../routes";
import { DataContextProvider } from "../shared/contexts/DataContext";

function App() {
  return (
    <DataContextProvider>
      <Rotas />;
    </DataContextProvider>
  );
}

export default App;
