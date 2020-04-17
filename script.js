// console.log("I am working?");

//Dynamic Displayed Date
function displayDate(){
    var date = new Date();
    var today = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    // console.log(year);
    // document.write("<h4>" + month + "/" + today + "/" + year + "</h4>");

    document.getElementById("dateLocation").innerHTML = (month + "/" + today + "/" + year);

}

//Age Question Function
function ageQuestion(){
    var age = prompt("How old are you? (please provide a number)");
    var catYears = age * 5;

    alert("If you were a cat you would be " + catYears + " old.");

    if (age > 60){
        document.getElementById("catsAreBetter").innerHTML = ("Cats are better than grandkids.");
    } else if (age > 30){
        document.getElementById("catsAreBetter").innerHTML = ("Cats are better than having kids.");
    }else{
        document.getElementById("catsAreBetter").innerHTML = ("Cats are better than parents.");
    }
}

//Button Functionality
function myFunction() {
    document.getElementById("demo").innerHTML = "Growl!!!!!";
  }

function gotoPerson(){
    location.href="https://amberfalbo.github.io/coolcats/";    
}

//Cat Questions
function catQuestion(){
    var yesNo = 'nope';

    while (( yesNo != 'YES') && (yesNo != "NO")){
        yesNo = prompt("Do you like cats? (yes or no)").toUpperCase();
        console.log(yesNo);
    }

    if(yesNo === 'NO'){
        alert("Please be welcome!");
    } else {
        alert("YOU ARE ONE OF US!!!");
    }
}

//Guessing game
function guessGame(){
    var number = Math.floor(Math.random()*10)+1;
    var guess = 0;
    
    for(var i = 3; i >= 1; i--){
        guess = Number(prompt('Cheshire cat "I will give you "' + i + '" tries to guess my number between 1 and 10."'))

        if (guess === number){
            alert("That is what I was thinking of.");
            return;            
        }
    }
    alert("Thank\'s for playing but you could not guess my number.")
}


catQuestion();
displayDate();
ageQuestion();