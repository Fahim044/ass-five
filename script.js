// functions:
function getInnerText(id)
{
    return parseInt(document.getElementById(id).innerText);
}
function setInnerText(value)
{
    document.getElementById("heart-no").innerText=value;
}
// accessing heart-no
let heartNo=getInnerText("heart-no");
let coin=getInnerText("coin-no");
// if(coin<20)
// {
//     alert("You need at least 20 coins to call");
//     return;
// }

const icons=document.getElementsByClassName("heart-icon");

for(const icon of icons)
{
    icon.addEventListener("click",function()
{
    heartNo=heartNo+1;
    setInnerText(heartNo);
})

}
const callBtns=document.getElementsByClassName("call-btn");
const categories=document.getElementsByClassName("category");
const numbers=document.getElementsByClassName("number");

for(const callBtn of callBtns)
{
    
    callBtn.addEventListener("click",function()
{
    let parent=callBtn.parentNode.parentNode;
    // console.log(parent);
    
    let resultC=parent.querySelector(".category");
    // console.log(resultC);
    // console.log(resultC.innerText);
    let resultN=parent.querySelector(".number");
    // console.log(resultN);
    // console.log(resultN.innerText);

   if(coin<20)
{
    alert("You don't have enough coin!You need at least 20 coins to call");
    return;
}
else{
    alert(`calling ${resultC.innerText} ${resultN.innerText}...`);

    // cutting coins:
    coin=coin-20;
    document.getElementById("coin-no").innerText=coin;
}




    const historyContainer=document.getElementById("history-container");
    const div=document.createElement("div");
    div.innerHTML=`
    <div class="history-card bg-[#f5fff6] shadow p-4 flex justify-between items-center">
                <div >
                    <h3>${resultC.innerText}</h3>
                    <p>${resultN.innerText}</p>
                </div>
                <p>${new Date().toLocaleTimeString()}</p>
            </div>
    `
    historyContainer.appendChild(div);

})
}

document.getElementById("clear-btn").addEventListener("click",function(){
    document.getElementById("history-container").innerText="";
})

// copy button feature:
let copyNo=getInnerText("copy-no");
// console.log(copyNo);
const copyBtns=document.getElementsByClassName("copy-btn");
for(const copyBtn of copyBtns)
{
    copyBtn.addEventListener("click",function()
{
    let parent=copyBtn.parentNode.parentNode;
    let resultN=parent.querySelector(".number");
    alert(`Number Copied: ${resultN.innerText}`);
    // adding copy number:
    copyNo++;
    document.getElementById("copy-no").innerText=copyNo;

    
})
}
