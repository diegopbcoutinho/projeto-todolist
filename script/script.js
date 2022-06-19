let input = document.querySelector('input#txt')
let res = document.querySelector('div#res')

function inserir() {
    if (input.value.length == 0) {
        window.alert('Insira um item!')
    } else {
        res.innerHTML += `- ${input.value} <br>`
}
    input.value = ''
    input.focus()
}