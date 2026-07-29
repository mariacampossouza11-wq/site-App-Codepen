<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Meu blog tech</h1>
        <p>Vou compartilhar conhecimentos sobre tecnologia e programação</p>
    </header>

    <main>
        <article>
            <img src="https://raw.githubusercontent.com/mariacampossouza11-wq/site-App-Codepen/refs/heads/main/1fb045e1-c871-451e-952b-187bdf96ef19.jpg" alt="Logotipo de tecnologia e educação">
            <div>
                <h2>Meu primeiro post</h2>
                <p class="artigo-autor">Por: Maria Raphaela</p>
                <p>Boas-vindas ao meu novo blog! Aqui vou compartilhar dicas de programação e curiosidades da área de tecnologia.</p>
                <button>❤️<span>0</span></button>
                <button>👍<span>0</span></button>
            </div>
        </article>

        <article>
            <img src="https://raw.githubusercontent.com/mariacampossouza11-wq/site-App-Codepen/refs/heads/main/1fb045e1-c871-451e-952b-187bdf96ef19.jpg" alt="Logotipo de tecnologia e educação">
            <div>
                <h2>Meu primeiro post</h2>
                <p class="artigo-autor">Por: Maria Raphaela</p>
                <p>Boas-vindas ao meu novo blog! Aqui vou compartilhar dicas de programação e curiosidades da área de tecnologia.</p>
                <button>❤️<span>0</span></button>
                <button>👍<span>0</span></button>
            </div>
        </article>
    </main>

    <script>
        let botoes = document.querySelectorAll("button");

        botoes.forEach(function (botao) {
            let curtiu = false;

            botao.addEventListener("click", botaoClicado);

            function botaoClicado() {
                let texto = botao.querySelector("span");

                if (curtiu === false) {
                    texto.textContent++;
                    curtiu = true;
                } else {
                    texto.textContent--;
                    curtiu = false;
                }
            }
        });
    </script>
</body>
</html>
