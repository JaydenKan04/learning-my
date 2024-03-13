const repeatString = function(string, num) {
    let newString = "";

    if(num < 0){
        return "ERROR";
    }

    for(let i = 0 ; i < num ; i++){
        newString += string;
    }

    return newString;
};

// Do not edit below this line
module.exports = repeatString;
