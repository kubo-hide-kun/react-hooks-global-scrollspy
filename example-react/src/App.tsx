import { Title } from "./components";
import { GlobalScrollSpyProvider } from "react-hooks-global-scrollspy";
import "./App.css";

const App = () => {
  return (
    <GlobalScrollSpyProvider>
      {[...Array(500)].map((_, i) => (
        <Title idx={i} />
      ))}
    </GlobalScrollSpyProvider>
  );
};

export default App;
