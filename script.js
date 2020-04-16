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
    var age = prompt("How old are you?");
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

displayDate();
ageQuestion();