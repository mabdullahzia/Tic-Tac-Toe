let boxes=document.querySelectorAll(".box")
let reset = document.querySelector(".reset")
let news = document.querySelector(".new")
let msg = document.querySelector(".msg")

let turn0=true
let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const reset_game=()=>{
    turn0=true
    for(let box of boxes)
         {
            box.disabled=false;
            box.innerText="";
            box.style.color = "white";
         }
    msg.classList.add("hide");
    news.classList.add("hide");         

}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0==true)
        {
            box.innerText="O"
            turn0=false
            box.style.color="green";
        }
        else{
            box.innerText="X"

            turn0=true
            box.style.color="red";

        }
        box.disabled=true
        winer();

    })
});
const show_winner= (winer)=>{
        msg.innerText=`Congratulation, Winner is ${winer}`;
        msg.classList.remove("hide");
        news.classList.remove("hide");
        for(let box of boxes)
         {
            box.disabled=true;
         }
}
const winer=()=>{

    for (let pattren of win)
    {
        let val1=boxes[pattren[0]].innerText;
        let val2=boxes[pattren[1]].innerText;
        let val3=boxes[pattren[2]].innerText;
         if(val1!="" && val2!="" && val3!="")
    {
        if(val1===val2 && val2===val3){
         show_winner(val1);
        
        }
    }
    }  
}
news.addEventListener("click",reset_game)
reset.addEventListener("click",reset_game)