//Existem três tipos de decçaração de váriaveis

// O primeiro deles é o 'LET', possui escopo de bloco, pode ser incrimentada porém não pode ser redeclarada no mesmo escopo.
{
let num = 10; // Variável declarada com 'LET' com valor 10.
console.log(num);
}
//'LET' não pode ser redeclarada no mesmo escopo, mas pode ser modificada.

{
    let num = 10; // A varíavel NUM era 10.
    num = 50; // Aqui passou a ser 50.
    console.log(num);
}

//'LET' tem escopo de bloco, veja um exemplo

{
    let num= 50;
 {
  console.log("Seu número é: " + num);  
 }
}

//Agora caso eu tente acessar por aqui, veja que aparecerá um erro

console.log(num); // 'num' is not defined.

// Logo depois temos o tipo 'CONST', este tipo de variável também possui escopo de bloco assim como o 'LET' porém, este tipo de váriavel não pode ser incrementada nem iterada.
{
const nome = ("Gerivaldo"); // Variável declarada com'CONST' com valor 30.
console.log(nome);
}
// Tipos de váriaveis declaradas com 'VAR' não costumam ser muito usadas hoje em dia, por ter escopo global e de função, acaba pecando um pouco no desempenho por conta do "Hoisting"
{
var idade = true; // Variável declarada com 'VAR'
console.log(idade);
}