import { pages } from "./pages/PagesController.js";

window.addEventListener('load', function() {
    // Ocultar tela de carregamento
    document.getElementById('loading-screen').style.display = 'none';
    // Mostrar conteúdo HTML
    document.body.innerHTML = pages.contents.starter.html();
    pages.contents.starter.init();
  });
  