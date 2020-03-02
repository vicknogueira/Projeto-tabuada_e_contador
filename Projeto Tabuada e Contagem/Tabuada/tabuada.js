function Tabuada() {
    var ver1 = document.querySelector('#inicio')
    var ver2 = document.querySelector('#fim')
    var res = document.querySelector('#resposta')
    var resultado = document.querySelector('#resultado')
    var contemtudo = document.querySelector(".bloco-white")
    var form = document.querySelector('form')// pega o local onde esta o input com o submit
    form.addEventListener('submit', function (e) {//
        e.preventDefault()
    })
    if (ver1.value == '' || ver2.value == '') {
        window.alert('Algo deu errado !')
        ver1.value = ''
        ver2.value = ''
        resultado.innerHTML = ''
    } else {
        resultado.innerText = ''
        var i = Number(ver1.value)
        var f = Number(ver2.value)  
        for (let c = 0; c <= f; c++){
            let opt = document.createElement('option')
            opt.text = `${i} x ${c} = ${i * c}`
            resultado.appendChild(opt)
            resultado.style.transition = "1s"
            resultado.style.transform = 'rotate(360deg)'
        }
    }
}