document.getElementById("submit").addEventListener("click", function () {
    const regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
    const charDecimal = /\d/;
    const charSpecial = /[$&@!]/;
    
    let messages = [];
    const mail = document.getElementById("email");
    const pwd = document.getElementById("password");
    const logMessagesList = document.getElementById('log-err');
    logMessagesList.innerHTML = "";

    const checkMail = regex.test(mail.value);
    let checkPwd = false;

    if(checkMail){
        console.log("true");
        mail.style.backgroundColor = "#3ff231";
    }else{
        console.log("Invalid email address.");
        mail.style.backgroundColor = "red";
    }    

    if(!charDecimal.test(pwd.value)){
        messages.push("Le mot de passe doit contenir au moins 1 chiffre.");
    }if(!charSpecial.test(pwd.value)){
        messages.push("Le mot de passe doit contenir au moins 1 caractère spécial ($, &, @, !).");
    }if((pwd.value).length < 8){
        messages.push("Le mdp est trop COURT");
    }else{checkPwd = true;}

    if(checkMail && checkPwd){
        location.replace("https://lol.eliteseries.gg/teams/ouat/");
    }

    messages.forEach(msg => {
        const pwdError = document.createElement("p");
        pwdError.textContent = msg;
        logMessagesList.appendChild(pwdError);
    });
});