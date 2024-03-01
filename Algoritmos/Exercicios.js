// Exercicio de declaração de variáveis básicas. Declare uma variável chamada "nome" e atribua o valor "JavaScript".

{
    let nome = "JavaScript";
//Imrpima o valor da variável no Console
    console.log(nome);
}

//Declare uma variável chamada "idade" e atribua a ela o valor 25. Depois Reatribua o valor da variável "idade" para 30.

{
    let idade = 25;
    console.log(idade);

// O mais fácil seria usar VAR para reatribuir uma váriavel mas prefiro usar let por conta do escopo de Bloco.
    idade += 5; // Equivalente idade = idade + 5;
    console.log(idade);
}

//Exercicio de concatenação de Strings
{
    let nome = "John";
    let sobrenome = "Wayne";

    let nomeCompleto = nome + " " + sobrenome;

    console.log(nomeCompleto);
}


//Exercício de escopo de variáveis. Declare uma váriavel "x" e depois tente acessa-la fora do escopo

{
    let x = 10;
    console.log(x);
}
// console.log(x); // X is not defined

//Utilizando loops e estruturas de controle nos exercícios de JavasScript para praticar

//Crie um loop FOR que imprima os números de 1 a 5 no console
{
    for(let i = 1; i<=5; i++){
        console.log(i);
    }
}

//Crie um loop WHILE que imprima os números de 1 a 5 no console.

{
    let i = 1;
    while(i<=5){
        console.log(i);
        i++
    }
}

//Exercício de estrutura de controle if

//Crime uma variável chamada "idade" e atribua a ela um valor numérico, e use uma estrutura if para verificar se a idade é maior ou igual a 18.

{
    let idade = 15 
    if(idade >=18){
        console.log("Você é maior de idade");
    }
    else{
        console.log("Você é menor de idade");
    }
}