//Q1
function add7(x){
    return x + 7;
}

console.log(add7(6));

//Q2
function multiply(x, y){
    return x*y;
}

//Q3
function capitalize(x){
    return x.charAt(0).toUpperCase() + x.slice(1);
}

console.log(capitalize("lmao"));

//Q4
let lastLetter = (x) => {
    return x.charAt(x.length - 1);
}

console.log(lastLetter("hello"));