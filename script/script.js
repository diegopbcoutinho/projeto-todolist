let input = document.querySelector('input#txt')
let res = document.querySelector('div#res')

function inserir() {
    if (input.value.length == 0) {
        window.alert('Insira um item!')
    } else {
        let item = document.createElement('p')
        item.innerHTML += `- ${input.value}`
        res.appendChild(item)
        item.onclick = function remover() {
            res.removeChild(item)
        }
}
    input.value = ''
    input.focus()
}

