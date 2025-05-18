function revealElements() {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right', '.slide-in-up');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 50) { // 50px de buffer para começar a animação antes que o elemento esteja totalmente visível
            element.classList.add('visible');
        }
    });
}


// Ativar a função quando a página carrega e quando o usuário rola a tela
window.addEventListener('load', revealElements);
window.addEventListener('scroll', revealElements);

let botao = document.querySelector('.botao');
let menu = document.querySelector('.menu');

    botao.addEventListener('click', function() {
        menu.classList.toggle('ativo');
        botao.classList.toggle('ativo');
    });


const imagem = document.getElementById("primeira-imagem");

  imagem.addEventListener("click", function() {
    // Código para o efeito ou redirecionamento

    // Exemplo de redirecionamento:
    window.location.href = "primeira.html";

    // Exemplo de efeito (mudar a posição da imagem):
    imagem.style.left = "200px";
    imagem.style.top = "100px";
  });