/*
Programação para internet - aula 06/05
   - Introdução ao Javascript 
*/
//
console.log("Welcome to ppi");

//Variáveis
let name = "João";
let age = 17;
let isStudent = true;

const PI = 3.14; //Não pode mudar o valor
console.log(PI);

// Operadores Aritméticos + - / * ** %
let x = 5 + 5; //soma
let y = "5" + 5; // concatenação
let z = "hello" + 5;

console.log(x, y, z);
console.log(typeof x);

//Ativar formatador prettier (alt + shift + f)

// Operadores relacionais > < >= <= != === !==

console.log(5 != "5"); //diferença
console.log(5 == "5"); //comparação valor
console.log("5" == 5); //comparação de valor ou tipo
console.log("5" === 5); //comparação de valor e tipo

// Operadores de incremento

x = x++;
console.log(x);

x = ++x;
console.log(x);

// ++x; operador unário de conversão para número
// x += 1;
// x = x + 1;

// Operadores lógicos && ||(AND) !(NOT) E (OR)
let expressao1 = (true && 5 + 2 * 3 < 10) || false; // true
console.log(expressao1);
//

// // if...else
//     if (condition) {

//     } else {

//     }

// Template Strings
let text = `React é tudo de bom
programar é minha vida
eu amo javascript`;
console.log(text);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// Arrays
let frutas = ["maçã", "banana", "laranja", "manga"];

console.log(frutas.length); // Tamanho do array

console.log(frutas[0]); // Acessar o primeiro elemento
console.log(frutas[1]); // Acessar o segundo elemento
console.log(frutas[2]); // Acessar o terceiro elemento
console.log(frutas[3]); // Acessar o quarto elemento

frutas.push("Kiwi"); // Adicionar um elemento ao final do array
console.log(frutas);

console.log(frutas.pop()); // Remove o último elemento do array
console.log(frutas);

console.log(frutas.shift()); // Remove o primeiro elemento do array
console.log(frutas);

frutas.unshift("Limão"); // Adiciona um elemento no início do array
console.log(frutas);

// Argumento 1 - posição onde o elemento será adicionado
// Argumento 2 - número de elementos a serem removidos a partir da posição
// Argumento 3 - elemento a ser adicionado

frutas.splice(2, 0, "Kiwi"); // Adiciona um elemento na posição 2 sem remover nenhum elemento
console.log(frutas);

frutas.push("Kiwi"); // Adicionar um elemento ao final do array
console.log(frutas);

console.log(frutas.pop()); // Remove o último elemento do array
console.log(frutas);

console.log(frutas.shift()); // Remove o primeiro elemento do array
console.log(frutas);

frutas.unshift("Limão"); // Adiciona um elemento no início do array
console.log(frutas);

// Argumento 1 - posição onde o elemento será adicionado
// Argumento 2 - número de elementos a serem removidos a partir da posição
// Argumento 3 - elemento a ser adicionado
frutas.splice(2, 0, "Kiwi", "Bluberry"); // Adiciona um elemento na posição 2 sem remover nenhum elemento
console.log(frutas);

frutas.splice(2, 1); // Remove o elemento na posição 2
console.log(frutas);

frutas.splice(0, 1, "Goiaba"); // Remove o elemento na posição 0 e adiciona 'Goiaba'
console.log(frutas);

// Retorna o índice do elemento 'Kiwi' no array
let index = frutas.indexOf("Kiwi");
console.log(index);

frutas.splice(index, 1, "Maça"); // Remove o elemento 'Kiwi' do array
console.log(frutas);

// Altera o array original
// Ordem Crescente
frutas.sort(); //toSorted ()
console.log(frutas);

// Ordem decescente
frutas.reverse();
console.log(frutas);

//Não altera o ARRAY original
let frutasOrdenadas = frutas.toSorted();
console.log(frutas);
console.log(frutasOrdenadas);

let frutasReversas = frutas.toReversed();
console.log(frutas);
console.log(frutasReversas);

const numbers = [45, 4, 9, 16, 25];
console.log(numbers);

// Desafio - Criar um array 'numeros2' que dupliquem os valores de 'numeros' usando for
// O  output: [90, 8, 18, 32, 50]

const numbers2 = [];
for (let i = 0; i < numbers2.length; ++i) {
  numbers2.push(numbers[i] * 2);
}
console.log(numbers);
console.log(numbers2);

function myFunction(value, index, array) {
  return value * 2;
}

const numbersMap = numbers.map(myFunction);
console.log(numbersMap);

