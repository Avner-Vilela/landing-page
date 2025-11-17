document.addEventListener('DOMContentLoaded', function () {
    // Verifica se o elemento do carrossel existe antes de inicializar
    const splideElement = document.getElementById('splide-pacientes');
    
    if (splideElement) {
        new Splide(splideElement, {
            type: 'loop',         // Torna o carrossel infinito
            autoplay: true,       // Inicia a rolagem automática
            interval: 2000,       // Intervalo de 2 segundos por slide
            pauseOnHover: false,  // Não pausa ao passar o mouse
            perPage: 3,           // 3 slides visíveis em desktop
            gap: '20px',          // Espaçamento entre slides
            focus: 'center',      // Centraliza o slide ativo
            breakpoints: {
                992: {
                    perPage: 2,   // 2 slides em tablets
                    gap: '15px',
                },
                640: {
                    perPage: 1,   // 1 slide em mobile
                    focus: 0,
                }
            }
        }).mount();
    }
});