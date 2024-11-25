// DOM Elements
const playerHealthBar = document.getElementById('player-health');
const monsterHealthBar = document.getElementById('monster-health');
const logMessagesList = document.getElementById('log-messages');
const gameOverSection = document.getElementById('game-over');
const winnerMessage = document.getElementById('winner-message');
const restartButton = document.getElementById('restart-button');
const attackButton = document.getElementById('attack-button');
const specialAttackButton = document.getElementById('special-attack-button');
const healButton = document.getElementById('heal-button');
const surrenderButton = document.getElementById('surrender-button');
const controls = document.getElementById('controls');

let playerHealth = 100;
let monsterHealth = 100;
let currentRound = 0;
let logMessages = [];
let lastUse = 3;

// Utility functions
/**
 * Met à jour les barres de santé du joueur et du monstre.
 * Ajuste la largeur des barres de santé en fonction des points de vie restants,
 * en s'assurant qu'elles ne descendent pas en dessous de 0%.
 *
 * @function
 * @global
 * @returns {void} Ne retourne aucune valeur.
 */
function updateHealthBars() {
    if (playerHealth >= 0) {
        playerHealthBar.style.width = `${playerHealth}%`;
        if (playerHealth >= 50) {
            playerHealthBar.style.backgroundColor = "lime"; 
        } else if (playerHealth < 50 && playerHealth >= 20) {
            playerHealthBar.style.backgroundColor = "yellow"; 
        } else {
            playerHealthBar.style.backgroundColor = "red";
        }
    } else {
        playerHealthBar.style.width = `${0}%`;
    }

    const playerText = document.querySelector("#player h2");
    playerText.textContent = playerHealth <= 0 ? "Player 💀" : "Player ❤️";

    if (monsterHealth >= 0) {
        monsterHealthBar.style.width = `${monsterHealth}%`;
        if (monsterHealth >= 50) {
            monsterHealthBar.style.backgroundColor = "lime"; 
        } else if (monsterHealth < 50 && monsterHealth >= 20) {
            monsterHealthBar.style.backgroundColor = "yellow"; 
        } else {
            monsterHealthBar.style.backgroundColor = "red";
        }
    } else {
        monsterHealthBar.style.width = `${0}%`;
    }

    const monsterText = document.querySelector("#monster h2");
    monsterText.textContent = monsterHealth <= 0 ? "Monstre 💀" : "Monstre ❤️";
}

/**
 * Ajoute un message de log à l'historique de la bataille.
 * Le message indique qui a effectué une action (joueur ou monstre), le type d'action
 * (attaque ou soin), et la valeur associée. Le message est formaté et inséré en haut de la liste des logs.
 *
 * @function
 * @param {string} who - Indique l'entité ayant effectué l'action. Les valeurs possibles sont `'player'` ou `'monster'`.
 * @param {string} action - Le type d'action effectuée. Les valeurs possibles sont `'heal'` (pour un soin) ou autre (pour une attaque).
 * @param {number} value - La valeur associée à l'action (dégâts ou points de soin).
 * @returns {void} Ne retourne aucune valeur.
 */
function addLogMessage(who, action, value) {
    let message = "";
  
    switch (action) {
      case "attck":
        message = `${who} a attaqué son adversaire pour ${value} dégats !`;
        break;
      case "heal":
        message = `${who} se soigne. Il récupère ${value} points de vie !`;
        break;
      case "special":
        message = `${who} utilise son attaque spécial et inflige ${value} dégats`;
        break;
    }
    const p = document.createElement("p");
    p.textContent = message;
    logMessagesList.append(p);
  }

/**
 * Vérifie l'état de santé du joueur et du monstre pour déterminer le gagnant de la partie.
 * 
 * La fonction évalue la vie restante du joueur et du monstre pour déterminer qui a gagné, perdu ou si c'est un match nul.
 * - Si les points de vie du joueur et du monstre sont tous deux inférieurs ou égaux à 0, la fonction déclare un "match nul".
 * - Si les points de vie du joueur sont inférieurs ou égaux à 0, la fonction déclare que le joueur a perdu.
 * - Si les points de vie du monstre sont inférieurs ou égaux à 0, la fonction déclare que le joueur a gagné.
 * 
 * La fonction met également à jour l'affichage du message de fin de jeu et la section de fin de jeu en fonction du résultat.
 *
 * @function
 * @returns {void} Ne retourne aucune valeur. Modifie l'interface utilisateur en fonction du résultat du jeu.
 */
function checkWinner() {
    if(playerHealth <= 0 || monsterHealth <= 0){
        gameOverSection.style.display = 'flex' ;
        gameOverSection.style.justifyContent = "center";
        controls.style.display = 'none' ;
        if(playerHealth <= 0 && monsterHealth > playerHealth){
            winnerMessage.innerText = 'PERDU';
        } else if(monsterHealth <= 0 && playerHealth > monsterHealth){
            winnerMessage.innerText = 'GAGNÉ';
        }
    }
}

