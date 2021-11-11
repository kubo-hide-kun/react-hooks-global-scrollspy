import { useEffect } from "react";
import { Title } from "./components";
import { ScrollSpyContext } from "./context";
import "./App.css";

const App = () => {
  const activeEntry = ScrollSpyContext.getActiveEntry();

  useEffect(() => console.log(activeEntry), [activeEntry]);

  return (
    <ScrollSpyContext.Provider>
      {
        [...Array(10)].map((_, i) => <Title idx={i} />)
      }
    </ScrollSpyContext.Provider>
  );
}

export default App;
