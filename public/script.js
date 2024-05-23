// Funktion för att registrera en ny användare
function registerUser() {
    // Hämta användarnamn, lösenord och e-post från formuläret
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;
    const email = document.getElementById("registerEmail").value;

    // Skicka en POST-begäran till /api/register med användaruppgifterna
    fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, email })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Registreringen misslyckades.');
        }
        return response.json();
    })
    .then(data => {
        alert(data.message);
        // Rensa formuläret efter framgångsrik registrering
        document.getElementById("registerForm").reset();
    })
    .catch(error => {
        alert(error.message);
    });
}

// logga in en användare
function loginUser() {
    //användarnamn och lösenord hämtas från formuläret
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Skicka en POST-begäran till /api/login med användaruppgifterna
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Inloggningen misslyckades.');
        }
        return response.json();
    })
    .then(data => {
        alert(data.message);
        localStorage.setItem('token', data.token); // Spara JWT-token i localStorage
        window.location.href = "undersida.html"; // Omdirigera till undrsida.html vid lyckad inloggning
    })
    .catch(error => {
        alert(error.message);
    });
}

// Funktion för att kontrollera om användaren är inloggad
function checkLoggedIn() {
    const token = getToken(); // Hämta JWT-token från localStorage
    if (!token) {
        // Om användaren inte är inloggad, omdirigera till inloggningssidan
        window.location.href = "index.html";
    }
}

// Funktion för att logga ut användaren
function logoutUser() {
    // Ta bort JWT-token från localStorage
    localStorage.removeItem('token');
    // Omdirigera användaren till inloggningssidan
    window.location.href = "index.html";
}

// Funktion för att hämta JWT-token från localStorage
function getToken() {
    return localStorage.getItem('token');
}

// Kör funktionen för att kontrollera om användaren är inloggad när sidan laddas
window.onload = checkLoggedIn;
