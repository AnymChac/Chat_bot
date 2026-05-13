// 1. Definición de respuestas
const responses = {
    'hola': '¡Hola! ¿Sobre que miembro de la Justice League deseas saber información?',
    'adiós': '¡Adiós! Que tengas un buen día.',
    'cómo estás': 'Estoy bien, gracias por preguntar.',
    'qué puedes hacer': 'Puedo darte información básica de los mniembros de la Justice League.',
    'batman': 'Su identidad Secreta es Bruce Wayne tiene: Inteligencia: 100, Fuerza: 26, Velocidad: 27, Durabilidad: 50, Poder: 47, Combate: 100',
    'superman': 'Su identidad Secreta es Clark Kent tiene: Inteligencia: 94, Fuerza: 100, Velocidad: 100, Durabilidad: 100, Poder: 100, Combate: 85',
    'wonder woman': 'Su identidad Secreta es Diana Prince tiene: Inteligencia: 88, Fuerza: 100, Velocidad: 79, Durabilidad: 100, Poder: 100, Combate: 100',
    'flash': 'Su identidad Secreta es Barry Allen tiene: Inteligencia: 88, Fuerza: 48, Velocidad: 100, Durabilidad: 60, Poder: 100, Combate: 60',
    'green Lantern': 'Su identidad Secreta es Hal Jordan tiene: Inteligencia: 69, Fuerza: 90, Velocidad: 75, Durabilidad: 80, Poder: 100, Combate: 70',
    'aquaman': 'Su identidad Secreta es Arthur tiene: Inteligencia: 81, Fuerza: 85, Velocidad: 79, Durabilidad: 80, Poder: 100, Combate: 80',
    'default': 'Lo siento, no este héroe no esta en la base de datos de la Justice League'
};

// 2. Selección de elementos del DOM
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatMessages = document.getElementById('chat-messages');

// 3. Función para agregar mensajes al DOM
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = text;
    
    chatMessages.appendChild(messageDiv);
    
    // Auto-scroll al final
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// 4. Función para generar respuesta del bot
function getBotResponse(input) {
    // Limpiamos la entrada (minúsculas y sin espacios extra)
    const cleanInput = input.toLowerCase().trim();
    return responses[cleanInput] || responses['default'];
}

// 5. Función principal de envío
function handleSend() {
    const message = userInput.value;
    
    if (message.trim() !== "") {
        // Mostrar mensaje del usuario
        addMessage(message, 'user');
        userInput.value = ''; // Limpiar input

        // Simular un pequeño retraso para que parezca que el bot "piensa"
        setTimeout(() => {
            const botReply = getBotResponse(message);
            addMessage(botReply, 'bot');
        }, 500);
    }
}

// Eventos
sendBtn.addEventListener('click', handleSend);

// Permitir enviar con la tecla Enter
userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        handleSend();
    }
});