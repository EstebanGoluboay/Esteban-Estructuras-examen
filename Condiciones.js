
// Explicar que son Variables (var, let, const,...)

// Explicar que son Conditional Structures. (If, Else If, Else, Switch)

// Explicar que son Loop Structures. (For, While, Do While)

// Explicar con claridad cada paso del siguiente algoritmo.

let altura = 5;
let arbol = '';

for(let i = 0; i < altura; i++) {
   
    let espacios = ' '.repeat(altura - i - 1);


    let ramas = '*'.repeat(2 * i + 1);


    arbol += espacios + ramas + '\n';
}


let tronco = ' '.repeat(altura - 1) + '|';


arbol += tronco;

console.log(arbol);



function renombrar() {
    for (var i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}



