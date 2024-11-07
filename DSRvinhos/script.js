// Seleciona todos os botões de "Comprar" na página
const botoesComprar = document.querySelectorAll(".produto-item button");

// Array com os produtos
const produtos = [
    {
        nome: "Grand Barossa Shiraz",
        preco: "R$ 120,00",
        imagem: "./img/pexels-brettjordan-2897305.jpg"
    },
    {
        nome: "Glenfiddich Single Malt",
        preco: "R$ 300,00",
        imagem: ""
    },
    {
        nome: "Vinho Branco com Morangos",
        preco: "R$ 90,00",
        imagem: "./img/pexels-mwabonje-1694853.jpg"
    }
];

// Função para exibir uma mensagem ao clicar em "Comprar"
function comprarProduto(indice) {
    const produto = produtos[indice];
    alert(`Você escolheu: ${produto.nome} - ${produto.preco}`);
}

// Adiciona o evento de clique para cada botão
botoesComprar.forEach((botao, indice) => {
    botao.addEventListener("click", () => comprarProduto(indice));
});
