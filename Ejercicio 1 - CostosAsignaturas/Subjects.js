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

// Load data in the new page
function loadData(priceDiscount) {
    const exerciseArticle = document.getElementById("exercise");
    exerciseArticle.remove();


    let tag = document.createElement("p");
    tag.innerHTML = "Descuento: <strong> 20% </strong> <br> Precio de la papeleria: <strong> 20000 </strong> <br> Precio del carnet: <strong> 8000 </strong>";
    tag.style.marginTop = "6%";
    tag.style.lineHeight = "60px";

    document.getElementById("answer").style.visibility = "visible";
    document.getElementById("answer").appendChild(tag);
    document.getElementById("answer-studentName").textContent = studentName.value;

    createTable(priceDiscount);
}


function createTable(priceDiscount) {
    let table = document.getElementById("answer-subjectTable")
    const th1 = document.getElementById("th1");
    const th2 = document.getElementById("th2");
    th1.innerHTML = "Asignatura";
    th2.innerHTML = "Precio";

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

    cellDiscount.innerHTML = "<strong>El precio total con el descuento es: " + priceDiscount + "</strong>";
} 

// Button actions
buttonAdd.addEventListener("click", function(event) {
    event.preventDefault();

    if(validateStudentName() && validateSubjectName() && validateSubjectPrice()) {
        let section = document.createElement("section");
        let tagP1 = document.createElement("p");
        let tagP2 = document.createElement("p");
        tagP1.innerHTML = "<strong>" + subjectName.value + "</strong>";
        tagP2.innerHTML = subjectPrice.value;

        section.style.width = "100%";
        section.style.marginTop = "2%";
        section.style.paddingTop = "1%";
        section.style.borderTop = "2px solid #6D1E1E";
        section.style.display = "flex"
        section.style.justifyContent = "space-around"

        section.appendChild(tagP1);
        section.appendChild(tagP2)
        subjectList.appendChild(section);

        subjects.push(subjectName.value);
        prices.push(subjectPrice.value);

        studentName.disabled = true;
        subjectName.value = "";
        subjectPrice.value = "";

        studentName.style.borderColor = "transparent";
        studentName.style.backgroundColor = "#3A3A3A";
        studentName.style.color = "#FFFFFF";
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