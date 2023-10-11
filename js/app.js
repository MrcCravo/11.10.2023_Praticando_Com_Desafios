let totalGeral = 0;
limpar();

function adicionar(){
    // recuperar valores - nome do produto, quantidade, valores
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorUnitario = produto.split("R$")[1];
    let quantidade = document.getElementById("quantidade").value;
    // alert(nomeProduto);
    // alert(valorUnitario);
    // alert(quantidade.value);

    // calcular o subtotal

    let preco = quantidade * valorUnitario;
    // alert(preco);

    // adiciona no carrinho
    // atualiza o subtotal por item
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco} </span>
    </section>`;

    // atualiza o total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById("valor-total");
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById("quantidade").value = 0 ;

    
}
function limpar(){
    // exclui os produtos que estão no carrinho
    totalGeral = 0;
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").innerHTML = "";

    carrinho.innerHTML = [];
}


