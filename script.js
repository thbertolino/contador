document.addEventListener("DOMContentLoaded", function() {
    // Data de referência: 23/12/2018
    const referenceDate = new Date(2018, 11, 23);

    function updateCounter() {
        const currentDate = new Date();
        const timeDifference = currentDate - referenceDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const weeks = Math.floor(days / 7);
        const months = Math.floor(days / 30.44); // Média de dias em um mês
        const years = Math.floor(days / 365.25); // Média de dias em um ano bissexto

        const result = `Dias: ${days}, 
                        Semanas: ${weeks}, 
                        Meses: ${months}, 
                        Anos: ${years}`;
        document.getElementById("result").innerText = result;
    }

    updateCounter(); // Atualiza a contagem na inicialização

    // Atualiza a contagem a cada segundo (apenas para exemplo, pode ser ajustado conforme necessário)
    setInterval(updateCounter, 1000);
});
