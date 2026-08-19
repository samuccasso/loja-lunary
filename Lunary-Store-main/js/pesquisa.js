const produtos = [
    "Vela Aromática",
    "Cesta Boho",
    "Bolsa Artesanal",
    "Bolsa de Crochê",
    "Kit Cozy",
    "Sabonete Artesanal",
    "Porta-Velas",
    "Vaso Decorativo",
    "Kit Presente"
];

function pesquisarProdutos() {

    let texto = document.getElementById("pesquisa").value.toLowerCase();

    let resultado = document.getElementById("resultadoPesquisa");

    resultado.innerHTML = "";

    // Se a pesquisa estiver vazia
    if (texto === "") {
        resultado.style.display = "none";
        return;
    }

    let encontrados = produtos.filter(produto =>
        produto.toLowerCase().includes(texto)
    );

    // Se encontrou produtos
    if (encontrados.length > 0) {

        encontrados.forEach(produto => {

            resultado.innerHTML += `
                <a href="produtos.html">${produto}</a>
            `;

        });

    } 
    
    // Se não encontrou nenhum produto
    else {

        resultado.innerHTML = `
            <div class="sem-resultado">
                <strong>Não encontramos resultados 😕</strong>
                <span>Verifique a escrita ou tente pesquisar novamente.</span>
            </div>
        `;

    }

    resultado.style.display = "block";
}