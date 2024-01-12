/* Método simples */
// etapa 1 - criar o elemento
let tituloDaPagina = document.createElement("h1");

//etapa 2 - popular o elemento
tituloDaPagina.innerText = "Não perca as ofertas da semana!";
tituloDaPagina.id = "titulo";

// etapa 3 - adicioná-lo à página
let corpoPagina = document.querySelector("body");
corpoPagina.appendChild(tituloDaPagina);

/* Método complexo */
// etapa 1 - criar o elemento
const produtoOferta = document.createElement("div")

//etapa 2 - popular o elemento
produtoOferta.innerHTML =
`
<h2 class="post-titulo">Tapioca Yoki 500 Gramas</h2>
<img src="https://www.yoki.com.br/wp-content/uploads/2017/10/YOKI_TAPIOCA_500g-min-e1695912989210-365x385.png" alt="Tapioca Yoki 500 gramas">
<p class="post-texto"> 
    INGREDIENTES: Fécula de mandioca. NÃO CONTÉM GLÚTEN</p>
<p class="post-preço">R$4,99</p>
`
// etapa 3 - adicioná-lo à página
corpoPagina = document.querySelector("body");
corpoPagina.appendChild(produtoOferta);

/*
Crie um projeto com dois arquivos: index.html e script.js. No arquivo 'index' insira apenas a estrutura base HTML e a tag script para conectar o arquivo HTML com o arquivo de extensão JavaScript.

Usando os conceitos aprendidos nesse módulo, e sem alterar o arquivo index.html, adicione um título simples ao site com o id 'titulo', e um elemento que represente um produto à venda. O produto precisa incluir pelo menos o nome, a descrição e o preço. Pode incluir outros "elementos filhos" se achar necessário como, por exemplo, uma imagem. Procure usar o método simples e o método complexo, ensinados neste tópico.
*/