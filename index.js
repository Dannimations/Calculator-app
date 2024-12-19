const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Error';
    }
}

document.getElementById('theme1').addEventListener("click", function(){
    document.body.className = 'theme1'
})

document.getElementById('theme2').addEventListener("click", function(){
    document.body.className = 'theme2'
})

document.getElementById('theme3').addEventListener("click", function(){
    document.body.className = 'theme3'
})