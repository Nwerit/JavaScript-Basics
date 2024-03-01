//A primeira estrutura de controle que temos aqui é um tipo de condicional, isso é, caso a condição for verdadeira ele executa a instrução IF, caso a condição for false ele executa ELSE.

// ESTRUTURA IF ELSE.

{
    let idade = 18
    if (idade >= 18){
        console.log("É maior de idade!");
    }else{
        console.log("É menor de idade :(");
    }
}

//Você pode encadear múltiplas condições utilizando a estrutura 'IF... ELSE IF... ELSE' O bloco de código correspondente a primeira condição verdadeira será executado

// ESTRUTURA IF, ELSE IF E ELSE.

{
    let nota = 70;
    if(nota >= 90){
        console.log("Notão fi!");
    }else if(nota >= 80){
        console.log("Boa nota!");
    }else if(nota >= 70){
        console.log("Passou!");
    }else{
        console.log("Tente uma próxima vez :(");
    } 
}

