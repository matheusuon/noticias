const BotaoAbrir = document.querySelector(".header-mobile > button")
const BotaoFechar = document.querySelector(".header-mobile nav button")
const BotaoAbrir = document.querySelector("header > button")
const BotaoFechar = document.querySelector("header nav button")

const body = document.querySelector("body")
const nav = document.querySelector(".header-mobile nav")
const nav = document.querySelector("header.mobile")

BotaoAbrir.addEventListener('click', abrirMenu)
BotaoFechar.addEventListener('click', fecharMenu)
function abrirMenu() {
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}
function fecharMenu() {
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")
}