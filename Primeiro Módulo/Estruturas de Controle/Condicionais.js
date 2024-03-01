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

// O terceiro tipo de Estrutura de controle que temos, chama se 'SWITCH'. Normalmente é utilizada quando há multiplas condições a serem avaliadas em relação a uma ÚNICA EXPRESSÃO ela compara a expressão especificada dos 'CASE' e executa o bloco de código correspondente ao primeiro 'CASE' que corresponder.


{
    let diaSemana = 7;
    switch(diaSemana){
        case 1:
            console.log("Segunda-Feira!");
            break
        case 2:
            console.log("Terça-Feira!");
            break
        case 3:
            console.log("Quarta-feira!");
            break   
        case 4: 
            console.log("Quinta-feira!");
            break
        case 5:
            console.log("Sexta-Feira!");
            break
        case 6:
            console.log("Sábado!");
            break
        case 7:
            console.log("Domingo!");
            break
        default:
            console.log("Dia inválido");                     
    }
}