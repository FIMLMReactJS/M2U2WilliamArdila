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
            answerMinor.innerHTML = "El número <strong> menor </strong> es: " + minor; 
    
            mayor = Math.max(a.value, b.value, c.value, d.value);
            answerMayor.innerHTML = "El número <strong> mayor </strong> es: " + mayor; 

            if((a.value == minor) || (a.value == mayor)) {
                if(minor == a.value) {
                    a.style.borderColor = "#506A91";
                } else if(mayor == a.value) {
                    a.style.borderColor = "#E6C638";
                } 
            } else {
                a.style.borderColor = "#000000";
            }

            if((b.value == minor) || (b.value == mayor)) {
                if(minor == b.value) {
                    b.style.borderColor = "#506A91";
                } else if(mayor == b.value) {
                    b.style.borderColor = "#E6C638";
                } 
            } else {
                b.style.borderColor = "#000000";
            }

            if((c.value == minor) || (c.value == mayor)) {
                if(minor == c.value) {
                    c.style.borderColor = "#506A91";
                } else if(mayor == c.value) {
                    c.style.borderColor = "#E6C638";
                } 
            } else {
                c.style.borderColor = "#000000";
            }

            if((d.value == minor) || (d.value == mayor)) {
                if(minor == d.value) {
                    d.style.borderColor = "#506A91";
                } else if(mayor == d.value) {
                    d.style.borderColor = "#E6C638";
                } 
            } else {
                d.style.borderColor = "#000000";
            }
        }
    } 
})

buttonReset.addEventListener("click", function(event) {
    event.preventDefault();

    a.value = "";
    b.value = "";
    c.value = "";
    d.value = "";
    answerMinor.textContent = ""
    answerMayor.textContent = ""
})