window.onload = initialize;

function initialize(){
    var FORM_NEWS = document.getElementById("form-news");
    FORM_NEWS.addEventListener("submit", validateFormNews);
}

function validateFormNews(event){
    var FORM_NEWS = event.target;

    var NAME = FORM_NEWS["username"].value;

    if(!NAME || NAME == ""){
        event.preventDefault();
        console.log("error: name required");
        document.getElementById("error-name-required").style.display = "block";
    } else {
        document.getElementById("error-name-required").style.display = "none";
    }

    var EMAIL = FORM_NEWS["email"].value;

    if(!EMAIL || EMAIL == ""){
        event.preventDefault();
        console.log("error: email required");
        document.getElementById("error-email-required").style.display = "block";
    } else {
        document.getElementById("error-email-required").style.display = "none";
    }

    var PASSWORD = FORM_NEWS["password"].value;

    if(!PASSWORD || PASSWORD == ""){
        event.preventDefault();
        console.log("error: Contraseña obligatoria");
        document.getElementById("error-password-required").style.display = "block";
    } else {
        document.getElementById("error-password-required").style.display = "none";
    }

    var PASSWORD_CONFIRM = FORM_NEWS["password-confirm"].value;

    if(!PASSWORD_CONFIRM || PASSWORD_CONFIRM == ""){
        event.preventDefault();
        console.log("error: Confirmación de la contraseña obligatorio");
        document.getElementById("error-password-confirm-required").style.display = "block";
    } else {
        document.getElementById("error-password-confirm-required").style.display = "none";
    }

    if(PASSWORD_CONFIRM != "" && PASSWORD != "" && PASSWORD != PASSWORD_CONFIRM){
        event.preventDefault();
        console.log("error: Las contraseñas deben coincidir");
        document.getElementById("error-password-match-required").style.display = "block";
    } else {
        document.getElementById("error-password-match-required").style.display = "none";
    }

    initialize();
}