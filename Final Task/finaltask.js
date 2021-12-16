
 function lastSign(){
    let birthday2 = String(document.getElementById("birthday2").value);
    let loppuosa2 = document.getElementById("loppuosa2").value;
    let operator2 = document.getElementById("operator2").value;
    let lastsign2 = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y"]
    let tarkastusmerkkisumma = birthday2.concat(loppuosa2);
    let remainder2 = tarkastusmerkkisumma%31;
    let valueAtIndex2 = lastsign2[remainder2];
    return document.getElementById("result2").innerHTML=birthday2.concat(operator2+loppuosa2+valueAtIndex2);
    }
function calculateAge(userBirthday){
    let today = new Date();
    let timeDifference = today.getTime()-userBirthday.getTime();
    let daysDiffrenece = timeDifference/(1000*3600*24);
    let yearsAge = daysDiffrenece/365.25
    let monthsAge = (yearsAge-parseInt(yearsAge))*12;
    let timeMonth = parseInt(monthsAge);
    let daysAge = (monthsAge-parseInt(monthsAge))*30.4375;
         return document.getElementById("age").innerHTML=( "Days :" + daysDiffrenece + " Years : " + parseInt(yearsAge));
    }
    
    
 function chechkingCorectness(){
    
    let identitynumber = document.getElementById("birthday").value+document.getElementById("operator").value+document.getElementById("loppuosa").value;
    let birthday = String(document.getElementById("birthday").value);
    let day = parseInt(birthday.substring(0,2));
    let month = parseInt(birthday.substring(2,4));
    let year = parseInt(birthday.substring(4,6));
    let operator = document.getElementById("operator").value;
    let loppuosa = String(document.getElementById("loppuosa").value);
    let loppuosa1 = parseInt(loppuosa.substring(0,3));
    let tarkistusmerkki = parseInt(loppuosa.substring(3,4));
    let yearofbirth1 = convertYear();
    let sexcheck = sexCheck()
    document.getElementById("sex").innerHTML= sexcheck;
    let userBirthday = new Date(month + "." + day + "." + yearofbirth1)
    document.getElementById("result").innerHTML=" Your birthday/ Olet syntynyt :" + userBirthday;
    let age = calculateAge(userBirthday);
    let loppuosacheck = loppuOsaCheck();
    
    
 

    if(year < 0 || year > 99 || month == 0 || month > 12){
        return document.getElementById("result").innerHTML="Month or Year of birth incorrect format / Syntymäkuukausi tai Syntymävuosi on ilmoitettu väärin";
    }
    if(birthday.length !==6){
        return document.getElementById("result").innerHTML="Personal Identity Code Date format is incorrect ! Henkilötunnuksen etuosa väärässä muodossa !";
    }
    

    
 function loppuOsaCheck(){
    let tarkistusnumero = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y"]
    let tarkistusnumerosumma = parseInt(birthday + loppuosa1)
    let remainder = tarkistusnumerosumma%31;
    let valueAtIndex = tarkistusnumero[remainder];
    let tarkistusnumero2 = (loppuosa.substring(3,4).toLocaleUpperCase());
    if (String(valueAtIndex)===tarkistusnumero2){
       return document.getElementById("checksign").innerHTML="Identity code is in correct format";
    }
       else{return document.getElementById("checksign").innerHTML="Check your input";
    }
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
}



