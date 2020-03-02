function contar() {
    var ver1 = document.querySelector('#inicio')
    var ver2 = document.querySelector('#final')
    var ver3 = document.querySelector('#passo')
    var mostrandoRes = document.querySelector('h3')
    var res = document.querySelector('#resposta')
    var resultado = document.querySelector('#resultado')
    var contemtudo = document.querySelector(".bloco-white")
    var form = document.querySelector('form')// pega o local onde esta o input com o submit
    form.addEventListener('submit', function (e) {//
        e.preventDefault()
    })

    if (ver1.value.length == 0 || ver2.value.length == 0 || ver3.value.length == 0) {
        window.alert('As caixas precisam ter algum valor !')
    }
    if(ver1.value > 100 || ver2.value > 100 || ver1.value == ver2.value || ver3.value > 100){
        window.alert('Algo deu errado, tente outra vez !\nLembre-se que os campos não podem conter números\nmaiores do que 100')
        ver1.value = ''
        ver2.value = ''
        ver3.value = ''
        res.innerHTML = ''
        mostrandoRes.style = ''
        mostrandoRes.innerHTML = 'Preparando contagem...'
        contemtudo.style = ''
        resultado.style = ''
    } else {
        res.innerHTML = ''
        let i = Number(ver1.value)// transformando no tipo número
        let f = Number(ver2.value)
        let p = Number(ver3.value)
        if(p <= 0){
            window.alert('O valor de "Pule" é inválido, considerando valor "1"')
            p = 1
        }
        if(i < f){
            for (let c = i; c <= f; c += p) {
                mostrandoRes.style.boxShadow = '0px 0px 20px 14px #79a4a9'
                mostrandoRes.style.transform = 'rotateX(720deg)'
                // mostrandoRes.style.transition = 'box-shadow 1s cubic-bezier(0.18, 0.89, 0.32, 1.28) 0s'
                mostrandoRes.innerHTML = 'Contado:'
                resultado.style.height = '15em'
                contemtudo.style.height = '32em'
                res.innerHTML += `\u{1F449} ${c}  `
            }
        }else{
            for (let c = i; c >= f; c -= p) {
                mostrandoRes.style.boxShadow = '0px 0px 20px 14px #79a4a9'
                mostrandoRes.style.transform = 'rotateX(720deg)'
                // mostrandoRes.style.transition = 'box-shadow 1s cubic-bezier(0.18, 0.89, 0.32, 1.28) 0s'
                mostrandoRes.innerHTML = 'Contado:'
                resultado.style.height = '15em'
                contemtudo.style.height = '32em'
                res.innerHTML += `\u{1F449} ${c} `
            }
        }
    }

}