console.log(numbers.map((numbers) => numbers * 2));

console.log(numbers.toSorted((a, b) => a - b)); //C
console.log(numbers.toSorted((a, b) => b - a)); //D

numbers.sort((a, b) => a - b); //maior valor

console.log("Maior =", numbers[numbers.length - 1]); //menor valor

console.log("Menor =", numbers[0]);
console.log("Menor =", numbers[0]);

// **********************************
// Aula 13/05 - Funções, array destructuring, spread operator
console.log(frutas);

const frutas2 = ["Kiwi", "Avocado"];
console.log([...frutas2, "Grape"]);

// Spread - ...
const frutas3 = [...frutas, ...frutas2];
console.log(frutas3);

// DESAFIO - Exibir todas as frutas que comecem
// com a letra A
const out = [];
const letra = "a";

// for (let i = 0; i < frutas3.length; i++) {
//   const fruit = frutas3[i];
//   //toLowerCase - minúscula, toUpperCase - maiúscula
//   if (fruit[0].toLowerCase() === letra) {
//     out.push(fruit);
//   }
// }

// frutas3.map((fruit) => {
//   if (fruit[0].toLowerCase() === letra) {
//     out.push(fruit);
//   }
// });

// find - retorna a primeira ocorrência,
// de acordo com a condição
let outFind = frutas3.find((fruit) => fruit[0].toLowerCase() === letra);
console.log(outFind);

// filter - retorna TODAS as ocorrências,
// de acordo com a condição
let outFilter = frutas3.filter((fruit) => fruit[0].toLowerCase() === letra);
console.log(outFilter);

// DESAFIO - Exibir o valor da soma de todos os
// números do array 'numbers'

console.log(numbers);

// map
let soma = 0;
numbers.map((number) => {
  soma += number;
});
console.log(soma);

// reduce
console.log(numbers.reduce((soma, number) => soma + number));

// Object
const pessoa = {
  nome: "Zé Vaqueiro",
  idade: 25,
  profissao: "Cantor/Compositor",
};

console.log(pessoa.nome);
console.log(pessoa["nome"]);

console.log(pessoa["nome"]);
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));

const pessoa2 = { ...pessoa, hobby: "Vaquejada" };
console.log(pessoa2);

// Atribuição por desestruturação
const { nome, idade } = pessoa2;
console.log(nome, idade);

// Construtor - Protótipo de Objeto
function Product(name, sto, ram, price, qty, category) {
  this.name = name;
  this.sto = sto;
  this.ram = ram;
  this.price = price;
  this.qty = qty;
  this.category = category;
}

const p1 = new Product("iPhone", 256, 16, 5000, 10, "Celular");
const p2 = new Product("iPad", 512, 16, 8000, 20, "Tablet");
const p3 = new Product("Macbook", 1024, 24, 15000, 30, "Notebook");
const p4 = new Product("iPhone Pro Max", 256, 16, 7000, 15, "Celular");
const p5 = new Product("iPad Pro", 512, 16, 10000, 25, "Tablet");
const p6 = new Product("Macbook Pro", 1024, 24, 25000, 35, "Notebook");

const estoque = [p1, p2, p3, p4, p5, p6];
console.log(estoque);

/* DESAFIO 1

  a) Valor total de todos os produtos em estoque
  b) Ordene os produtos por nome (crescente/descrescente)
  c) Ordene os produtos por preço (crescente/descrescente)
  d) Filtre produtos de acordo uma categoria

*/

//a)//

let total = 0;

estoque.map((produto) => {
  total += produto.price * produto.qty;
});
console.log(total);

// b) Ordene os produtos por nome (crescente/descrescente)

// crescente
console.log("Crescente");
console.log(estoque.toSorted((a, b) => a.name.localeCompare(b.name)));

// decrescente
console.log("Decrescente");
console.log(estoque.toSorted((a, b) => b.name.localeCompare(a.name)));

// c) Ordene os produtos por preço (crescente/descrescente)

// crescente
console.log("Crescente");
console.log(estoque.toSorted((a, b) => a.price - b.price));

// decrescente
console.log("Decrescente");
console.log(estoque.toSorted((a, b) => b.price - a.price));

//d) Filtre produtos de acordo uma categoria

// celular
console.log("Celulares");
const celulares = estoque.filter((Product) => Product.category === "Celular");

console.log(celulares);

// notebook
console.log("Notebook");
const Notebook = estoque.filter((Product) => Product.category === "Notebook");
console.log(Notebook);
