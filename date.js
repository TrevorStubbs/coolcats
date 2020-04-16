console.log("Am I connected?");

function displayDate(){
    var date = new Date();
    var today = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    // console.log(year);
    // document.write("<h4>" + month + "/" + today + "/" + year + "</h4>");

    document.getElementById("dateLocation").innerHTML = (month + "/" + today + "/" + year);

}

displayDate();