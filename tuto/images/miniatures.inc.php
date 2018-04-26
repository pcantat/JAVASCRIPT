<?php
ini_set("memory_limit","50M");
function miniature($picture,$rep,$fext)
 {
  if (file_exists($rep . "tb/mini_" . $picture) == false) {
	if ($fext == "jpg" OR $ext == "jpeg")	{ $source = imagecreatefromjpeg($rep . $picture);}
	elseif ($fext == "gif")	{ $source = imagecreatefromgif($rep . $picture);}
    else { $source = imagecreatefrompng($rep . $picture);}
	$destination = imagecreatetruecolor(150, 100);
    $largeur_source = imagesx($source);
    $hauteur_source = imagesy($source);
    $largeur_destination = imagesx($destination);
    $hauteur_destination = imagesy($destination);
    imagecopyresampled($destination, $source, 0, 0, 0, 0, $largeur_destination, $hauteur_destination, $largeur_source, $hauteur_source);
    imagejpeg($destination, $rep . 'tb/mini_' . $picture);
    }
 }
?>