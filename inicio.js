// Seleciona todos os links que apontam para uma âncora (#)
const linksAncora = document.querySelectorAll('a[href^="#"]');

linksAncora.forEach(link => {
    link.addEventListener('click', function(event) {
        // Pega o valor do href (ex: "#moral")
        const idDestino = this.getAttribute('href'); 
        
        // Busca o elemento diretamente pelo ID (ex: document.querySelector('#moral'))
        const secaoDestino = document.querySelector(idDestino);
        
        if (secaoDestino) {
            event.preventDefault(); // Impede o salto seco do navegador
            
            secaoDestino.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});