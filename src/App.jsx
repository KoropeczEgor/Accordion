import { useState } from "react";
import dataDB from "./data.json";

import "./App.css";

const App = () => {
  const [showInfo, setShowInfo] = useState(0);

  return (
    <>
      <div className="App">
        <h1>Accordion</h1>
        {dataDB.map((data, id) => {
          return (
            <section
              key={id}
              className="container"
              onClick={() => {
                setShowInfo(showInfo === id ? null : id);
              }}
            >
              <h4>{data.question}</h4>
              {showInfo === id && <p>{data.answer}</p>}
            </section>
          );
        })}
      </div>
    </>
  );
};

export default App;
