import { useEffect, useState } from "react"
import "../styles/WaldoPage.css"
import OptionsMenu from "./OptionsMenu";
import Timer from "./Timer";

export default function WaldoPage(props) {
    const [x, setX] = useState();
    const [y, setY] = useState();
    const [renderOptions, setRenderOptions] = useState(false);
    const [finalTime, setFinalTime] = useState();
    const [ natsukiFound, setNatsukiFound ] = useState(false);
    const [ sansFound, setSansFound ] = useState(false);
    const [ freddyFound, setFreddyFound ] = useState(false);

    useEffect(() => {
        if(natsukiFound && sansFound && freddyFound) {
            props.setHasWon(true);
            props.setFinalTime(finalTime);
        }
    })
    function renderButton(e) {
        if(renderOptions === false) {
            setX(e.clientX);
            setY(e.clientY);
        setRenderOptions(true);
        }
        else{
            setRenderOptions(false);
        }
    }

    return (<div id="waldo-page">
        <Timer setFinalTime={setFinalTime}></Timer>
        <img onClick={renderButton} draggable="false" src={require("../imgs/wheres-waldo.png")} id="waldo-image" alt="waldo"></img>
        {renderOptions && (<OptionsMenu xPosition={x}
         yPosition={y}
         natsukiFound={natsukiFound}
         setNatsukiFound={setNatsukiFound}
         sansFound={sansFound}
         setSansFound={setSansFound}
         freddyFound={freddyFound}
         setFreddyFound={setFreddyFound}/>)}
    </div>)
}