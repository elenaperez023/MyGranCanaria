let news = [
    {
        new: "Gastronomía",
    },
    {
        new: "Naturaleza",
    },
    {
        new: "Economía",
    }
];

function initialize() {
    const NEWS_FORM = document.getElementById("news-form");
    NEWS_FORM.addEventListener("submit", addNew);

    showNew();
}
function addNew(event) {
    event.preventDefault();

    const newNewInput = document.getElementById("new-new");
    const newNew = newNewInput.value;

    if (newNew.trim() !== "") {
        news.push({
            new: newNew,
        });

        newNewInput.value = ""; // Limpiar el campo después de agregar

        showNew();
    }
}

function  showNew() {
    const NEW_LIST = document.getElementById("new-list");
    NEW_LIST.innerHTML = "";

    for (let i = 0; i < news.length; i++) {NEW_LIST.innerHTML += `<li>${news[i].new} - <button onclick="deleteNew(${i})">DELETE</button></li>`;
    }
}

function deleteNew(newId) {
    news.splice(newId, 1);
    showNew();
}

initialize();
