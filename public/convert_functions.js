//Where to insert in in the doc
const doc_location = document.getElementById('show_result');

//Roman numbers as constants
const oneR = 'I';
const fiveR = 'V';
const tenR = 'X';
const fiftyR = 'L';
const oneHunR = 'C';
const fiveHunR = 'D';
const oneThouR = 'M';

function convertToRoman(num=document.getElementById('user_input').value) {
    //process the number's components by place
    //let dec = parseInt(numStr[0]);

    let numStr = num.toString();

    console.log('function will convert the number ' + num + ' to roman numerals');

    if(checkLength(numStr)==1){
        return oneDigit(numStr);
    }
    else if(checkLength(numStr)==2){
        return twoDigits(numStr);
    }
    else if(checkLength(numStr)==3){
        return threeDigits(numStr);
    }
    else if(checkLength(numStr)==4){
        return fourDigits(numStr);
    }  


}

//End of Main Func

//check number's amount of digits
function checkLength(na){
    return na.length;
}
//if the number is one digit, run this
function oneDigit(nb){
    let result='';
    if(nb<=3){
        for(let i=0;i<nb;i++){
            result += oneR;
        }
    }
    else if(nb==4){
        result = oneR + fiveR;
    }
    else if(nb==5){
        result = fiveR;
    }
    else if(nb<9){
        result = fiveR;
        for(let i=0;i<nb-5;i++){
            result += oneR;
        }
    }
    else if(nb=9){
        result = oneR + tenR;
    }
    return result;
}

//if it's two digits, run this
function twoDigits(nc){
    let result = '';
    if(nc<40){
        for(let i=0; i<parseInt(nc[0]); i++){
            result += tenR;
        }
    }
    else if(nc>=40 && nc<50){
        result = tenR + fiftyR;
    }
     else if(nc==50){
        result = fiftyR;
     }

     else if(nc>50&&nc<90){
         result = fiftyR;
         for(let i=0; i<nc[0]-5; i++){
             console.log('1');
            result = result + tenR;
        }
     }
     else if(nc==90){
         result = tenR + oneHunR;
     }
     else if(nc>90 && nc<100){
        result = tenR + oneHunR;
     }

     //first digit solved
     let secondDigit = nc[1];
     result += oneDigit(secondDigit);
     return result;
}

//3 digits
function threeDigits(nd){
    let result = '';
    if(nd>99 && nd<200){
        result = oneHunR;
    }
    else if(nd>=200 && nd<400){
        for(let i=0; i<nd[0]; i++){
            result = result + oneHunR;
        }
    }
    else if(nd==400){
        result = oneHunR + fiveHunR;
    }
    else if(nd<500 && nd>400){
        result = oneHunR + fiveHunR;
    }
    else if(nd<600 && nd>499){
        result = fiveHunR;
    }
    else if(nd<900 && nd>500){
        result = fiveHunR;
        for(let i=0; i<nd[0]-5;i++){
            result = result + oneHunR;
        }
    }
    else if(nd>=900){
        result = oneHunR + oneThouR;
    }

    let secondDigit = nd.slice(1,) ;
     result += twoDigits(secondDigit);
     return result;
}

//4 digits

function fourDigits(ne){
    let result='';
    if(ne<2000){
        result = oneThouR;
    }
    else if(ne>=2000 && ne<4000){
        for(let i=0; i<ne[0]; i++){
            result = result + oneThouR;
        }
    }
    else if(ne==4000){
        result = oneThouR + fiveHunR;
    }
    else if(ne<5000){
        result = oneThouR + fiveHunR;
    }
    else if(ne<6000){
        result = fiveHunR;
    }
    else if(ne<9000){
        result = fiveHunR;
        for(let i=0; i<ne[0]-5;i++){
            result = result + oneThouR;
        }
    }

    let thirdDigit = ne.slice(1,) ;
     result += threeDigits(thirdDigit);
     
     return result;
}

//to show the result of the aboce functions in the html
function showResult (){
    return doc_location.innerHTML = '<div> '+ convertToRoman() + ' </div>';
}