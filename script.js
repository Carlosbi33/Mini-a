const password = "janlos";

function checkPassword() {
    const input = document.getElementById("password").value;
    if (input === password) {
        document.getElementById("login-screen").classList.remove("active");
        document.getElementById("main-screen").classList.add("active");
        loadDays();
    } else {
        alert("Contraseña incorrecta");
    }
}

function loadDays() {
    const today = new Date();
    const currentDay = today.getDate();
    const container = document.getElementById("days-container");

    const phrases = [
        "Eres mi cielo estrellado.",
        "Cada día a tu lado es un regalo.",
        "Amarte es mi mayor fortuna.",
        "Eres mi alegría constante.",
        "Tu sonrisa ilumina mi vida."
    ];

    const poems = [
        "Te amo con cada latido,<br>mi corazón siempre contigo.",
        "Eres la melodía de mi canción,<br>la razón detrás de mi pasión.",
        "Tu amor me envuelve y me guía,<br>en cada noche y en cada día.",
        "Eres el sol en mi universo,<br>mi poema más bello, mi verso.",
        "Amarte es mi más dulce labor,<br>mi vida contigo es puro amor."
    ];

    for (let i = currentDay; i <= 23; i++) {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("day");

        if (i === currentDay) {
            dayDiv.innerHTML = `<h2>Día ${i}</h2><p>${phrases[i % phrases.length]}</p><p>${poems[i % poems.length]}</p>`;
        } else {
            const futureDate = new Date(today.getFullYear(), today.getMonth(), i);
            const timeLeft = futureDate - today;
            const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            dayDiv.classList.add("locked");
            dayDiv.setAttribute("data-countdown", `Faltan ${daysLeft} días y ${hoursLeft} horas`);
        }

        container.appendChild(dayDiv);
    }
}
