import { db } from "./core.js";
import {
 collection,
 addDoc,
 getDocs,
 query,
 orderBy,
 limit
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* 名前保存 */
export function setPlayerName(name){
 localStorage.setItem("playerName",name);
}

export function getPlayerName(){
 return localStorage.getItem("playerName") || "名無し";
}

/* ランキング送信 */
export async function sendScore(score){
 await addDoc(collection(db,"ranking"),{
  name:getPlayerName(),
  score:score,
  time:Date.now()
 });
}

/* ランキング取得 */
export async function loadRanking(){
 const q=query(collection(db,"ranking"),orderBy("score","desc"),limit(10));
 const snap=await getDocs(q);
 return snap.docs.map(d=>d.data());
}