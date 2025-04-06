const displayResult = document.getElementById("display");


function numberToDisplay(result){
         displayResult.value += result; 
}

function clearBtn(){
    displayResult.value = ""; 
}

function resultToDisplay(){
     try{
        displayResult.value = eval(displayResult.value);
     }

     catch(error){
        displayResult.value = "Error input"
     }
}
