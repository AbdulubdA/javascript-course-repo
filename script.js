var offset = 0;

function printSelection(){
var firstVariable = document.getElementsByName("timezone");
var secondVariable = "bst";
for(let i = 0; i < firstVariable.length; i++){
if(firstVariable[i].checked == true){

secondVariable = firstVariable[i].value;

}
}

if(secondVariable === "est"){offset = -5;}
else if(secondVariable === "cst"){offset = -6;}
else if(secondVariable === "mst"){offset = -7;}
else if(secondVariable === "pst"){offset = -8;}
else if(secondVariable === "ast"){offset = -4;}
else if(secondVariable === "hast"){offset = -11;}
else if(secondVariable === "bst"){offset = 0;}

}

function printClock(){

var dateVariable = new Date();
var hours = dateVariable.getHours() + offset;
var minutes = dateVariable.getMinutes();
var seconds = dateVariable.getSeconds();
var session = "AM";

}

printClock();