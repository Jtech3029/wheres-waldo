import WaldoPage from "./WaldoPage";
import "../styles/App.css"
import { useState } from "react";

function App() {

  const [ hasWon, setHasWon ] = useState(false);
  return (
    <div className="App">
      {!hasWon && <WaldoPage setHasWon={setHasWon}/>}
    </div>
  );
}

export default App;
