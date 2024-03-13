const removeFromArray = function(array,...args) {

    // Method1 (Mine)
    // for(let i = 0 ; i < args.length ; i++){
    //     for(let j = array.length - 1 ; j >= 0 ; j--){
    //         if(array[j] === args[i]){
    //             array.splice(j,1);
    //         }
    //     }
    // }

    // return array;

    // Method 2
    // const newArray = [];

    // array.forEach((item) => {
    //     if(!args.includes(item)){
    //         newArray.push(item);
    //     }
    // });

    // return newArray;

    // Method 3
    return array.filter((values) => !args.includes(values));
};

// Do not edit below this line
module.exports = removeFromArray;
