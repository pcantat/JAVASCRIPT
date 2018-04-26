<?php
session_start();
include_once('../pages/tbs_class.php');
$id = (empty($_GET['id'])) ? '' : htmlspecialchars($_GET['id']);
$dossier = "001_v1.0/";
$image = '../images/'.$dossier.$_GET['dir'].$id;
$TBS = new clsTinyButStrong;
$TBS->LoadTemplate('../template/template.affichage.image.htm');
$TBS->Show();
?>
