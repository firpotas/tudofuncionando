let pontos = localStorage.getItem("pontos")
let p = document.querySelector(".pontos-inserir")

p.innerHTML = `Você acertou ${pontos} de 10`