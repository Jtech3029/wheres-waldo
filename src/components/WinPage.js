import { useState } from "react"
import getScores from "../functions/getScores";
import SubmitScore from "../functions/SubmitScore";
import uniqid from "uniqid";

export default function WinPage(props) {
    const [ hasSubmit, setHasSubmit ] = useState(false);
    const [ lastTenWinners, setLastTenWinners ] = useState();

    return(
        <div>
            {!hasSubmit &&
            <div>
                Your time was {props.finalTime} seconds
                <form>
                    <label>Input your username</label>
                    <input required id="username-input"></input>
                    <button type="submit" onClick={async (e) => {e.preventDefault();
                    SubmitScore(document.getElementById("username-input").value, props.finalTime);
                    let array = await getScores();
                    setLastTenWinners(array);
                    setHasSubmit(true);
                    }}>Submit</button>
                </form>
            </div>
            }
            {hasSubmit &&
            <div>
                <div>
                    <div>
                        Position
                    </div>
                    <div className="high-score-winners">
                        <div>
                            Username
                        </div>
                        <div>
                            Time
                        </div>
                    </div>
                </div>
                <ol>
                {lastTenWinners.map((x) => (<li className="high-score-winners" key={uniqid()}>
                    <div>
                    {x.username ? x.username : "anonymous"}
                    </div>
                    <div>
                    {x.time} seconds
                    </div>
                </li>))}
                </ol>
                <button onClick={() => {
                    props.setHasWon(false);
                    props.setPlay(false);
                }}>Play Again?</button>
            </div>
            }
        </div>
    )
}