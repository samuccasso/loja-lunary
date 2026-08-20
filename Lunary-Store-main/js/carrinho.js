// Pega o carrinho salvo
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// Adicionar produto
function adicionarCarrinho(nome, preco, imagem) {

    carrinho.push({
        nome,
        preco,
        imagem
    });

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    atualizarContador();

    mostrarToast();

}

function atualizarContador() {

    const contador = document.getElementById("contadorCarrinho");

    if (!contador) return;

    if (carrinho.length == 0) {

        contador.style.display = "none";

    } else {

        contador.style.display = "flex";
        contador.textContent = carrinho.length;

    }

}

function mostrarCarrinho() {

    const lista = document.getElementById("listaCarrinho");
    const total = document.getElementById("total");
    const quantidade = document.getElementById("quantidade");

    if (!lista) return;

    lista.innerHTML = "";

    let valorTotal = 0;

    carrinho.forEach((produto, index) => {

        valorTotal += produto.preco;

        lista.innerHTML += `

        <div class="item">

            <img src="${produto.imagem}">

            <div class="item-info">

                <h3>${produto.nome}</h3>

                <p>R$ ${produto.preco.toFixed(2)}</p>

            </div>

            <button class="remover"
            onclick="removerProduto(${index})">

            Remover

            </button>

        </div>

        `;

    });

    quantidade.innerHTML = carrinho.length;

    total.innerHTML = "R$ " + valorTotal.toFixed(2);

}

function removerProduto(indice) {

    carrinho.splice(indice, 1);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    mostrarCarrinho();

}

function mostrarToast() {

    const toast = document.getElementById("toast");

    toast.classList.add("mostrar");

    setTimeout(() => {

        toast.classList.remove("mostrar");

    }, 3000);

}

function finalizarCompra() {

    if (carrinho.length === 0) {

        const modalVazio = document.getElementById("modalVazio");

        modalVazio.classList.add("mostrar");

        return;
    }

    const modal = document.getElementById("modalCompra");

    modal.classList.add("mostrar");

    localStorage.removeItem("carrinho");

    carrinho = [];

}

function fecharModal() {

    const modal = document.getElementById("modalCompra");

    modal.classList.remove("mostrar");

    mostrarCarrinho();

    atualizarContador();

}

function fecharModalVazio() {

    const modalVazio = document.getElementById("modalVazio");

    modalVazio.classList.remove("mostrar");

}

function irParaProdutos() {

    window.location.href = "produtos.html";

}

atualizarContador();