let paths = [
    {
        path: "Tejeda",
    },
    {
        path: "Artenara",
    },
    {
        path: "Maspalomas",
    }
];

function initialize() {
    const PATH_FORM = document.getElementById("path-form");
    PATH_FORM.addEventListener("submit", addPath);

    showPath();
}
function addPath(event) {
    event.preventDefault();

    const newPathInput = document.getElementById("new-path");
    const newPath = newPathInput.value;

    if (newPath.trim() !== "") {
        paths.push({
            path: newPath,
        });

        newPathInput.value = ""; // Limpiar el campo después de agregar

        showPath();
    }
}

function showPath() {
    const PATH_LIST = document.getElementById("path-list");

    PATH_LIST.innerHTML = "";

    for (let i = 0; i < paths.length; i++) {
        PATH_LIST.innerHTML += `<li>${paths[i].path} - <button onclick="deletePath(${i})">DELETE</button></li>`;
    }
}

function deletePath(pathId) {
    paths.splice(pathId, 1);
    showPath();
}

initialize();
