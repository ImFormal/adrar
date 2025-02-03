<?php
session_start();
include 'model/account.php';

if (!isset($_SESSION['user'])) {
    header("Location: index.php");
    exit();
}

$user = $_SESSION['user'];
include 'vue/viewMyAccount.php';
