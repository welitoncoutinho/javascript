let num = document.getElementById('txtnum')
let add = document.getElementById('add')
let res = document.getElementById('res')
let valores = []

function numero(n) {
    if (Number(n)>= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}

function lista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function Adicionar(){
    if (numero(num.value) && !lista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        add.appendChild(item)
        res.innerHTML = ''
    } else{
        window.alert('Valor invalido ou já na lista!')
    }
    num.value = ''
    num.focus()
}

function finalisar() {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores) {
        if(maior < valores[pos])
            maior = valores [pos]
        if(menor > valores[pos])
            menor = valores[pos]

        soma += valores[pos]
    }
    media = soma / tot 
    
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados</p>` 
    res.innerHTML += `<p>O maior valor enformado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor enformado foi ${menor}</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
}