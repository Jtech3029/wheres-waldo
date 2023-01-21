import { getDoc, doc } from "firebase/firestore"; 
import { db } from "./firebase";
export default async function checkIfCorrect(character, coords, screenWidth) {
    let characterData = await getDoc(doc(db, "character-positions", character));
    let changedCoords = coords.slice(0);

    if(!characterData.hasOwnProperty("position")){
        characterData = characterData.data();
    }

    let screenRatio = characterData.screenSize[0]/screenWidth;
    changedCoords = changedCoords.map((x) => x * screenRatio);

    let xLength = Math.pow(changedCoords[0]-characterData.position[0],2);
    let yLength = Math.pow(changedCoords[1]-characterData.position[1],2);

    return (Math.sqrt(xLength + yLength) < (.05 * screenWidth));
}


