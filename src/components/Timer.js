import { useEffect, useState } from "react";
import "../styles/Timer.css";

export default function Timer(props) {
    const [finalTime, setFinalTime] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(seconds === 59) {
                setSeconds(0);
                setMinutes(minutes + 1);
            }
            else{
                setSeconds(seconds + 1);
            }
            setFinalTime(finalTime + 1)
            props.setFinalTime(finalTime);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
      });

    return<div id="timer">
        {minutes}:{(seconds >= 10) ? seconds : "0" + seconds}
    </div>
}