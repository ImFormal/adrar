<section>
    <h1>Ajouter un compte</h1>
    <form action="" method="post">
        <?= $message ?>

        <label for="name">Saisir le prénom : </label>
        <input type="text" name="firstname" required>

        <label for="name">Saisir le nom : </label>
        <input type="text" name="lastname" required>

        <label for="name">Saisir le mail : </label>
        <input type="email" name="email" pattern="\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,4}\b" required>

        <label for="name">Saisir le mot de passe : </label>
        <input type="password" name="password" required>

        <input type="submit" value="Ajouter" name="submit">
    </form>
</section>

<section>
    <h2>Listes des comptes</h2>
    <?php echo $users ?>
</section>