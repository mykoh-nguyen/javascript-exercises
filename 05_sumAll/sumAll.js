const sumAll = function(num1,num2) {
    var sum = 0;
    if(num1 < 0 || num2 < 0){
        return "ERROR";
    }
    if(typeof num1 && typeof num2 != "number"){
        return "ERROR";
    }
    if(num1 < num2){
        for(var i = num1; i <= num2;i++){
            sum+=i
        }
    }
    else if(num1 >num2){
        for(var x = num2; x <= num1;x++){
            sum+=x
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;




