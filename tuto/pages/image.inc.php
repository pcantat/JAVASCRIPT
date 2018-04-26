<?php
session_start();
session_regenerate_id();
include('tbs_class.php');
include('var_url.inc.php');
require('scandir.inc.php');
$date =  '';
$heure = '';
$TBS = new clsTinyButStrong;
$TBS->LoadTemplate('../template/template.image.htm');
$TBS->MergeBlock('blk',$fichier) ;
$TBS->Show();
?>