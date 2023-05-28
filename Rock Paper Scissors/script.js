const selectionButtons = document.querySelectorAll('[data-selection]');
const SELECTIONS = [
    {
        name : 'rock',
        emoji : '✊',
        beats : 'scissors'
    },
    {
        name : 'paper',
        emoji : '✋',
        beats : 'rock'
    },
    {
        name : 'scissors',
        emoji : '✌️',
        beats : 'paper'
    }
]
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const whoWonSpan = document.querySelector('[data-who-won]')


selectionButtons.forEach(selectionButton =>{
    selectionButton.addEventListener('click',e =>{
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function makeSelection(selection){
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection,computerSelection)
    const computerWinner = isWinner(computerSelection,selection)
    
    if(yourWinner) {
        incrementScoreSpan(yourScoreSpan)
        whoWonSpanUpdate(whoWonSpan,'YOU WIN')
    }
    else if(computerWinner) {
        incrementScoreSpan(computerScoreSpan)
        
        whoWonSpanUpdate(whoWonSpan,'COMPUTER WIN')
    }
    else{
        whoWonSpanUpdate(whoWonSpan,'DRAW')
    }
    
} 

function incrementScoreSpan(scorespan){
    scorespan.innerText = parseInt(scorespan.innerText)+1
}
function whoWonSpanUpdate(span,word){
    whoWonSpan.innerText = word
}

function isWinner(selection, oppponentSelection){
    return selection.beats === oppponentSelection.name
}

function randomSelection(){
    const randomIndex = Math.floor(Math.random()*SELECTIONS.length)
    return SELECTIONS[randomIndex]
}

function home(){
    location.replace('../IEEE-Project.html');
}

function restart(){
    window.location.reload();
}