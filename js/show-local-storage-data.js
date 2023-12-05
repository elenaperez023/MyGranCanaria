function initialize(){
    const NEWS =window.localStorage.getItem("Gastronomía");

    let NEW= JSON.parse(NEWS);
    console.log(NEWS [0].NEW);

    document.getElementById("data").innerHTML=NEWS[0].NEW;
}

initialize();