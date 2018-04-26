<?php
session_start();
$id = (!isset($_GET['id'])) ? '' : htmlspecialchars($_GET['id']);
$type = (!isset($_GET['type'])) ? '' : htmlspecialchars($_GET['type']);
$dossier = (!isset($_GET['dossier'])) ? '' : htmlspecialchars($_GET['dossier']);
?>