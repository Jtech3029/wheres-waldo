import WaldoPage from "./WaldoPage";
import "../styles/App.css"
import { useState } from "react";
import InfoPage from "./InfoPage";
import WinPage from "./WinPage";

function App() {
  const [ finalTime, setFinalTime ] = useState()
  const [ hasWon, setHasWon ] = useState(false);
  const [ play, setPlay ] = useState(false);

  return (
    <div className="App">
      {(!hasWon && !play) &&
        <InfoPage setPlay={setPlay}/>
      }
      {(!hasWon && play) && <div>
        <WaldoPage setHasWon={setHasWon} setFinalTime={setFinalTime}/>
      </div>}
      {(hasWon && play) &&
      <WinPage finalTime={finalTime} setHasWon={setHasWon} setPlay={setPlay}/> 
      }
    </div>
  );
}

export default App;