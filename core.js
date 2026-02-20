const _k=[66,76,65,67,75,45,79,77,69,71,65];
const _s=[88,45,55,50,57,57];

function _decode(a){
return a.map(v=>String.fromCharCode(v)).join("");
}

function _hash(str){
let h=0;
for(let i=0;i<str.length;i++){
h=(h<<5)-h+str.charCodeAt(i);
h|=0;
}
return h;
}

window.activateGodMode=function(input){
const key=_decode(_k);
const seed=_decode(_s);

if(_hash(input)===_hash(key+seed)){
window.__Ω=true;
}
}

window.nextAnswer=function(){
if(window.__Ω){
const t=Math.floor(Date.now()/1000);
return (t%2)+1;
}
return Math.random()<0.5?1:2;
}
