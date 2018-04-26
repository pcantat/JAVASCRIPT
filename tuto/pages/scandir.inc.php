<?php
$dir = '../'.$type.'/'.'001_v1.0'.'/'.$id.'/';
$fichier = array();
if (is_dir($dir)) {
    if ($dh = opendir($dir)) {
        while (($file = readdir($dh)) !== false) {
		if(filetype($dir . $file) == "dir" AND $file !== "." AND $file !== ".." AND $file !== "tb" AND $file !== "_notes"){
$file = '<a href="../'.$type.'/config.inc.php?type='.$type.'&amp;id='.$id.'&amp;dossier='.$file.'" target="_blank">'.$file.'</a>';
array_push($fichier, $file);
        }}
        closedir($dh);
    }
}
natcasesort($fichier);
?>