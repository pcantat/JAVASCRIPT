<?php
$totalimg = 0;
if (is_dir('001_v1.0/'.$dir)) {
    if ($dh = opendir('001_v1.0/'.$dir)) {
        while (($file = readdir($dh)) !== false) {
$ext = substr(strrchr($file, "."), 1);
if (in_array(strtolower($ext),$extensions_autorisees)){
           $totalimg ++;
}}}
        closedir($dh);
}

?>