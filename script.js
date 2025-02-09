const messages = [
    "¿Estás segura?",
    "¿Enserio estás segura?",
    "¿Enserio enceserio estás segurisima?",
    "Ya pues, por favor...",
    "¡Piénsalo mejor!",
    "Si dices que no, estaré muy triste...",
    "Estaré muy triste...",
    "Estaré muy, muy, muy triste...",
    "Está bien, ya dejaré de preguntar...",
    "Bromitaaaa, ¡di que siiii! ❤️"
    ];
    
    let messageIndex = 0;
    
    function handleNoClick() {
        const noButton = document.querySelector('.no-boton');
        const yesButton = document.querySelector('.si-boton');
        noButton.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;
        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentSize * 1.5}px`;
    }
    
    function handleYesClick() {
        window.location.href = "si.html";
    }