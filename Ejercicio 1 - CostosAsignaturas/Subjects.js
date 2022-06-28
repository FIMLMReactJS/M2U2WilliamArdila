// Variables
const studentName = document.getElementById("studentName");
const subjectName = document.getElementById("subjectName");
const subjectPrice = document.getElementById("subjectPrice");
const subjectList = document.getElementById("exercise-subjectList");
const buttonAdd = document.getElementById("buttonAdd");
const buttonDiscount = document.getElementById("buttonDiscount");

let subjects = [];
let prices = [];

// Validate values
function validateStudentName() {
    if(studentName.value != "" && studentName != undefined) {
        if(!(/[A-Za-z]/.test(studentName.value))) {
            alert("El nombre del estudiante no puede contener solo números");
        } else {
            return true;
        }
    } else {
        alert("Aún no ha puesto el nombre del estudiante"); 
    }
    return false;
}

function validateSubjectName() {
    if(subjectName.value != "" && subjectName != undefined) {
        if(!(/[A-Za-z]/.test(subjectName.value))) {
            alert("El nombre de la asignatura no puede contener solo números");
        } else {
            return true;
        }
    } else {
        alert("Aún no ha puesto el nombre de la asignatura"); 
    }
    return false;
}

function validateSubjectPrice() {
    if(subjectPrice.value < 0 || (subjectPrice.value == "") || (subjectPrice.value == undefined)) {
        alert("El precio de la asignatura no puede ser menor a 0");
        return false;
    } else {
        return true;
    }
}

// Calculate final price
function sumPrices() {
    let sum = 0;

    for(let i of prices) {
        sum += parseInt(i);
    }

    return sum;
}

// Button actions
buttonAdd.addEventListener("click", function(event) {
    event.preventDefault();

    if(validateStudentName() && validateSubjectName() && validateSubjectPrice()) {
        let tag = document.createElement("p");
        tag.innerHTML = subjectName.value + " ----- " + subjectPrice.value;
        subjectList.appendChild(tag);

        subjects.push(subjectName.value);
        prices.push(subjectPrice.value);

        studentName.disabled = true;
        subjectName.value = "";
        subjectPrice.value = "";
    }
})

buttonDiscount.addEventListener("click", function(event) {
    event.preventDefault();

    const fixedPrice = 28000;
    let finalPrice;

    finalPrice = (fixedPrice + sumPrices()) * 0.8;
})