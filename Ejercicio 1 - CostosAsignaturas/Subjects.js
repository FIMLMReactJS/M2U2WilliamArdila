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

// Calculate subject prices
function sumPrices() {
    let sum = 0;

    for(let i of prices) {
        sum += parseInt(i);
    }

    return sum;
}

// Load the next page
function loadPage() {
    window.location.assign("Discount.html");
}

// Load data in the new page
function loadData(priceDiscount) {
    const exerciseArticle = document.getElementById("exercise");
    exerciseArticle.remove();

    let tag = document.createElement("p");
    tag.innerHTML = "Precio de la papeleria: 20000 <br> Precio del carnet: 8000";
    document.getElementById("answer").appendChild(tag);

    // Create table
    let table = document.getElementById("subjectTable")
    tableCaption = table.createCaption();
    tableCaption.innerHTML = studentName.value;

    const th1 = document.getElementById("th1");
    const th2 = document.getElementById("th2");
    th1.innerHTML = "Asignatura";
    th2.innerHTML = "Precio"

    for(let i = 0; i < subjects.length; i++) {
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        cell1.innerHTML = subjects[i];
        cell2.innerHTML = prices[i];
    }

    let rowDiscount = table.insertRow(-1);
    let cellDiscount = rowDiscount.insertCell(0);
    cellDiscount.colSpan = 2;

    cellDiscount.innerHTML = "El precio total con el descuento es: " + priceDiscount;
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

    if(subjects.length > 0) {
        const fixedPrice = 28000;
        let finalPrice;

        finalPrice = (fixedPrice + sumPrices()) * 0.8;
        finalPrice = finalPrice.toFixed();

        loadData(finalPrice);
    } else {
        alert("Aún no ha matriculado ninguna asignatura");
    }
})