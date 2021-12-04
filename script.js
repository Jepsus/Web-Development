//read number1, operator and number2 from HTML page
function getValuesFromCalculator123(){
    let number1 = parseInt (document.getElementById("number1").value);
    let number2 = parseInt (document.getElementById("number2").value);
    let operator = (document.getElementById("operator").value);

    //alert("read values: " + number1 + operator + number2);
    let returnvalue = calculate(number1,operator,number2);

    document.getElementById("result").innerHTML=returnvalue;
}

//This function for calculator with radio buttons
function getValuesFromCalculator2() {
    let number1 = parseInt (document.getElementById("number1").value);
    let number2 = parseInt (document.getElementById("number2").value);
    var ans = "xxx";
    

    if (document.getElementById("+").checked) {
        ans = calculate(number1, '+', number2);
    }
    if (document.getElementById("-").checked) {
        ans = calculate(number1, '-', number2);
    }
    if (document.getElementById("*").checked) {
        ans = calculate(number1, '*', number2);
    }
    if (document.getElementById("/").checked) {
        ans = calculate(number1, '/', number2);       
    }
    document.getElementById("result").value=ans;
    
    

}

function calculate(numberX, operator, numberY){
    let returnvalue = 0;
    switch (operator){
        case "+":
            returnvalue= numberX+numberY;
            break;
        case "-":
            returnvalue=numberX-numberY;
            break;
        case "*":
            returnvalue=numberX*numberY;
            break;
        case "/":
            returnvalue=numberX/numberY;
            break;
    }
    return returnvalue;

}