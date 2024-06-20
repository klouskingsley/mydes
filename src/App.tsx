import React, { useEffect, useState } from "react";
import "./App.css";
import { encrypt, decrypt } from "./des";

function App() {
  const [enKey, setEnKey] = useState("");
  const [enMsg, setEnMsg] = useState("");
  const [enRes, setEnRes] = useState("");

  const [deKey, setDeKey] = useState("");
  const [deMsg, setDeMsg] = useState("");
  const [deRes, setDeRes] = useState("");

  useEffect(() => {
    if (enKey && enMsg) {
      setEnRes(encrypt(enKey, enMsg));
    } else {
      setEnRes("");
    }
  }, [enKey, enMsg]);

  useEffect(() => {
    if (deKey && deMsg) {
      setDeRes(decrypt(deKey, deMsg));
    } else {
      setDeRes("");
    }
  }, [deKey, deMsg]);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Encrypt</h2>
          key:{" "}
          <input
            value={enKey}
            onChange={(e) => {
              setEnKey(e.target.value);
            }}
          />{" "}
          <br />
          plain msg:{" "}
          <input value={enMsg} onChange={(e) => setEnMsg(e.target.value)} />
          <br />
          result:
          <div
            style={{
              maxWidth: 500,
              overflow: "hidden",
              wordBreak: "break-word",
            }}
          >
            {enRes}
          </div>
        </div>
        <div>
          <h2>Descypt</h2>
          key:{" "}
          <input
            value={deKey}
            onChange={(e) => {
              setDeKey(e.target.value);
            }}
          />{" "}
          <br />
          cipher msg:{" "}
          <input value={deMsg} onChange={(e) => setDeMsg(e.target.value)} />
          <br />
          result:
          <div
            style={{
              maxWidth: 500,
              overflow: "hidden",
              wordBreak: "break-word",
            }}
          >
            {deRes}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
