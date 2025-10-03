    function generateRandomNumber(min, max) {
        let number = Math.floor(Math.random() * (max - min + 1)) + min;
        return number;
    }
    //Asociar tag con una variable en JS
let labelnum1 = document.getElementById("num1");
labelnum1.innerHTML = generateRandomNumber(0,9);
console.log(labelnum1);

let labelnum2 = document.getElementById("num2");
labelnum2.innerHTML = generateRandomNumber(0,9);
console.log(labelnum2);

let labelanswer = document.getElementById("answer");
labelanswer = parseInt(labelnum1.innerHTML) + parseInt(labelnum2.innerHTML);
console.log(labelanswer);

        // Definicion de variables
        let name = "Daniel";
        let last_name = "Cortes";

        console.log("Nombres: " + name);
        console.log("Apellidos: " + last_name);
        let numA = 5;
        let numB = 10;
        let sum = numA + numB;
        console.log("Suma: " + sum);