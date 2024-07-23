let boxContainer = document.querySelector(".column") 
let playerStatus = document.getElementById("status")
function winaudio(){
    var audio = new Audio('./assets/win.mp3');
    audio.play();
}
function drawaudio(){
    var audio = new Audio('./assets/majakh.mp3');
    audio.play();
}
function reset(){
   if((playerStatus.innerText==="WINNER IS x" || playerStatus.innerText==="WINNER IS o" || playerStatus.innerText==="DRAW" ) ){
    setTimeout(()=>{
        location.reload()
    },5000)
   }
}


let arr = Array(9).fill(null)
currentPlayer= "x" 
function checkWinner(){
    if((arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2]) || (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) || 
     (arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8])  || (arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6]) || (arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7])  || (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8])  || (arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8])  || (arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6])){
        playerStatus.innerText = `WINNER IS ${currentPlayer}`
        winaudio()
        reset()

    
    }
        else{
            if (arr.every(element => element !== null)) {
                playerStatus.innerText = "DRAW"
                drawaudio()
                reset()
        }
    
        }
    }
   



function handleclick(e){

    let boxIndex = e.id;
    if(arr[boxIndex]!==null){
        return
    }
    e.innerText = currentPlayer
    arr[boxIndex]=currentPlayer
    console.log(arr);
    checkWinner()
    
    if(currentPlayer==="x")
        {
            currentPlayer = "o"
        }
        else{
            currentPlayer = "x"
        }
        

     

}