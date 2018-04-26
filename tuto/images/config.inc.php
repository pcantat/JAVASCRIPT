<?php
session_start();
session_regenerate_id();

$extensions_autorisees = array('jpg','jpeg','gif','png');
$type = htmlspecialchars($_GET['type']);
$id = htmlspecialchars($_GET['id']);
$dossier = htmlspecialchars($_GET['dossier']);
$dir = $id.'/'.$dossier.'/';
if (file_exists('001_v1.0/'.$dir . "tb/") == false AND !isset($PageNum)) mkdir ('001_v1.0/'.$dir . "tb/", 0777);
$PageNum = (isset($_GET['PageNum'])) ? htmlspecialchars($_GET['PageNum']) : 1;
include_once('../pages/tbs_class.php');
$TBS->NoErr = true;

$nb_max_par_page = 16;
$PageSize = $nb_max_par_page;
$editarray = $PageNum * $PageSize - ($PageSize - 1);
$max_par_page = $PageNum * $PageSize;
$nb = 4;
include('com.img.inc.php');
include('miniatures.inc.php');
include('lec.rec.img.inc.php');

include('nb.page.inc.php');

$TBS = new clsTinyButStrong ;
$TBS->LoadTemplate('../template/template.aff.img.htm');

$TBS->MergeBlock('blk1',$list_page) ;
$TBS->MergeBlock('bx',$data) ;
$TBS->MergeBlock('bz',$data) ;
$TBS->Show();

?>