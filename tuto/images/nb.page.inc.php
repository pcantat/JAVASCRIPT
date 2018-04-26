<?php
$choix_nom = (empty($_GET['choix_nom'])) ? '' : htmlspecialchars($_GET['choix_nom']);

    for ($i=1; $i <= ceil($totalimg/$PageSize); $i++){
        if (($i < $nb) OR ($i > ceil($totalimg/$PageSize) - $nb) OR (($i < $PageNum + $nb) AND ($i > $PageNum -$nb)))
		if ($i == $PageNum) $list_page[] = " $i ";
        else $list_page[] = "<a href=?type=".$type."&amp;id=".$id."&amp;dossier=".$dossier."&amp;PageNum=".$i."&amp;choix_nom=".$choix_nom."> ".$i." </a>";
        else{
            if ($i >= $nb AND $i <= $PageNum - $nb)
                $i = $PageNum - $nb;
            elseif ($i >= $PageNum + $nb AND $i <= ceil($totalimg/$PageSize) - $nb)
                $i = ceil($totalimg/$PageSize) - $nb;
            $list_page[] = '...';
        }
}
?>