var agora = new Date()
var diaSem = agora.getDay()
switch (diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-feira')
        break
    case 2: console.log ('Terça-feira')
    break
    case 3: console.log ('Quarta feira')
    break
    default: console.log ('[ERRO] Dia inválido!')
    break
}