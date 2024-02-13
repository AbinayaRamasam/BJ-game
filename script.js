let cards = []
let sum = 0
let hasBlackJack=false
let isAlive= false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Abi",
    chip: 200
}

let playerEl=document.getElementById("player-el")
playerEl.textContent = player.name + ": €"+player.chip
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*12)+1
    if(randomNumber>10){
        return 10
    }else if(randomNumber===1){
        return 11
    }else
        
    return randomNumber
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard+secondCard
    renderGame()
}

function renderGame()
{
    cardsEl.textContent = "Cards: "
    for(let i=0; i<cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent= "somme: " + sum
if (sum<21){
    message="Do you want to draw a new card ? 🙃"
} else if (sum===21){
    message="Wohoo! Felicitations 🥰🤩 "
     hasBlackJack=true
} else {
    message="you are out of the game😭"
    isAlive= false
}
messageEl.textContent = message
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
    
}


//let hasCompletedCourse = true
//let givesCertificate = true

//if(true&&true){
  //  generateCertificate()
//}
//function generateCertificate(){
  //  console.log("Generating certificate....")
//}