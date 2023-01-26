//Sequência de Fibonacci

function fibonacciGenerator(numb){

let arrayNumb = []; //Cria uma variável do tipo array para armazenar a sequência de dados.

    if (numb === 1){ //Primeira validação se o número informado é igual a 1 se sim gera a matriz com o primeiro número que é 0.
      arrayNumb = [0];
    }

    else if (numb === 2) { //Segunda validação se o número informado é igual a 2 se sim gera a matriz com 0 e 1.
      arrayNumb = [0, 1];
    }

    else {
      	arrayNumb = [0 , 1];

        for (let i = 2; i < numb; i++) { //Inícia o loop for até chegar na quantidade de números da sequência solicitada.
        		arrayNumb.push(arrayNumb[arrayNumb.length - 2] + arrayNumb[arrayNumb.length - 1]); //Insere na matriz o número resultantes da soma dos últimos dois valores.
        }
    }
  
  console.log (arrayNumb);//Envia para o console o resultado da matriz.
  
}

let numbGen = prompt("Digite o número de sequências desejado:"); //Função genérica sem validação para receber na variável o número de sequências.
  
fibonacciGenerator(numbGen); // Roda a função com o número informado.