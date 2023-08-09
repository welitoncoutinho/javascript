function gerar(){
    let nu = window.document.getElementById('txtnu')
    let re = window.document.getElementById('seltab')

    if(nu.value.length == 0) {
        alert('Por Fovar, digite um número!')
    }else {
        let n = Number(nu.value)
        re.innerHTML = ''
        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            let m = (n*c)
            item.text = `${n} X ${c} = ${m}`
            re.appendChild(item)
            
             
        }
    }
    }
    