import { collection, orderBy, limit, query, getDocs } from "firebase/firestore";
import { db } from "./firebase";
export default async function getScores() {
    const winners = await query(collection(db, 'winners'), orderBy('time'), limit(10));
    const winnersArray = await getDocs(winners);
    let returnArray = [];
    winnersArray.forEach((x) => returnArray.push(x.data()));

    return returnArray;
}