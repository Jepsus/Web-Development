function chechkingCorectness(){
    
    let identitynumber = document.getElementById("Birthday").value+document.getElementById("operator").value+document.getElementById("loppuosa").value;
    let birthday = String(document.getElementById("Birthday").value);
    let day = parseInt(birthday.substring(0,2));
    let month = parseInt(birthday.substring(2,4));
    let year = parseInt(birthday.substring(4,6));
    let operator = document.getElementById("operator").value;
    let loppuosa = String(document.getElementById("loppuosa").value);
    let loppuosa1 = parseInt(loppuosa.substring(0,3));
    let tarkistusnumero = parseInt(loppuosa.substring(3,4));
    let yearofbirth1 = convertYear();
    let sexcheck = sexCheck()
    document.getElementById("sex").innerHTML= sexcheck;
    let userBirthday = new Date(month + "." + day + "." + yearofbirth1)
    document.getElementById("result").innerHTML=" Your birthday/ Olet syntynyt :" + userBirthday;
    let age = calculateAge();
 
    

    
    
    if(year < 0 || year > 99 || month == 0 || month > 12){
        return document.getElementById("result").innerHTML="Month or Year of birth incorrect format / Syntymäkuukausi tai Syntymävuosi on ilmoitettu väärin";
    }
    if(birthday.length !==6){
        return document.getElementById("result").innerHTML="Personal Identity Code Date format is incorrect ! Henkilötunnuksen etuosa väärässä muodossa !";
    }


function convertYear(){
    
    let yearofbirth = 0;
    switch (operator){
        case "-":
            yearofbirth = 1900+year;
            break;
        case "+":
            yearofbirth = 1800+year;
            break;
        case "A":
            yearofbirth = 2000+year;
            break;}
            return yearofbirth;
     
    //let monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    
    //if(yearofbirth % 400 == 0 || (yearofbirth % 100 != 0 && yearofbirth % 4 == 0)){
    
    //monthLength[1] = 29;

    //if(monthLength[1] = 29)
    //return monthLength;
    }
    
 
}
function sexCheck(){

 let loppuosa2 = String(document.getElementById("loppuosa").value);
 let sex = parseInt(loppuosa2.substring(0,3));

 if(sex % 2 == 0){
    return(" Female / Nainen ");
  } else {
    return(" Male / Mies ");
  }

}
function calculateAge(){
   
    let today = new Date()
    let timeDifference = today.getTime()-userBirthday.getTime();
    let daysDiffrenece = timeDifference/(1000*3600*24);
    let yearsAge = daysDiffrenece/365.25
    let monthsAge = (yearsAge-parseInt(yearsAge))*12;
    let timeMonth = parseInt(monthsAge);
    let daysAge = (monthsAge-parseInt(monthsAge))*30.4375;

    return document.getElementById("age").innerHTML=(daysDiffrenece + "Days" + parseInt(yearsAge)+" Years");
}


function chekingLoppuosa(){
    
    let birthday = String(document.getElementById("Birthday2").value);
    let day = parseInt(birthday.substring(0,2));
    let month = parseInt(birthday.substring(2,4));
    let year = parseInt(birthday.substring(4,6));
    let loppuosa = String(document.getElementById("loppuosa2").value);
    let loppuosa1 = parseInt(loppuosa.substring(0,3));
    let lastsign = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y"]

}





