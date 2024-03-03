// 'Os Operadores Aritméticos' tem suas funções bem claras, e vamos explicar quais são os que existem.

// '+' (Adição): Realiza Adição de dois operandos
{
let num1 = 2;
let num2 = 8;

let soma = num1 + num2;
console.log(soma);
console.log(num1+num2); // Também pode ser feita assim.
}

// '-' (Subtração): Subtrai o operando direito do operando esquerdo.

{
let num1= 300;
let num2= 240;

let sub = num1 - num2;
console.log(sub);
console.log(num1-num2); // Também pode ser feita assim.
}

// '*' (Multiplicação): Multiplica dois operandos.
{
let num1 = 23; let num2= 40;
console.log(num1*num2);
}

// '/' (Divisão): Divide o operando esquerdo pelo operando direito.
{
let num1 = 400; let num2 = 800;
console.log (num1/num2);
}

// '%' (Módulo/Resto): Retorna o Resto da divisão do operando esquerdo pelo operando direito.

{
let num1 = 10; let num2 = 1;
let resto = num1 % num2;
console.log(resto);
console.log(num1%num2); // Também pode ser feita assim.
}


// Agora temos alguns exemplos de como juntar esses operadores.

{
let num1 = 10;
let num2= 30;

let resp = (num1 + num2)*40; // A ação que está entre parenteses é executada primeiro, logo num1 + num2 e em seguida o resultado que será multiplicado por 40.
let resp2 = num1 + num2 * 40; // Nesse caso a multiplicação será feita primeiro e depois a soma, seguindo a regra da matemática.

console.log (resp, resp2);
}

// Cálculo de Temperatura Celsius para Fahrenheit.

{
let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;

console.log(fahrenheit);
}

// Em seguida temos os operadores de atribuição, e temos duas vertentes deles

// '='(Atribuição simples): Atribui o valor do operando direito ao operando esquerdo.

{
let valor = 10;
let Outrovalor;
Outrovalor = valor; // Outrovalor passa a ter valor : 10
console.log(Outrovalor);
}

//'+=', '-=', '*=', '/='(Atribuição composta): Realiza a operação indicada e atribui o resultado ao operando esquerdo.

// A atribuição composta com operadores é uma forma abreviada de realizar uma operação aritmética ou de concatenação em uma variável e, ao mesmo tempo, atribuir o resultado de volta à mesma variável. 

//'+=' Atribuição Composta (Adição)

{
let num1 = 5;
let num2 = 2;
 num1 += num2; // Mesma coisa que num1 = num1 + num2
 console.log(num1);
}

//'-=' Atribuição Composta (Subtração)

{
let total = 10;
total -= 7; // Equivalente a total = total - 7
console.log(total)
}

//'*=' Atribuição Composta (Multiplicação)

{
let valor = 5
let Outrovalor = 70

valor *= Outrovalor; // Equivalente a valor = valor * Outrovalor

console.log(valor)
}

//'/=' Atribuição Composta (Divisão)

{
let dividendo = 20;
let divisor = 4;

dividendo /= divisor; // Equivalente a dividendo = dividendo / divisor
console.log(dividendo);
}

// '""=' Atribuição composta (Concatenção)
{
let nome = ("Marcus");
let sobrenome = ("Vinicius");

nome +=" " + sobrenome; // Equivalente a nome = nome + " " + sobrenome
console.log(nome);
}

//'%=' Atribuição Composta (Modulus)

{
let numero = 10;
numero %= 3; // Equivalente a numero = numero % 3

console.log(numero);
}

{
let repet = 3
do{
    console.log(repet);
    repet--}
while(repet>0);

}

{
let neg = 10;
let pos = -neg;
console.log(pos);
}

// Operadores de Comparação.

// '==' Verifica se dois valores são iguais. (Coerção de tipo)

