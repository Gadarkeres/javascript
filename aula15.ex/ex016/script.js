function contar(){
    var txt1 = document.getElementById('txtnum')
    var txt2 = document.getElementById('txtnum2')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (txt1.value.length == 0 || txt2.value.length == 0 || passo.value.length == 0 ){
        res.innerHTML ='Impossivel contar!'
        // window.alert('[ERRO] Faltam dados!')
        
    } else{
        res.innerHTML = 'Contando: '
        var i = Number(txt1.value)
        var f = Number(txt2.value) 
        var p = Number(passo.value)
        if ( p <= 0){
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        if( i < f){
            for(var c = i; c <= f; c += p ){
                res.innerHTML +=`${c} \u{1F449} `
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            
            for(var c =  i; c>= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
            
        }
        res.innerHTML += `\u{1F3C1}`
        
    }
}