function changeTitle(){
    const Title = document.querySelector("h1");
    if(Title.textContent == "--🥳--")
        Title.addEventListener("click", (Title) => Title.textContent = "D.O.M Events");
    else
        Title.addEventListener("click", (Title) => Title.textContent = "--🥳--");
}

changeTitle();