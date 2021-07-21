// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";
import Checkbox from "./checkbox";

function App() {
  const [val, set] = useState("");
  const [phrase, setPhrase] = useState("example phrase");

  const createPhrase = () => {
    setPhrase(val);
    set("");
  };
  // useEffect(() => {
  //   console.log(`typing ${val}`);
  // }, [val]);

  // useEffect(() => {
  //   console.log(`saved phrase: ${phrase}`);
  // }, [phrase]);

  useEffect(() => {
    console.log("only once after initial render");
  }, []);


  return (
    <>
      <label>Favorite phrase:</label>
      <input
        value={val}
        placeholder={phrase}
        onChange={e => set(e.target.value)}
      />
      <button onClick={createPhrase}>Send</button>
    </>
  );
}

export default App;
