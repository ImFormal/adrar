<?php

include 'model/account.php';


function ajouterAccount(PDO $bdd) {
    $message = "";
    if(isset($_POST["submit"])) {
        if(!empty($_POST["firstname"]) && !empty($_POST["lastname"]) && !empty($_POST["email"]) && !empty($_POST["password"])) {
            
            $firstname = htmlspecialchars(trim($_POST["firstname"]));
            $lastname = htmlspecialchars(trim($_POST["lastname"]));
            $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
            $password = $_POST["password"];

            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $message = "Format d'email invalide.";
            } else {
                $account = getAccountByEmail($bdd, $email);
                if(!$account) {
                    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

                    addAccount($bdd, [$firstname, $lastname, $email, $hashedPassword]);

                    $message = "<p style='color:green;'>Le compte a été ajouté avec succès.</p>";
                } else {
                    $message = "<p style='color:red;'>Le compte existe déjà en BDD.</p>";
                }
            }
        } else {
            $message = "<p style='color:red;'>Veuillez remplir tous les champs.</p>";
        }
    }
    
    afficherAccount($bdd, $message);
}


function afficherAccount(PDO $bdd, string $message = "") {
    $accounts = getAllAccount($bdd);
    $users = "<ul>";

    if (!empty($accounts)) {
        foreach ($accounts as $account) {
            $users .= "<li>{$account['firstname']} {$account['lastname']} - {$account['email']}</li>";
        }
        $users .= "</ul>";
    } else {
        $users = "<p>Aucun utilisateur enregistré.</p>";
    }

    include 'vue/addAccount.php';
}