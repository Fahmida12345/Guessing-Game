
const icon = document.getElementById("icon");
const showResult = document.getElementById("showResult");
const startBtn = document.getElementById("startBtn");
const reStartBtn = document.getElementById("reStartBtn");

startBtn.addEventListener("click", ()=>{
    let numOfwon = 0;
    let numOflose = 0;
 for( let x= 1; x <=5 ; x++){
    let inputNumber =parseInt(prompt("Enter the Number 1 to 5"))

    let systemNumber =Math.floor(Math.random()*5)+1;
    if(inputNumber == systemNumber){
        console.log("Yes!U Won");
        numOfwon++
    }
    else{
        console.log("Sorry!U lose");
        numOflose++;

    }

 }

icon.style.display ="block";
showResult.style.display ="block";
startBtn.style.display ="none";
reStartBtn.style.display ="initial";


if(numOfwon > numOflose){
    showResult.innerHTML = ` Yes!U Win ${numOfwon} Times  `
    icon.classList.replace("fa-heart-crack","fa-trophy")
}
else{
    showResult.innerHTML = ` Sorry!U lose ${numOflose} Times  `
    icon.classList.replace("fa-trophy" ,"fa-heart-crack")

}

})

reStartBtn.addEventListener("click", ()=>{
document.location.reload();
})