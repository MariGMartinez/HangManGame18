//Create an array of selection words for game
var wordList = ["worldcup", "superbowl", "masters", "u.s.open", "worldseries"]
var wordSelection = "" ;
var lettersInSelectedWord = [];
var numBlanks = 0;
var blanksandSuccesses = [];
var wrongGuesses = [];
var wins = 0;
var losses = 0;
var numGuesses = 9;
function startGame (){
    numGuesses= 9;
    wordSelection = wordList[Math.floor(Math.random()*wordList.length)];
    lettersInSelectedWord = wordSelection.split("")
    console.log (lettersInSelectedWord)
    numBlanks = lettersInSelectedWord.length ;
    console.log (numBlanks)
    blanksandSuccesses = [];
    
    wrongGuesses = [];
    for ( i= 0 ; i < numBlanks ; i++){
        blanksandSuccesses.push("_");

    }
console.log (blanksandSuccesses);
 document.getElementById ("blanks").innerHTML = blanksandSuccesses.join(" ")
 document.getElementById ("guessLeft").innerHTML = numGuesses
 document.getElementById ("wrongGuesses").innerHTML= wrongGuesses.join (" ")
///for (i = 0; i < cars.length; i++) { 
   // text += cars[i] + "<br>";
}


function confirmLetters(letter){
    var verifyLetter= false
    for ( i=0; i< wordSelection.length; i++){
        if ( wordSelection[i] === letter){
            verifyLetter = true
        }
    }
    if (verifyLetter) {
        for (var c= 0; c < wordSelection.length; c++ ){
            if (wordSelection [c]===letter){
                blanksandSuccesses [c]= letter
            }

        }

    }
    else{
        wrongGuesses.push (letter)
        numGuesses--; 
    }

}




//function checkLetters (letters){
//if ( letters =='W' ){
//console.log ('its an W')
//}
  //  else{
    //console.log ('its not an W') 
    //}
//}
//function pickRandomWord(){
  //  var randomWordIndex = Math.floor(Math.random() * words.length);
    //console.log(wordsList[randomWordIndex]);
//}

//psuedo code is the liason between english and code
// Create a variable that computer is going to hold that word (one at a time)
//var wordStorage = ()
//var seperateWord = wordStorage.split( '')
//if else statements to check if the letter is word
function session(){

    console. log("Wins"+ wins) 
    console.log ("Losses:"+ losses)
    console.log ("numGuesses:"+ numGuesses)
    document.getElementById ("guessLeft"). innerHTML = numGuesses;
    document.getElementById ("wrongGuesses").innerHTML = wrongGuesses.join(" ")
    document.getElementById ("blanks").innerHTML = blanksandSuccesses.join (" ")
    console.log(lettersInSelectedWord)
    if (lettersInSelectedWord.toString() === blanksandSuccesses.toString()){
        wins++
        alert ("Congrats! You win!")
        document.getElementById("wins").innerHTML = wins;
        startGame()
    }
    else if (numGuesses===0){
        losses++
        alert ( "Get back in the game!")
        document.getElementById ("losses").innerHTML=losses;
        startGame()
    }


} 

startGame()

document.onkeyup = function (event){
    var letterGuessed = event.key;
    confirmLetters(letterGuessed);
    session()
} 
