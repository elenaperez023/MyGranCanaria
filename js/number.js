function initialize(){
    const GUESS_COMMENT_FORM=document.getElementById("form-news");
    GUESS_COMMENT_FORM.addEventListener("submit", manageSubmit)
}

function manageSubmit(e){
    e.preventDefault();
    
    const GUESS_COMMENT= e.target["guess-name"].value;
    window.localStorage.setItem("data", GUESS_COMMENT);

    const NEWS=[
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
    window.localStorage.setItem("news", NEWS)
}

initialize();