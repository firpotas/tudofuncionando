import { verifyToken } from "../../utils/verify-token.js"
import { getName } from "../../utils/get-name.js"
import { logout } from "../../utils/logout.js"

const url = "../../loginecadastro/index.html"

verifyToken(url)
getName()
logout()

async function finalizar() {
    let pontos = localStorage.getItem("pontos");

    // Obter o token armazenado no localStorage
    const token = localStorage.getItem("token");

    // Enviar os pontos ao backend
    if (token) {
        const response = await fetch("http://localhost:3000/update-points", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                token: token,   // Envia o token para identificar o jogador
                pontos: pontos, // Envia os pontos do jogador
            }),
        });

        const data = await response.json();
        console.log(data.message); // Exibe a mensagem de sucesso ou erro

        // Redireciona para a página de resultados
        
    } else {
        console.error("Token não encontrado!");
    }
}


async function carregarRanking() {
    try {
        

        console.log("carregarRanking chamada")
        const response = await fetch("http://localhost:3000/ranking");
        const ranking = await response.json();
        console.log("Dados do ranking:", ranking);

        // Atualizar a página com os dados do ranking
        ranking.forEach((jogador, index) => {
            const nomeElemento = document.getElementById(`player${index + 1}-name`);
            const pontosElemento = document.getElementById(`player${index + 1}-score`);

            if (nomeElemento && pontosElemento) {
                nomeElemento.innerText = jogador.name || "Jogador";
                pontosElemento.innerText = jogador.pontos || 0;
            }
        });
    } catch (error) {
        console.error("Erro ao carregar o ranking:", error);
    }
}

// Chamar a função ao carregar a página
finalizar()
carregarRanking();
