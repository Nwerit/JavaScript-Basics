//'Loops' em JavaScript tem sempre o mesmo tipo de sintaxe. continuam a ser executados enquanto uma condição booleana for verdadeira.

//'FOR' É ideal pra quando você sabe exatamente quantas vezes quer que o loop seja executado

for(let i = 0; i<=5; i++){
    console.log(i);
}
// Executa o código que imprime de 0 a 5


//'WHILE' É ideal pra quando você não sabe exatamente quantas vezes quer executar o código, e por quanto tempo.

{
let i = 0;
while(i <= 5){
    console.log(i);
    i++}
}

// Executa e imprime de 0 a 5, caso a condição fosse 'falsa' este código não seria executado.


//'DO...WHILE' Executa o código pelo menos uma vez mesmo se a condição for falsa.

{
let valor = 3;
do{
    console.log(valor);
}while(valor == 5) 
}
// Como 'valor' não é igual a 5, ele executa o código uma vez mas logo em seguida para pois a condição é falsa.

// Também temos as variáções do Loop 'FOR' são elas 'FOR...IN' e 'FOR...OF'.

// O loop 'FOR  IN' Itera em cada posição da coleção, seja ele, array, ou objeto, normalmente usado para apontar o indice de cada elemento.

{
    let arr = [67, 54, 34, 96];
    for(let i in arr){
    console.log(i) //Saída: 0, 1, 2, 3
    } 
}

// Caso eu quisesse acessar os elementos e exibir cada um deles a sintaxe do 'FOR...IN' deveria ser mais ou menos essa.

{
    let arr = [67, 54, 34, 96];
    for(let i in arr){
        console.log(arr[i]); //Saída: 67, 54, 34, 96 
    }
}

// O loop 'FOR...OF' vai dentro do elemento da coleção que ele está iterando, o exemplo acima ficaria muito mais simples por exemplo.

{
    let arr = [67, 54, 34, 96];
    for(let i of arr){
        console.log(i);  //Saída: 67, 54, 34, 96
    }
}