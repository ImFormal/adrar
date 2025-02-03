<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Site PHP</title>
</head>
<header>
    <nav>
        <ul>
            <li><a href="index.php">Accueil</a></li>
            <?php if (isset($_SESSION['user'])): ?>
                <li><a href="myAccount.php">Mon Compte</a></li>
                <li><a href="deco.php">Déconnexion</a></li>
            <?php else: ?>
                <li><a href="addAccount.php">Se connecter / S'inscrire</a></li>
            <?php endif; ?>
        </ul>
    </nav>
</header>
<body>
