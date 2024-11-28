import { verifyToken } from "../../utils/verify-token.js"
import { logout } from "../../utils/logout.js"
import { getName } from "../../utils/get-name.js"

const url = "../../loginecadastro/index.html"



verifyToken(url)
getName()
logout()


let pontos = localStorage.getItem("pontos")
let p = document.querySelector(".pontos-inserir")

p.innerHTML = `Você acertou ${pontos} de 10`