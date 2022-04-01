const fibonacci = function(a) {
    if(a < 0){
        return "OOPS"
    }
    let newArr = [];

    for(i = 0 ; i <a ; i++){
        if(i ==0){
            newArr.push(1)
        }
        else if(newArr[i-2] == null){
            newArr.push(newArr[i-1]);
        }
        else{
            newArr.push(newArr[i-1] + newArr[i-2]);
        }
    }
    return newArr[a-1];

};

// Do not edit below this line
module.exports = fibonacci;
