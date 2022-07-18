"use strict"
// 1 - PSEUDO CODE --------------------

// Objectif ---
// La page calculatrice contient un formulaire avec une sélection déroulante qui nous permettra de choisir le signe de l’opération (addition, soustraction, multiplication, division)
// Ces informations sont transmises et ensuite calculées
// Dans une alerte: l’opération saisie suivie du signe égal et du résultat

// Solution --- 

// Futurs problèmes ---

// Outils ---



// 2 - CODE --------------------

// Cibler les éléments nécessaires
let input1 = document.querySelector('#number1');
let input2 = document.querySelector('#number2');
let number1 = 0;
let number2 = 0;
let CTA = document.querySelector('button');
let result = 0;
let select = document.querySelector('select');
let operateur = "+";

// Récupérer les valeurs
input1.addEventListener('input', () => {
    number1 = Number(input1.value);
});

input2.addEventListener('input', () => {
    number2 = Number(input2.value);
});

// Définir les fonctions d'opérations
function somme(a,b) {
    result = a + b;
    return result;
}

function difference(a,b) {
    result = a - b;
    return result;
}

function produit(a,b) {
    result = a * b;
    return result;
}

function quotient(a,b) {
    result = a / b;
    return result;
}

// // Récupérer l'opération au change du select
select.addEventListener('change', () => {
    operateur = select.value;
});

// Définir le calcul au clic du bouton
CTA.addEventListener('click', () => {
    if (operateur == "+") {
        somme(number1,number2);
        alert(`${number1} + ${number2} = ${result}`);
    }
    if (operateur == "-") {
        difference(number1,number2);
        alert(`${number1} - ${number2} = ${result}`);
    }
    if (operateur == "*") {
    produit(number1,number2);
    alert(`${number1} * ${number2} = ${result}`);
    }
    if (operateur == "/") {
    quotient(number1,number2);
    alert(`${number1} / ${number2} = ${result}`);
    }
});