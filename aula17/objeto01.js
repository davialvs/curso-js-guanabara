let amigo = {
    nome: 'Davi',
    sexo: 'M',
    peso: 74,
    engordar(p){
        console.log('Engordou')
        this.peso += p
    }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)