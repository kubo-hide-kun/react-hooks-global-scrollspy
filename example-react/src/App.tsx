import { Title } from "./components";
import { GlobalScrollSpyProvider } from "./scrollSpy";
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
