let rand = Math.floor(Math.random() * 110) + 1;
let value = db.collection("fortunes").doc(rand.toString());
let lNumber= document.querySelector('#number');
let lValues=""

for(let i=0;i<5;i++){
	let luckyNumber= Math.floor(Math.random()*69)+1;
	lValues+=luckyNumber +" ";

}
lNumber.textContent=lValues;

value.get().then(doc => {
    document.querySelector("#quote").textContent = doc.data().quote;
});