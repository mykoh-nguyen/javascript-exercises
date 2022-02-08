const removeFromArray = function() {
    var tempArr = arguments[0];
    var removeArr= [];
    for(var i = 1; i < arguments.length; i ++){
        removeArr.push(arguments[i]);
    }
    for(var x= 0; x < removeArr.length;x++){
        for(var y = 0; y <tempArr.length;y++){
            if(removeArr[x] == tempArr[y] && typeof(removeArr[x])==typeof(tempArr[y])){
                tempArr.splice([y],1)
            }
        }
    }
    return tempArr;

};

// Do not edit below this line
module.exports = removeFromArray;

