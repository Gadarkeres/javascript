// Criação de promessas

const myPromise = new Promise((resolve, reject) => {
  
  const nome = "Matheus";

  if (nome === "Matheus") {
    resolve("Usuario encontrado!");
  } else {
    reject("Usuario não encontrado!");
  }
});

    myPromise.then((dados) => {
    console.log(dados)
})

// Encadeamento de then's

const myPromise2 = new Promise((resolve, reject) => {
  
    const nome = "Matheus";
  
    if (nome === "Matheus") {
      resolve("Usuario encontrado!");
    } else {
      reject("Usuario não encontrado!");
    }
  });
  
      myPromise2.then((dados) => {
      return dados.toLowerCase()

  }).then((stringmodificada) => {
    console.log(stringmodificada)
  })

  // Cacth
  const myPromise3 = new Promise((resolve, reject) => {
    const nome = "João";

    if (nome === "Matheus") {
      resolve("Usuario encontrado!");
    } else {
      reject("Usuario não encontrado!");
    }
  });

  myPromise3.then((data) => {
    console.log(data);
  }).catch((err) => {
    console.log("Aconteceu um erro:" + err)
  })

  // resolver varias promessas

  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
     resolve("P1 ok! timeout")
    }, 2000)

  })
  const p2 = new Promise((resolve, reject) => {
    resolve("P2 ok!")
  })

  const p3 = new Promise((resolve, reject) => {
   resolve("P3 ok!")
  })

  const resolveAll = Promise.all([p1,p2,p3]).then((data) => {
    console.log(data)
  })

 
  
  