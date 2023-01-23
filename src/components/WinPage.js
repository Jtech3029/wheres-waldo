import { useState } from "react"
import getScores from "../functions/getScores";
import SubmitScore from "../functions/SubmitScore";
import uniqid from "uniqid";
import "../styles/WinPage.css";
export default function WinPage(props) {
    const [ hasSubmit, setHasSubmit ] = useState(false);
    const [ lastTenWinners, setLastTenWinners ] = useState();

    return(
        <div id="submit-name-page">
            {!hasSubmit &&
            <div>
                <div>
                Your time was {props.finalTime} seconds
                </div>
                <form id="win-form">
                    <input required id="username-input" placeholder="input your username"></input>
                    <button type="submit" id="win-page-submit" onClick={async (e) => {e.preventDefault();
                    SubmitScore(document.getElementById("username-input").value, props.finalTime);
                    let array = await getScores();
                    array.unshift({username: "Username", time: "Time", position: "Position"});
                    setLastTenWinners(array);
                    setHasSubmit(true);
                    }}>Submit</button>
                </form>
            </div>
            }
            {hasSubmit &&
            <div id="high-score-page">
                <div>
                Leaderboard
                </div>
                <div id="high-score">
                {lastTenWinners.map((x, index) => (<div className="high-score-winners" key={uniqid()}>
                    <div>
                        { x.position ? x.position : index + "."}
                    </div>
                    <div>
                        {x.username ? x.username : "anonymous"}
                    </div>
                    <div>
                        {x.time !== "Time" ? x.time + " seconds" : x.time}
                    </div>
                </div>))}
                </div>
                <button id="play-again" onClick={() => {
                    props.setHasWon(false);
                    props.setPlay(false);
                }}>Play Again?</button>
            </div>
            }
        </div>
    )
}