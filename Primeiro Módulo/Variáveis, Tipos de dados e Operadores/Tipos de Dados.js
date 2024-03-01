// Em JavaScript temos alguns tipos de dados com quais podemos trabalhar, eles se separam entre duas categorias, Primitivos e De Referência.

// Tipos de dados 'Primitivos', possuem armazenamento direto e costumam guardar o valor inteiro em si, ou seja na variável, alocando um espaço de mémoria, e caso sejam redeclarados ocupam um novo espaço.

// Dados 'Primitivos' são Imutáveis

// Tipos de dados 'Primitivos' com exemplos:

let num = 30; // Number.
let name = ("Paulo"); // String.
let VerdadeiroFalso = true; // Boolean.
let Nulo = null; // Nulo.
let Indefinido = undefined; // Indefinido.
let Simbolo = Symbol("chave"); // Simbolo.

// Dados de 'Referência' costumam guardar o endereço na memória que aponta para o local onde os dados reais estão armazenados.

// Dados de 'Referência' são Mutáveis, podem ser alterados e podem apontar pro mesmo espaço da memória, eles possuem tipos dinâmicos e podem ser alterados durante a execução do programa.

// Tipos de dados de 'Refereência' com exemplos:

let pessoa = {
    nome: ("Maria"),
    anos: 18, 
} // Objeto

// Objeto é uma coleção de pares chave-valor, onde cada chave é uma 'String' e cada valor pode ser qualquer tipo de dado, incluindo 'Objetos', 'Arrays', 'Funções', 'Números', 'Strings', 'Booleanos' e assim por diante.



let listNum = [1, 7, 9, 4, 7]; // Array

let funcao = function () {
}; // Função


// Dados de 'Primitivos' tem tipos fixos, enquanto os de 'Referência' tem tipos dinâmicos.

// Pode se ter um 'Array' dentro de um 'Objeto' e vice-versa.

