var btn = document.querySelector('input#btn_form')
btn.addEventListener('click', calcular)

function calcular(){

    var idade = document.getElementById('idade').value
    idade = Number(idade)
    var masculino = document.getElementById('masculino').checked
    var feminino = document.getElementById('feminino').checked

    idadeAtual = (2021-idade)

    if(masculino == true){
        if(idade < 1960){
            btn.value = `Você tem ${idadeAtual} anos! Idade de risco.`
        }else if(idade >= 1960 && idade <= 1992){
            btn.value = `Você tem ${idadeAtual} anos! Não aglomere-se.`
        }else if(idade > 1992 && idade <= 2013){
            btn.value = `Você tem ${idadeAtual} anos! Fique em casa.`
        }else{
            btn.value = `Você tem ${idadeAtual} anos! Cuide-se bem.`
        }
    } else if(feminino == true){
        if(idade < 1960){
            btn.value = `Você tem ${idadeAtual} anos! Idade de risco.`
        }else if(idade >= 1960 && idade <= 1992){
            btn.value = `Você tem ${idadeAtual} anos! Não aglomere-se.`
        }else if(idade > 1992 && idade <= 2013){
            btn.value = `Você tem ${idadeAtual} anos! Fique em casa.`
        }else{
            btn.value = `Você tem ${idadeAtual} anos! Cuide-se bem.`
        }
    }else{
        btn.value = `Prencha corretamente!`
    }

    console.log(btn)
    console.log(idade)
    console.log(masculino)
    console.log(feminino)
}
