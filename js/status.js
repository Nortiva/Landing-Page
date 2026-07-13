/*
===========================================
NORTIVA STATUS
Sistema preparado para integração com API
===========================================
*/

// ==============================
// DADOS (TEMPORÁRIOS)
// ==============================

const statusData = {

    overall: "online",

    updated: "Agora mesmo",

    uptime: "99.98%",

    latency: "14ms",

    incidents: 0,

    services: [

        {
            name: "Site Institucional",
            status: "online"
        },

        {
            name: "API Nortiva",
            status: "online"
        },

        {
            name: "Dashboard",
            status: "online"
        },

        {
            name: "Área do Cliente",
            status: "online"
        },

        {
            name: "Banco de Dados",
            status: "online"
        },

        {
            name: "Bot Discord",
            status: "maintenance"
        }

    ]

};

// ==============================
// CONTADOR DE TEMPO
// ==============================

let seconds = 0;

const updateText = document.querySelector(".overall-status span");

setInterval(() => {

    seconds++;

    if (seconds < 60) {

        updateText.textContent =
            `Última atualização: há ${seconds}s`;

    }

    else {

        const minutes = Math.floor(seconds / 60);

        updateText.textContent =
            `Última atualização: há ${minutes} min`;

    }

}, 1000);

// ==============================
// CONTADORES
// ==============================

function animateNumber(element, end, suffix = "") {

    let start = 0;

    const duration = 1200;

    const increment = end / (duration / 16);

    function update() {

        start += increment;

        if (start >= end) {

            start = end;

        }

        element.textContent =
            Math.floor(start) + suffix;

        if (start < end) {

            requestAnimationFrame(update);

        }

    }

    update();

}

const cards = document.querySelectorAll(".metric-card h2");

animateNumber(cards[1], 14, "ms");

animateNumber(cards[2], 0);

cards[0].textContent = statusData.uptime;

// ==============================
// HOVER DOS CARDS
// ==============================

document.querySelectorAll(".service-card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(255,255,255,.06),
        #0d0d0d 65%)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#0d0d0d";

    });

});

// ==============================
// STATUS GERAL
// ==============================

const overall = document.querySelector(".overall-status");

if(statusData.overall === "online"){

    overall.classList.add("online");

}

if(statusData.overall === "maintenance"){

    overall.classList.remove("online");

    overall.classList.add("maintenance");

}

if(statusData.overall === "offline"){

    overall.classList.remove("online");

    overall.classList.add("offline");

}

// ==============================
// SIMULAÇÃO
// (remover quando houver API)
// ==============================

console.log("%cNORTIVA STATUS",
"color:#00d26a;font-size:20px;font-weight:bold");

console.log("Todos os sistemas funcionando.");

console.log(statusData);

// ==============================
// FUTURA API
// ==============================

// fetch("/api/status")
// .then(res => res.json())
// .then(data => {
//
//     atualizar tudo automaticamente
//
// });
