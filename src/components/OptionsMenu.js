import checkIfCorrect from "../functions/checkIfCorrect"

export default function OptionsMenu(props) {
    const optionStyling = {
        position: "absolute",
        display: "flex",
        pointerEvents: "none",
        top: props.yPosition - (window.innerWidth * .025),
        left: props.xPosition - (window.innerWidth * .025)
    }
    const optionCircleStyle = {
        aspectRatio: "1/1",
        border: "2px solid",
        borderRadius: "55px",
        width: "5vw"
    }

    return(
        <div style={optionStyling}>
            <div id="options-circle" style={optionCircleStyle}>
            </div>
            <div id="options-container" style={{display: "flex", flexDirection: "column", pointerEvents: "all"}}>
                {!props.natsukiFound && <button onClick={() => 
                    checkIfCorrect("Natsuki", [props.xPosition, props.yPosition], window.innerWidth)
                    .then((data) => data && props.setNatsukiFound(true))
                    }>Natsuki</button>}
                {!props.sansFound && <button onClick={() => 
                    checkIfCorrect("Sans", [props.xPosition, props.yPosition], window.innerWidth)
                    .then((data) => data && props.setSansFound(true))
                    }>Sans</button>}
                {!props.freddyFound && <button onClick={() => 
                    checkIfCorrect("FreddyFazbear", [props.xPosition, props.yPosition], window.innerWidth)
                    .then((data) => data && props.setFreddyFound(true))
                    }>Freddy Fazbear</button>}
            </div>
        </div>
    )
}