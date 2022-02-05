const repeatString = function(string,amount) {
    if(amount < 0){
        return "ERROR";
    }
    let newString = "";
    for(let i = 0; i < amount; i++){
        newString +=string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
