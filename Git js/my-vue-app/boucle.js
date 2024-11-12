const lesTxt = document.body.getElementsByTagName("p");
console.log(lesTxt);

let textesTab = Array.from(lesTxt);
console.log(textesTab);

let temp = "JE SUIS UN HACKERMAN";
textesTab.forEach((p) => {p.textContent = temp; p.style.color = "red"; p.style.cursor = "pointer"; p.addEventListener("click", () => alert("T'as cliqué lol !"))});
console.log(textesTab);