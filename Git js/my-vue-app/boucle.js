const lesTxt = document.body.getElementsByTagName("p");
console.log(lesTxt);

let textesTab = Array.from(lesTxt);
console.log(textesTab);

let temp = "JE SUIS UN HACKERMAN";
textesTab.forEach((p) => {p.textContent = temp; p.style.color = "red";});
console.log(textesTab);