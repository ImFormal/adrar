import DOMPurify from 'isomorphic-dompurify';

const monTextArea = document.querySelector('#formMessage');
const monBtn = document.querySelector('#formSubmitBtn');
const monTxt = document.querySelector("textarea");
const rendu = document.querySelector("#renderTextEdit");
const zoneTxt = document.getElementById("zoneTxt");
const zoneRender = document.getElementById("zoneRender");
const savedText = localStorage.getItem("monSuperTexte") || "";
zoneTxt.value = savedText;

monTextArea.addEventListener('keyup', (event) => {
    monBtn.disabled = monTextArea.value.length >= 5 ? true : false;
});

monTxt.addEventListener("keyup", (keyEvent) => {
    rendu.innerHTML = DOMPurify.sanitize(marked(keyEvent.target.value));
});

if (savedText) {
    zoneRender.innerHTML = marked.parse(savedText);
}

zoneTxt.addEventListener("input", () => {
    localStorage.setItem("monSuperTexte", zoneTxt.value);
    zoneRender.innerHTML = DOMPurify.sanitize(marked.parse(zoneTxt.value));
});