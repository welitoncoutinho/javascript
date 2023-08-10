function tabuada() {
    let nu = window.document.getElementById('txtnu')

    let r1 = window.document.getElementById('res1')
    
    if(nu.value.length == 0){
        alert('[ERRO!] Digite um Número!')
        r.innerHTML = 'Digite um número acima'
    }else {
        let n = Number(nu.value)
        r1.innerHTML = ''

        for(let c = 0; c <= 10; c++) {
            r1.innerHTML += `${n} X ${c} = ${n*c} <br>` 
        }
    }
}