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

        newNewInput.value = "";

        showNew();
    }
}

function showNew() {
    const NEW_LIST = document.getElementById("new-list");
    NEW_LIST.innerHTML = "";

    for (let i = 0; i < news.length; i++) {
        const ITEM_LIST = document.createElement("li");
        ITEM_LIST.textContent = `${news[i].new} - `;

        const DELETE_BUTTON = document.createElement("button");
        DELETE_BUTTON.textContent = "DELETE";
        DELETE_BUTTON.addEventListener("click", () => deleteNew(i));

        const EDIT_BUTTON = document.createElement("button");
        EDIT_BUTTON.textContent = "EDIT";
        EDIT_BUTTON.addEventListener("click", () => editNew(i));

        ITEM_LIST.appendChild(DELETE_BUTTON);
        ITEM_LIST.appendChild(EDIT_BUTTON);

        NEW_LIST.appendChild(ITEM_LIST);
    }
}

function deleteNew(newId) {
    news.splice(newId, 1);
    showNew();
}

function editNew(newId) {
    const NEW_CONTENT = prompt("Edit News:", news[newId].new);

    if (NEW_CONTENT !== null) {
        news[newId].new = NEW_CONTENT;
        showNew();
    }
}

initialize();
