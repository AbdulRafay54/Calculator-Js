function clearScreen(){
    document.getElementById("result") .value="";

}
function display(value){
    document.getElementById("result") .value += value;
}
function calculate() {
   let calculator = document.getElementById("result").value;
    let sum = eval(calculator);
    document.getElementById("result").value = sum;
}

        
            
