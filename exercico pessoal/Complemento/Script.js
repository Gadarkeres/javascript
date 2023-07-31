// 1 - var, let e const

var x = 10
var y = 20

if (y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 20

if (b > 10){
    let a = 5 
    console.log(a)
}       

console.log(a)


for (let i = 1; i <= 5; i++){
    console.log(i)
} 

// 2 arrow function



const teste = () => console.log("testou")


const user = {
    name: "Theo",
    sayUserName(){
        setTimeout( function (){
            console.log(this)
            console.log("Usermane:" + this.name)
        })
    }
}


// 3 filter
const usuarios = [
    1, 2, 3 ,4 ,5
]

const highNumbers = usuarios.filter((n) =>{
 if (n >= 3){
    return n
 }
})

console.log(highNumbers)



const users = [{name:"Matheus", available:true}, {name:"Pedro", available:false}, {name:"Joao", available:false}]

const availableUsers = users.filter((user) => !user.available)
console.log(availableUsers)

// 4 map

const produtos = [
    {name:"camisa", price: 10.99, category: "Roupas"},
    {name:"Chaleira Elétrica", price: 49.99, category: "Eletro"},
    {name:"Fogão", price: 400, category: "Eletro"},
    {name:"Calça jeans", price: 50.99, category: "Roupas"},

]

 produtos.map((produto) =>{
    if (produto.category === "Roupas"){
        produto.onsale = true
    }
})

console.log(produtos)

//Destructuring

const fruits = ["Maça", "Laranja", "Mamão"]

const [f1, f2, f3] = fruits

console.log(f1)

//spread operator

const a1 = [1,2,3]
const a2 = [4,5,6]
const a3 = [...a1,...a2]

console.log(a3)

//classes

class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }
    ProductWithDiscount(discont){
        return this.price * ((100 - discont) / 100)
    }
}


const numeros = [1, 2, 3, 4]

const filtro = numeros.filter((n) =>{
    if (n <= 3){
        return n
    }
})
console.log(filtro)


const Produto = [
    {name: 'Secador de cabelo', preço: 25.99, categoria: 'eletro'},
    {name: 'Chapinha', preço: 50.99, categoria: 'eletro'},
    {name: 'Calça Jeans', preço: 43.99, categoria: 'Roupas'},
]

const promocao = Produto.map((produto) =>{
    if(produto.categoria == 'eletro'){
        produto.promocao = true
        return produto
    }else{
        return produto
    }
})

console.log(promocao)


