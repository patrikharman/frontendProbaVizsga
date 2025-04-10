import React, { createContext, useState, useEffect } from "react";

const TestContext = createContext();

export const TestProvider = ({ children }) => {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/tests");
        const data = await response.json();
        setTests(data);
      } catch (error) {
        console.error("Hiba történt a kérdések betöltésekor", error); 
      } finally {
        setLoading(false); 
      }
    };
    fetchTests();
  }, []);

  return (
    <TestContext.Provider value={{ tests, loading }}>
      {children}
    </TestContext.Provider>
  );
};

export default TestContext;