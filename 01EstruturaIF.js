//Estrutura IF (Estrutura de condição, controle)

function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
//Aprovado com  8.1

soBoaNoticia(6.1)
//Não mostrará o resultado 

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo()
//Não mostrará o resultado
seForVerdadeEuFalo(null)
//Não mostrará o resultado 
seForVerdadeEuFalo(undefined)
//Não mostrará o resultado 
seForVerdadeEuFalo(NaN)
//Não mostrará o resultado 
seForVerdadeEuFalo('')
//Não mostrará o resultado 
seForVerdadeEuFalo(0)
//Não mostrará o resultado 
seForVerdadeEuFalo(-1)
//é verdade... -1
seForVerdadeEuFalo(' ')
//é verdade ...
seForVerdadeEuFalo('?')
//é verdade ... ? 
seForVerdadeEuFalo([])
//é verdade ... 
seForVerdadeEuFalo([1, 2])
//é verdade ... 1,2
seForVerdadeEuFalo({})
//é verdade ...[object object]