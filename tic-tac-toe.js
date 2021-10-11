function Start(){
    var board = document.querySelector("#board");
    var squares = board.querySelectorAll("div");
    var stat = document.querySelector("#status");
    var NewGame = document.querySelector("button");
    var count = 0;
    var empty = '';
    var boxnum = 0;
   

    squares.forEach(item =>{
        item.setAttribute("class","square");
        item.textContent = empty;
        item.setAttribute("id", boxnum++);
    });

    squares.forEach(item => {
        item.addEventListener("click", function(){
			if (item.textContent !== empty){
				stat.textContent = "Square occupied. Please select an empty square to play.";
				return;
			}
            count+=1;
            stat.textContent = "Move your mouse over a square and click to play an X/O";
            if(count %2 == 0){
                this.textContent = "X";
                this.classList.add("square", "X");
            }else{
                this.textContent = "O";
                this.classList.add("square", "O");
            }
            Endgame();
        });
    });

    squares.forEach(item=>{
        item.addEventListener("mouseover",function(){
            item.classList.add("hover");
        });
        item.addEventListener("mouseleave",function(){
                item.classList.remove("hover");
        });
    });

    NewGame.addEventListener("click",function(){
        squares.forEach(item=>{
            item.textContent = empty;
        });
        stat.classList.remove("class","you-won");
        stat.textContent ="Move mouse over a square and click to play X/O";
    });

    function Endgame(){
        if(squares[0].textContent==squares[1].textContent && squares[1].textContent==squares[2].textContent &&squares[0].textContent==squares[2].textContent && squares[2].textContent !== "")
            results(squares[0].textContent);
        if(squares[0].textContent==squares[4].textContent && squares[4].textContent==squares[8].textContent &&squares[0].textContent==squares[8].textContent && squares[8].textContent !== "")
            results(squares[0].textContent);
        if(squares[0].textContent==squares[3].textContent && squares[3].textContent==squares[6].textContent &&squares[0].textContent==squares[6].textContent && squares[6].textContent !== "")
            results(squares[0].textContent);
        if(squares[1].textContent==squares[4].textContent && squares[4].textContent==squares[7].textContent &&squares[1].textContent==squares[7].textContent && squares[7].textContent !== "")
            results(squares[1].textContent);    
        if(squares[2].textContent==squares[5].textContent && squares[5].textContent==squares[8].textContent &&squares[2].textContent==squares[8].textContent && squares[8].textContent !== "")
            results(squares[2].textContent);
        if(squares[3].textContent==squares[4].textContent && squares[4].textContent==squares[5].textContent &&squares[3].textContent==squares[5].textContent && squares[5].textContent !== "")
            results(squares[3].textContent);
        if(squares[6].textContent==squares[7].textContent && squares[7].textContent==squares[8].textContent &&squares[6].textContent==squares[8].textContent && squares[8].textContent !== "")
            results(squares[6].textContent); 
        if(squares[6].textContent==squares[4].textContent && squares[4].textContent==squares[2].textContent &&squares[6].textContent==squares[2].textContent && squares[2].textContent !== "")
            results(squares[6].textContent);
    }

    var results = function(current_player){
        stat.classList.add("class", "you-won");
        stat.textContent = `Congraulations! ${current_player}! You're the Winner!`;
    }
}   
window.onload=Start;