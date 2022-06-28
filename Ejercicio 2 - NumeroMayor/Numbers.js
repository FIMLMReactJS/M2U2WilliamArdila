// Variables
const a = document.getElementById("number1");
const b = document.getElementById("number2");
const c = document.getElementById("number3");
const d = document.getElementById("number4");
const answerMinor = document.getElementById("answer-minor");
const answerMayor = document.getElementById("answer-mayor");
const buttonCalculate = document.getElementById("buttonCalculate");
const buttonReset = document.getElementById("buttonReset");

let minor;
let mayor;

// Button actions
buttonCalculate.addEventListener("click", function(event) {
    event.preventDefault();

    if((a.value.length == 0) || (b.value.length == 0) || (c.value.length == 0) || (d.value.length == 0)) {
        alert("Aún no ha puesto todos los números");
    } else {
        if((a.value == b.value) || (a.value == c.value) || (a.value == d.value)) {
            alert("Los números no pueden ser iguales");
        } else if((b.value == c.value) || (b.value == d.value)) {
            alert("Los números no pueden ser iguales");
        } else if(c.value == d.value) {
            alert("Los números no pueden ser iguales");
        } else {
            minor = Math.min(a.value, b.value, c.value, d.value);
            answerMinor.textContent = "El número menor es: " + minor; 
    
            mayor = Math.max(a.value, b.value, c.value, d.value);
            answerMayor.textContent = "El número mayor es: " + mayor; 
        }
    } 
})

buttonReset.addEventListener("click", function(event) {
    event.preventDefault();

    a.value = "";
    b.value = "";
    c.value = "";
    d.value = "";
})