var idade = 22 // criando variavel do tipo number
console.log (`Você tem ${idade} anos.`) // exibe a mensagem + o valor da variavel criada (Você tem 22 anos)
if (idade < 16) { // Se a idade for menor que 16 anos, não vota
    console.log ('Não vota')
} else if (idade < 18 || idade > 65 ) { // Caso a idade for menor que 18 ou maior que 65 o voto é opcional
    console.log('Voto opcional')
} else { // Se não entrar em nenhuma das condições o voto é obrigatório 
    console.log('voto obrigatório')
}