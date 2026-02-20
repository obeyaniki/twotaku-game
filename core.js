import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD5ZKGOIaUEj4g07xIo1A-SlCImQAY-Mf0",
  authDomain: "game-ranking-622a1.firebaseapp.com",
  projectId: "game-ranking-622a1",
  storageBucket: "game-ranking-622a1.firebasestorage.app",
  messagingSenderId: "59664573948",
  appId: "1:59664573948:web:a7becbbeadf05be8b1be79"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// 保存
export async function saveRanking(name, score){
await addDoc(collection(db,"ranking"),{
name:name,
score:score,
time:Date.now()
});
}

// 読み込み
export async function loadRanking(){
const q=query(collection(db,"ranking"),orderBy("score","desc"),limit(10));
const snap=await getDocs(q);
return snap.docs.map(d=>d.data());
}
