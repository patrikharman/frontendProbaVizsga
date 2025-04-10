import React, { useContext, useState } from "react";
import TestContext from "../context/TestContext";

const Kategoria = () => {
  const { tests } = useContext(TestContext); 
  const [aktualisKerdes, setAktualisKerdes] = useState(0);
  const [valasz, setValasz] = useState(null); 

  const Tesztek = tests[aktualisKerdes]; 

  const handleAnswerClick = (valasz) => {
    setValasz(valasz); 
    if (aktualisKerdes < tests.length - 1) {
      setAktualisKerdes(aktualisKerdes + 1); 
    } else {
      alert("Befejezted a kérdések megválaszolását!"); 
    }
  };

  return (
    <div className="test-card">
      <h3>{Tesztek?.kerdes}</h3>
      <div className="answers">
        <button onClick={() => handleAnswerClick(Tesztek.v1)}>
          {Tesztek.v1}
        </button>
        <button onClick={() => handleAnswerClick(Tesztek.v2)}>
          {Tesztek.v2}
        </button>
        <button onClick={() => handleAnswerClick(Tesztek.v3)}>
          {Tesztek.v3}
        </button>
        <button onClick={() => handleAnswerClick(Tesztek.v4)}>
          {Tesztek.v4}
        </button>
      </div>
      {valasz && (
        <div>
          <p>Válaszod: {valasz}</p> 
        </div>
      )}
    </div>
  );
};

export default Kategoria;