import { collection, addDoc } from "firebase/firestore"; 
import { db } from "./firebase";
export default function SubmitScore(username, time) {
    addDoc(collection(db, "winners"), {
      username: username,
      time: time
    });
}