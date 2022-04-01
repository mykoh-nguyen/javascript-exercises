const palindromes = function (string) {
    let backwards = "";
    let newString = ""
    for(i = string.length-1 ;i >= 0; i--){
        if(!!string[i].match(/[.,;!?\s]/) == true){
            continue;
        }
        else{
        backwards+=string[i].toLowerCase();
        }
    }
    for( x = 0 ; x < string.length;x++){
        if(!!string[x].match(/[.,;!?\s]/) == true){
            continue;
        }
        else{
        newString+=string[x].toLowerCase();
        }
    }
    return(newString == backwards ? true : false);

};

// Do not edit below this line
module.exports = palindromes;
