function clearScreen(){
    document.getElementById('result').value ="";
}

function display(value){
    document.getElementById('result').value += value;
}

function calculate(){
    var nice = document.getElementById('result').value
    var yeah = eval(nice);
    document.getElementById('result').value = yeah;
}