{
    let valor1 = 5;
    let valor2 = 5;

    console.log(valor1 == valor2); // Irá imprimir 'true'

    let valor3 = 1;
    let valor4 = 4;

    console.log(valor3 == valor4); // Irá imprimir 'false'

    let valor5 = "5";
    let valor6 = 5;

    console.log(valor5 == valor6) // Irá imprimir 'true' pois ele irá converter o 5 em numero antes de comparar.


}

// '===' Igualdade Estrita. Verifica se dois valores são igauis e do mesmo tipo.

{
    let tipo1 = "5"
    let tipo2 = 5;

    console.log(tipo1 === tipo2); // Irá imprimir 'false' pois ambos são diferentes mesmo sendo o valor 5, o primeiro é uma String e o segundo é tipo Number
}

// '!=' Verifica se dois valores são diferentes. (Coerção de tipo)

{
    let dif1 = 54;
    let dif2 = 405;

    console.log(dif1 != dif2); // Irá imprimir 'true' 

    let dif3 = "5";
    let dif4 = 5;

    console.log(dif3 != dif4); // Irá imprimir false pois ele converterá e os dois são o número 5.

}

// '!==' Diferença Estrita. Verifica se dois valores não são iguais ou se não são do mesmo tipo.

{
    let val1 = "5";
    let val2 = 5;
    
    console.log(val1 !== val2); // Irá retornar true porque mesmo ambos sendo 5

    
}


// '>' Maior que.
// '<' Menor que.
// '>=' Maior ou igual.
// '<=' Menor ou igual.

// Realizam Comparações entre valores.

{
    let x = 5;
    let y = 2;

    console.log(x > y); // True
    console.log(x >= y); // True
    console.log(x < y); // False
    console.log(x <= y); // False

}


//Operadores Lógicos.

//'&&' Retorna verdadeiro sem ambos os operandos forem verdadeiros.
//'||' retorna verdaediro se pelo menos um dos operandos for verdadeiro.
//'!' inverte o valor do operando.

{
    let v1 = true;
    let v2 = false;

    console.log(v1 && v2); // 'false', pois somente o v1 é verdadeiro.
    console.log(v1 || v2); // 'true', pois um dos valores é verdadeiro.
    console.log(!(v1)) // 'false', pois inverteu o valor do v1 que era 'true'
} 

//Operador de concatenação

//'+' Normalmente usado para concatenar 'Strings'

{
    let name = "jobson";
    let nameRest = "Da Silva Santos";
    let fullname = name + " " + nameRest;
    console.log(fullname);
}

//Operadores Unários ou de Incremento.

//'++' Incrementa 1 em uma variável.
//'--' Decrementa 1 em uma variável.
//'typeof' Exibe o tipo da variável, seja ele number, string e etc.
//'+' Torna o valor de uma variável positivo.
//'-' Torna o valor de uma variável negativo.

// '++', '--'
{
    let valor1 = 5;
    valor1++
    console.log(valor1); // O resultado será 6 pois ouve incremento.

}

// Existe também pré, darei exemplo

{
    let valor1 = 5;
    ++valor1
    console.log(valor1); // Também irá imprimir 6 pois normalmente se é usado em um loop.
}

//'typeof'

{
    let valor = 10;
    console.log(typeof valor); // retornara 'Number' pois 10 é tipo 'Number'.
}

//'+' (Positivação) Toda variável normalmente já é interpretada como valor positivo, por isso normalmente você não usa este operador.

//'-' (Negativação)

{
    let v1 = 10;
    let v2 = -v1 // passou a ser -10
    console.log(v2);
}

// No caso de Strings ele faz a conversão antes de fazer a operação de negativação.


//Operadores ternários. Avaliam a condição e retornam 'Valor1' se for verdadeira, caso contrário retornam 'valor2'

{
    let idade = 16;
    let maiorIdade = (idade >= 18)? "Adulto" : "Menor de idade";
    console.log(maiorIdade);

}