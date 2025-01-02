 alert("Descobrindo o seu saldo bancario");
 let saldo = prompt("Qual o valor da sua conta");
 
 if(saldo<=0)
 {
    alert(`Seu saldo bancario é negativo ${saldo}`);
    console.log(`Avisar o Serasa ${saldo}`);
 }
 else
 {
    alert(`Seu saldo bancario é positivo ${saldo}`);
    console.log(`Não avisar sobre o ${saldo}`);
 }
