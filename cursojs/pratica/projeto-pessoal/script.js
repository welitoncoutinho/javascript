function tabuada() {
    let nu = window.document.getElementById('txtnu')

    let r1 = window.document.getElementById('res1')
    let r2 = window.document.getElementById('res2')
    let r3 = window.document.getElementById('res3')

    if(nu.value.length == 0){
        alert('[ERRO!] Digite um Número!')
        r.innerHTML = 'Digite um número acima'
    }else {
        let n = Number(nu.value)
        r1.innerHTML = ''
        r2.innerHTML = ''
        r3.innerHTML = ''

        for(let c = 0; c <= 10; c++) {
            r1.innerHTML += `${n} X ${c} = ${n*c} <br>` 
        }

        for(let c1 = 10; c1 <= 20; c1++) {
            r2.innerHTML += `${n} X ${c1} = ${n*c1} <br>` 
        }

        for(let c2 = 20; c2 <= 30; c2++) {
            r3.innerHTML += `${n} X ${c2} = ${n*c2} <br>` 
        }
    }
}