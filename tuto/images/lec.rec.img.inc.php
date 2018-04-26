<?php
$compteimg = 1;
if (is_dir('001_v1.0/'.$dir)) {
    if ($dh = opendir('001_v1.0/'.$dir)) {
        while (($file = readdir($dh)) !== false) {
        $ext = substr(strrchr($file, "."), 1);
          if (in_array(strtolower($ext),$extensions_autorisees)){
			  if ($editarray <= $max_par_page AND $editarray == $compteimg AND $editarray <= $totalimg) {
			  	if ($ext == "jpeg" OR $ext == "JPG" OR $ext == "JPEG") $ext = "jpg";
				if ($ext == "GIF") $ext = "gif";
				if ($ext == "PNG") $ext = "png";
			     miniature($file, '001_v1.0/'.$dir, $ext);
                 include('config.ext.inc.php');
                 $extname = "<img width=30 height=30 src=" . $ext . ".png> ".$nom.": " . str_replace("." . $ext, '', $file);
                 $taille = ceil(filesize('001_v1.0/'.$dir.$file)/1000) . " Ko";
                 $ress = imagesx($source)." x ".imagesy($source);
                 $data[] = array('image'=>"<a href=aff_images.php?dir=".$dir."&id=".$file."&ext=".$ext.' target=_blank><img src="001_v1.0/'.$dir.'tb/mini_'.$file.'" border="0"></a>', 'detail'=>$extname."<br>".$taille."<br>".$ress);
			     $editarray ++;
				 $compteimg++;				 
			     }
				 else {
				 $compteimg++;
				 }
			}}
      closedir($dh);
    }
}
?> 