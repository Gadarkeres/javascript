function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] verifique os dados e tente novamente.')
    } else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked){
        gênero = 'Homem'
       
        if(idade => 20 && idade < 30){
        //jovem //  
        img.setAttribute('src,' 'imagens/homem-j.png')
        } else if (idade => 31 && idade < 50){
            //adulto
        } else(idade > 50){
            //idoso
        }
      
     else if(fsex[1].checked){
        gênero = 'Mulher'
        if(idade => 20 && idade < 30){
            //jovem //  
            } else if (idade =>31 && idade < 50){
                //adulto
            } else(idade > 50){
                //idoso
            }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectados um(a) ${gênero} com ${idade} anos`

    }
}