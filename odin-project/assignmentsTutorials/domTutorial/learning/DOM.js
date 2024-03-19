let btn = document.querySelector('#btn');

btn.addEventListener('click', function(event) {
    console.log('The button was clicked! 1');
    event.stopPropagation();
});

document.body.addEventListener('click',function(event) {
    console.log('The body was clicked! 2');
});