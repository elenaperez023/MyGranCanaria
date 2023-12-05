function initialize() {
    const GUESS_COMMENT_FORM = document.getElementById("news-form"); // Form id corrected
    GUESS_COMMENT_FORM.addEventListener("submit", manageSubmit);
  
    const NEWS = window.localStorage.getItem("news");
    if (NEWS) {
      const NEWS_ARRAY = JSON.parse(NEWS);
      console.log(NEWS_ARRAY[0].new);

      document.getElementById("data").innerHTML = NEWS_ARRAY[0].new;
    }
  }
  
  function manageSubmit(e) {
    e.preventDefault();
  
    const GUESS_COMMENT = document.getElementById("new-new").value;
    const NEWS = JSON.parse(window.localStorage.getItem("news")) || [];
    NEWS.push({ new: GUESS_COMMENT });
    window.localStorage.setItem("news", JSON.stringify(NEWS));
  }
  
  function getDataFromLocalStorage() {
    const NEWS = window.localStorage.getItem("news");
    if (NEWS) {
      const NEWS_ARRAY = JSON.parse(NEWS);
      console.log(NEWS_ARRAY);
    }
  }
  
  initialize();