let choice_list = document.querySelectorAll(".choice")
let msg = document.querySelector("#msg");
let user_score=0;
let comp_score=0;
const user_score_board = document.querySelector(".user-score");
const comp_score_board = document.querySelector(".comp-score");
const draw = () => {
    console.log("It's a Draw");
    msg.innerText="It's a draw";
     msg.style.backgroundColor ="orange"
}

const DisplayWinner=(user_winner,user_choice,comp_ch)=>{
    if(user_winner){
        msg.innerText= `you won,your ${user_choice} beats comp ${comp_ch}`;
        user_score++;
        user_score_board.innerText=user_score;
        msg.style.backgroundColor ="green"

    }
    else{
        msg.innerText= `You loss,comp ${comp_ch} beats  your ${user_choice}`;
        comp_score++;
        comp_score_board.innerText=comp_score;
         msg.style.backgroundColor ="red"
    }

}

const playgame = (user_choice) => {
    console.log("user move:", user_choice);
    let comp_ch = getcompchoice();
    console.log("comp move:", comp_ch);
    if (user_choice === comp_ch) {
        draw();
    }
    else {
        let user_winner=true
        if (user_choice === "rock") {
            // paper  or scissor
            // paper beats rock and rock beats scissor
            user_winner= comp_ch==="scissors"?true:false;
        }
        else if(user_choice==="paper"){
            // rock or scissor
            // paper beats rock and scissor beats rock

            user_winner = comp_ch==="rock"?true:false;
        }
        else{
            // rock or paper
            // scissor beats rock and rock beats scissor
            user_winner=comp_ch==="paper"?true:false;
        }
        DisplayWinner(user_winner,user_choice,comp_ch);
    }



}

const getcompchoice = () => {
    let choice_list = ["rock", "paper", "scissors"];
    let random_index = Math.floor(Math.random() * 3);
    return choice_list[random_index];
}

choice_list.forEach((choice) => {
    choice.addEventListener("click", () => {
        let user_choice = choice.getAttribute("id")
        playgame(user_choice);
    })
})
let restart = ()=>{
    msg.innerText="Play Your Move";
    user_score_board.innerText=0;
    comp_score_board.innerText=0;
     msg.style.backgroundColor ="black"
}
let resetbtn = document.querySelector("#resetbtn")
resetbtn.addEventListener("click",restart);