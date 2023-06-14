function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert("insira um numero!")
    } else{
        var num = Number(num.value)
       var c = 1
        while (c <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}