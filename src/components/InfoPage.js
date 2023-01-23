import "../styles/InfoPage.css"

export default function InfoPage(props) {
    return(<div id="info-page">
            <div id="info-page-container">
                <div>
                    Find these characters
                </div>
                <div id="info-page-image-container">
                    <img src={require("../imgs/Freddy.jpeg")} alt="Freddy" className="info-page-image"></img>
                    <img src={require("../imgs/download.jpeg")}alt="Sans" className="info-page-image"></img>
                    <img src={require("../imgs/natsuki.jpeg")}alt="Natsuki" className="info-page-image"></img>
                </div>
                <button id="play-button" onClick={() => props.setPlay(true)}>
                    Play
                </button>
            </div>
        </div>)
}