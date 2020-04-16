// console.log("Am I connected?");

function ageQuestion(){
    var age = prompt("How old are you?");
    var catYears = age * 5;

    alert("If you were a cat you would be " + catYears + " old.");

    if (age > 60){
        document.write("<h5>" + "Cats are better than grandkids." + "</h5>");
    } else if (age > 30){
        document.write("<h5>" + "Cats are better than having kids." + "</h5>");
    }else{
        document.write("<h5>" + "Cats are better than parents." + "</h5>");
    }
}

ageQuestion();