/**
 * Réinitialise les données et l'interface du jeu pour commencer une nouvelle partie.
 * - Restaure les points de vie des deux combattants à leur valeur initiale.
 * - Réinitialise le nombre de rounds et vide les messages de log.
 * - Met à jour les barres de santé et masque la section de fin de jeu.
 * - Désactive le bouton d'attaque spéciale.
 *
 * @function
 * @returns {void} Ne retourne aucune valeur.
 */
function resetGame() {
    playerHealth = 100;
    monsterHealth = 100;
    currentRound = 0;
    logMessages = [];
    logMessagesList.innerHTML = "";
    lastUse = 3;
    winnerMessage.innerText = '';
    gameOverSection.style.display = 'none' ;
    controls.style.display = 'flex' ;
    updateSpecialAttackButton();
    updateHealthBars();

}

// Actions
/**
 * Gère l'attaque du joueur contre le monstre.
 * - Incrémente le nombre de rounds.
 * - Calcule une valeur aléatoire pour l'attaque et réduit la santé du monstre.
 * - Ajoute un message de log pour l'action du joueur.
 * - Déclenche une contre-attaque par le monstre.
 * - Vérifie si un gagnant peut être déterminé.
 * - Met à jour l'état du bouton d'attaque spéciale.
 *
 * @function
 * @returns {void} Ne retourne aucune valeur.
 */
const getRandomValue = (min, max) =>{
    return Math.floor(Math.random() * (max - min) + min)
}

function attackMonster() {
    currentRound++;
    let attck = getRandomValue(10,15);
    monsterHealth -= attck;
    addLogMessage("player", "attck", attck);
    attackPlayer();
    checkWinner();
    updateSpecialAttackButton();
}

/**
 * Gère l'attaque du monstre contre le joueur.
 * - Calcule une valeur aléatoire pour l'attaque et réduit la santé du joueur.
 * - Ajoute un message de log pour l'action du monstre.
 * - Vérifie si un gagnant peut être déterminé.
 * - Met à jour les barres de santé à l'écran.
 *
 * @function
 * @returns {void} Ne retourne aucune valeur.
 */
function attackPlayer() {
    let attck = getRandomValue(15,20);
    playerHealth -= attck;
    addLogMessage("adversaire", "attck", attck);
    checkWinner();
    updateHealthBars();
}

/**
 * Gère l'attaque spéciale du joueur contre le monstre.
 * - Augmente le compteur de rounds.
 * - Calcule une valeur d'attaque spéciale aléatoire et réduit la santé du monstre.
 * - Ajoute un message de log pour l'attaque spéciale du joueur.
 * - Déclenche une contre-attaque du monstre.
 * - Vérifie si un gagnant peut être déterminé.
 * - Met à jour l'état du bouton d'attaque spéciale.
 *
 * @function
 * @returns {void} Ne retourne aucune valeur.
 */
function specialAttackMonster() {
    currentRound++;
    let attck = Math.floor(getRandomValue(20, 25));
    monsterHealth -= attck;
    addLogMessage("player", "special", attck);
    attackPlayer();
    checkWinner();
    updateHealthBars();
    lastUse = 3;
    updateSpecialAttackButton();
}

/**
 * Permet au joueur de se soigner.
 * - Augmente le compteur de rounds.
 * - Calcule une valeur de soin aléatoire et augmente la santé du joueur, sans dépasser 100.
 * - Ajoute un message de log pour l'action de soin.
 * - Déclenche une attaque du monstre en réponse.
 * - Vérifie si un gagnant peut être déterminé.
 * - Met à jour les barres de santé affichées.
 *
 * @function
 * @returns {void} Ne retourne aucune valeur.
 */
function healPlayer() {
    currentRound++;
    const healValue = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
    playerHealth = Math.min(playerHealth + healValue, 100);
    addLogMessage("player", "heal", healValue);
    attackPlayer();
    updateHealthBars();
    checkWinner();
    updateSpecialAttackButton();
}; 

/**
 * Permet au joueur d'abandonner la partie.
 * - Déclare le monstre comme gagnant en affichant un message de défaite.
 * - Affiche la section de fin de jeu.
 *
 * @function
 * @returns {void} Ne retourne aucune valeur.
 */
function surrenderGame() {
    // Déclare le monstre comme gagnant en affichant un message de défaite
    winnerMessage.textContent = "PERDU";
    gameOverSection.style.display = "flex";
    gameOverSection.style.justifyContent = "center";
    resetGame();
}

// Special attack availability
/**
 * Met à jour l'état du bouton d'attaque spéciale en fonction du nombre de rounds.
 * - Le bouton d'attaque spéciale est activé tous les 3 tours. 
 * - Si le tour courant n'est pas un multiple de 3, le bouton est désactivé.
 *
 * @function
 * @returns {void} Ne retourne aucune valeur.
 */
function updateSpecialAttackButton() {
    if (lastUse == 0) {
        specialAttackButton.disabled = false;
    } else {
        specialAttackButton.disabled = true;
        lastUse -= 1;
    }
}

// Event Listeners
attackButton.addEventListener('click', attackMonster);
specialAttackButton.addEventListener('click', specialAttackMonster);
healButton.addEventListener('click', healPlayer);
surrenderButton.addEventListener('click', surrenderGame);
restartButton.addEventListener('click', resetGame);

// Initialize Game
resetGame();