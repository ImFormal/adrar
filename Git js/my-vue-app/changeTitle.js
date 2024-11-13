function changeTitle() {
    const title = document.querySelector("h1");

    title.addEventListener("click", function(){
        if(title.textContent === "--🥳--"){title.textContent = "D.O.M Events";}
        else{title.textContent = "--🥳--";}
    });
}

changeTitle();