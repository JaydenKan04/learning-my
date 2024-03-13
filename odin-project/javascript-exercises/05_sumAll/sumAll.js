const sumAll = function(start,end) {
    
    //Check if negative, array, string
    if(start < 0 || Array.isArray(end) === true || typeof end === 'string'){
        return "ERROR";
    }

    //Base Case
    if(end === start){
        return end;
    }

    //if start > end, then change place
    if(start > end){
        const temporary = end;
        end = start;
        start = temporary;
    }

    //Using recursive 
    return end + sumAll(start,end-1);
};

// Do not edit below this line
module.exports = sumAll;
