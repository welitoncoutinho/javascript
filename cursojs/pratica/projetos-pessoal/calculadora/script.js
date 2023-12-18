function calcular(tipo, valor){
    if(tipo === 'acao'){
        if(valor === 'c'){
            document.getElementById('display').value = ''
        }
        
        if(valor === '/' || valor === '*' || valor === '-' || valor === '+' || valor === '.'){
            document.getElementById('display').value += valor
        }

        if(valor === '='){
            var resultadoFinal = eval(document.getElementById('display').value)
            document.getElementById('display').value = resultadoFinal
        }
    }else if(tipo === 'valor'){
        document.getElementById('display').value += valor
    }
}
