import React from "react";
import { TestProvider } from "./context/TestContext";
import Kategoria from "./components/Kategoria";

function App() {
  return (
    <TestProvider>
      <div className="App">
        <h1>Hulladékgyűjtési Kérdések</h1>
        <Kategoria />
      </div>
    </TestProvider>
  );
}

export default App;