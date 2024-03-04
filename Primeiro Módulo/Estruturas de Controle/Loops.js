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

let valor = 3;
do{
    console.log(valor);
}while(valor == 5) 

// Como 'valor' não é igual a 5, ele executa o código uma vez mas logo em seguida para pois a condição é falsa.


