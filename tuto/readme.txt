Galerie photo dynamique gérée par moteur template-------------------------------------------------
Url     : http://codes-sources.commentcamarche.net/source/44011-galerie-photo-dynamique-geree-par-moteur-templateAuteur  : darknessneoDate    : 02/08/2013
Licence :
=========

Ce document intitulé « Galerie photo dynamique gérée par moteur template » issu de CommentCaMarche
(codes-sources.commentcamarche.net) est mis à disposition sous les termes de
la licence Creative Commons. Vous pouvez copier, modifier des copies de cette
source, dans les conditions fixées par la licence, tant que cette note
apparaît clairement.

Description :
=============

Cette galerie photo dynamique s'actualise automatiquement lors des uploads d'ima
ges sur votre site. La page images scanne le r&eacute;pertoire qu'on lui demande
, en affiche tout les sous dossiers images trouv&eacute;s. Il suffit alors de cl
iquer sur le dossier choisi pour en afficher les images via des miniatures autom
atiquement cr&eacute;&eacute;es la premi&egrave;re fois que l'image est affich&e
acute;e.
<br />Il suffit ensuite de cliquer sur la miniature pour afficher l'im
age taille r&eacute;elle.
<br />
<br />Pour cela, il suffit de mettre un dossi
er contenant des images dans l'une des rubriques propos&eacute;es en exemple dan
s le ZIP. Par exemple, dans le dossier manga, j'ai mis un dossier DIVERS contena
nt 2 images. Mais vous pouvez mettre d'autres rubriques que manga ou celles prop
os&eacute;es.
<br />Lorsque vous ouvrez la page images.inc.php il suffit de raj
outer les variables souhait&eacute;es dans l'url comme ceci:
<br />images.inc.p
hp?id=manga&type=images
<br />
<br />type=images n'est d'autre que le nom du r
&eacute;pertoire qui contient les images, vous pouvez ainsi utiliser le code pou
r afficher d'autres dossiers.
<br />id=manga est le nom du dossier dans lequel 
vous souhaitez lire les sous dossiers. Vous pouvez remplacer manga par n'importe
 quel autre nom de dossier du moment que vous avez cr&eacute;es le dossier en qu
estion.
<br />Dans mon exemple, vous pouvez remplacer manga par: gsm, films, et
c etc le code va ensuite lister tout les dossiers pr&eacute;sents dans le r&eacu
te;pertoire choisi.
<br /><a name='conclusion'></a><h2> Conclusion : </h2>
<b
r />Explication d'installation:
<br />- Inutile de mettre forcement le r&eacute
;pertoire &agrave; la racine du site, il faut cependant mettre les 3 r&eacute;pe
rtoires &agrave; la m&ecirc;me hauteur.
<br />- Il vous suffit de faire des url
s qui pointent vers la page pages/images.inc.php en pr&eacute;cisant ce que vous
 voulez afficher (via un menu par exemple)
<br /> - pages/images.inc.php?id=man
ga&type=images
<br /> - pages/images.inc.php?id=jeux&type=images
<br />
<br /
>par d&eacute;faut il faudra tout le temps mettre images pour la variable type. 
Ceci vous permettra entre autre d'afficher des images d'autres dossiers que celu
i d'images
<br />la variable id permet de dire au code de lire les dossiers pr&
eacute;sents dans le dossier 'id' ici, manga ou jeux
<br />
<br />il vous suff
it ensuite de vous laisser guider par le code.
<br />
<br />NOTE:
<br />Quelq
ues petits points noirs:
<br />- si les images ne s'affichent pas:
<br /> - Vo
us avez des images bmp, par mesure d'efficacit&eacute;, je n'ai pas accept&eacut
e; ce format de fichier, de plus, je n'arrive pas &agrave; cr&eacute;er de minia
tures avec un fichier bmp
<br /> - Vos titres d'images ou de dossier contient d
es espaces. Remplacez les par _ ou -, mon script ne prend pas en compte les espa
ces.
<br />
<br />Bugs rencontr&eacute;s:
<br />Depuis pas mal de semaines, j
'utilise ce code que j'ai cr&eacute;e de toutes pi&egrave;ces, je n'ai plus aucu
ne erreur depuis longtemps, si vous rencontrez un bug, cela ne vient que du form
at de vos images ou des titres, convertissez vos images en cas de probl&egrave;m
e. Il n'ai deja arriv&eacute; d'avoir un bug avec des images jpg que j'ai reconv
erti dans le m&ecirc;me format. Cela r&eacute;solvait mon probl&egrave;me &agrav
e; chaque fois que je l'ai rencontr&eacute;. Cela provient des quelques format j
pg diff&eacute;rents: jpeg, jp2 etc etc.
<br />
<br />NOTE: Mon script fonctio
nne avec le moteur template TINYBUTSTRONG que vous trouverez ici <a href='http:/
/www.tinybutstrong.com/fr/' target='_blank'>http://www.tinybutstrong.com/fr/</a>

<br />Vous pouvez tester mon script d'images en fonctionnement r&eacute;el sur
 mon propre site:
<br /><a href='http://darkness.neo.free.fr' target='_blank'>h
ttp://darkness.neo.free.fr</a>
<br />je n'ai pas mis de lien direct parce que m
on code renvoi vers la page d'accueil si vous ne passez pas d'abord par elle lor
s du premier chargement de mon site.
<br />Cliquez sur une rubrique en haut du 
site pis sur images dans le menu gauche.
<br />
<br />Je pr&eacute;cise que mo
n ZIP ne contient aucun th&egrave;me ou style, cela afin que vous puissiez l'int
&eacute;grer plus rapidement dans votre site.
