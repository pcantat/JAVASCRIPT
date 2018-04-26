<?php
ini_set("memory_limit","50M"); 
if ($ext == "jpg")	{ $source = imagecreatefromjpeg('001_v1.0/'.$dir . $file);}
elseif ($ext == "gif")	{ $source = imagecreatefromgif('001_v1.0/'.$dir . $file);}
else { $source = imagecreatefrompng('001_v1.0/'.$dir . $file);}
?>