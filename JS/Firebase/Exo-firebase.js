/**
 * Configuration de Firebase.
 * @type {Object}
 * @property {string} apiKey - La clé API de Firebase.
 * @property {string} authDomain - Le domaine d'authentification de Firebase.
 * @property {string} databaseURL - L'URL de la base de données Firebase.
 * @property {string} projectId - L'ID du projet Firebase.
 * @property {string} storageBucket - Le bucket de stockage Firebase.
 * @property {string} messagingSenderId - L'ID de l'expéditeur de messages Firebase.
 * @property {string} appId - L'ID de l'application Firebase.
 */
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBlfro8wb8dWyiCuUpw3c2vk0NSUXpomP0",
    authDomain: "projettest-3dff9.firebaseapp.com",
    databaseURL: "https://projettest-3dff9-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "projettest-3dff9",
    storageBucket: "projettest-3dff9.firebasestorage.app",
    messagingSenderId: "533866809754",
    appId: "1:533866809754:web:48fbd7fd8d31cf0b2ad223"
  };
/**
 * Initialisation de Firebase avec la configuration fournie.
 * @function initializeFirebase
 */
firebase.initializeApp(firebaseConfig);

/**
 * Référence à la base de données Firebase.
 * @type {Object}
 */
const dbRef = firebase.database().ref();

/**
 * Référence au noeud "tasks" dans la base de données.
 * @type {Object}
 */
const allTasksRef = dbRef.child("tasks");

/**
 * Référence au bouton d'ajout de tâche dans l'interface utilisateur.
 * @type {HTMLElement}
 */
const addBtnUI = document.querySelector('#addTaskButton');

/**
 * Référence à la liste des tâches dans l'interface utilisateur.
 * @type {HTMLElement}
 */
const tasksListUI = document.querySelector('#taskList');

/**
 * Ajoute un écouteur d'événements au bouton d'ajout de tâche.
 * @event click
 * @param {Function} addTask - Fonction appelée lors du clic sur le bouton.
 */
addBtnUI.addEventListener('click', addTask);

/**
 * Lit les données des tâches depuis la base de données et les affiche dans l'interface utilisateur.
 * @function readTasksData
 * @description Cette fonction vide la liste des tâches affichées, 
 * écoute les changements dans la base de données Firebase, 
 * crée des éléments de liste pour chaque tâche récupérée et les affiche dans l'interface utilisateur.
 */
readTasksData();

/**
 * Fonction pour lire les données des tâches depuis Firebase.
 * @function readTasksData
 * @description Cette fonction écoute les changements dans la base de données Firebase,
 * vide la liste des tâches affichées, crée des éléments de liste pour chaque tâche récupérée 
 * et les affiche dans l'interface utilisateur.
 */
function readTasksData() {
    allTasksRef.on('value', (snapshot) => {
        tasksListUI.innerHTML = "";
        snapshot.forEach((childSnapshot) => {
            console.log(childSnapshot);
            let key = childSnapshot.key;
            let dataValue = childSnapshot.val();
            console.log(dataValue);
            // On récupère la valeur de la donnée
            let taskElementUI = document.createElement('li');
            taskElementUI.className = 'list-group-item d-flex justify-content-between align-items-center m-1'; // Ajout des classes Bootstrap
            taskElementUI.textContent = `${dataValue.title}`;
            // Création de l'icône de suppression
            const deleteBtnUI = document.createElement('button');
            deleteBtnUI.className = 'btn btn-danger btn-sm'; // Classes Bootstrap 5
            deleteBtnUI.setAttribute('id-task', key);
            deleteBtnUI.innerText = 'Delete';
            deleteBtnUI.addEventListener('click', deleteTask); // Utilisation de addEventListener
            taskElementUI.appendChild(deleteBtnUI); // Ajout du bouton à l'élément de tâche
            tasksListUI.appendChild(taskElementUI);
        });
    });
}

/**
 * Ajoute une nouvelle tâche à la base de données.
 * @function addTask
 * @description Cette fonction récupère la valeur de l'input de tâche, 
 * crée un nouvel objet tâche avec cette valeur, 
 * l'ajoute à la base de données Firebase, 
 * vide l'input et met à jour l'affichage des tâches.
 */
function addTask() {
    const taskInputUI = document.querySelector('#taskInput');
    let newTask = {};
    newTask.title = taskInputUI.value;
    allTasksRef.push(newTask);
    taskInputUI.value = "";
    // readTasksData();
}

/**
 * Supprime une tâche de la base de données.
 * @function deleteTask
 * @description Cette fonction récupère l'ID de la tâche à supprimer, 
 * supprime l'objet correspondant dans la base de données Firebase, 
 * @param {Event} eventTaskId - L'événement de clic contenant l'ID de la tâche à supprimer.
 */
function deleteTask(eventTaskId) {
    console.log(eventTaskId);
    let taskId = eventTaskId.target.getAttribute('id-task');
    // Correction de la référence à la tâche
    let refToOneTask = allTasksRef.child(taskId); // Suppression de `tasks/`
    refToOneTask.remove();
    // readTasksData();
}