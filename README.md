# Moment 4 Del 2

I den här delen av uppgiften ska vi bygga vidare från förra del, alltså webbtjänsten, i den här delen har jag gjort en webbplats som innehåller två formulärer , en för att registrera och en för att logga in. Efter att användaren har registrerat sig och sedan loggat in kommer den fram till en annan sida, undersida.html. 
För att göra webbappen har jag gjort en mapp som heter public och i den har jag html-filerna, js- och css-filen. 
Dessutom har jag konfigurerat Cors (först installerade jag det med kommandon npm install cors) och sedan skrev jag const cors = require("cors"); app.use(cors()); i server.js. 
app.use(express.static("public")); skrev jag i server.js för att ange en katalog med statiska filer som ska serveras offentligt. Jag skrev public eftersom det finns en mapp som heter så och filerna som ska publiceras ligger i den. och Express kommer att servera den filen till klienten.

Andra kod som finns i authRoutes.js, server.js och install.js beskriver jag inte eftersom jag har beskrivit dem i README.md filen i Moment 4 del 1. 

 Html- och css-filerna beskriver jag inte eftersom det är inte något nytt till den här kursen. 
 Men här ska jag beskriva script.js-filen. 

I början av script.js har jag en funktion som heter registerUser(), det är en funktion som körs när en användare registrerar sig. Den hämtar användarnamn, lösenord och email från formuläret och sedan skickar den en POST-begäran till "/api/register" med användaruppgifterna i JSON-format. 
Om begäran är framgångsrik (status 200), återgår den till JSON-data. Men om det finns ett fel så får man meddelande. När man har loggat in framgångsrikt visas meddelandet och formuläret rensas.

function loginUser() {...} Sedan har jag en funktion som används när en användare försöker logga in. Denna funktion hämtar användarnamn och lösenord från inloggningsformuläret. Sedan skickas det en POST-begäran till "/api/login" med användaruppgifterna i JSON-format. 
Om begäran är framgångsrikt returneras JSON-data. Men om det finns något fel meddelande kastas ett fel meddleande. 
Efter en lyckad inloggning visas ett meddelande, JWT-token sparas i localStorage och användaren omdirigeras till "undersida.html"

function checkLoggedIn() {...} i denna kontrolleras det om användaren är inloggad, det hämtar JWT-token från localstorage med hjälp av getToken(), sedan kontrolleras det om token existerar om det inte gör (det betyder att användaren inte är inloggad) då förs användaren till inloggningssidan så man kan inte söka undersida.html i webbläsaren och nå den man måste vara inloggad föör att komma fram.
function logoutUser() {...} genom att klicka på logga ut knappen körs denna funktion, den tar bort JWT-token från localstorage genom att använda localstorage.removeItem('token'), det loggar ut användaren och användaren kommer till inloggningsidan eftersom hen inte är inloggad..

function getToken() {...} därefter har jag en funktion, denna funktion används för att hämta JWT-token från localstorage. 
Om JWT-token finns returneras dess värde annars returneras null.
