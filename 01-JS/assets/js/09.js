    /*-------------------------------------------------\
    |                                                  |
    |                   LES BOUCLES                    |
    |                                                  |
    \ ------------------------------------------------*/ 
/* ---------------------------------
           LES BOUCLES 💀 ☠️
-----------------------------------*/

//-- La boucle FOR

/** 
 * Pour i est égal à 0 ; 
 * Tant que i est strictement inférieur ou égal à 10 ;
 * Alors j'incrémente i par pas de 1
 */

for(let i = 0 ; i <= 10 ; i++) {
    document.write('<p>Instruction Executée FOR : <strong>' + i + '</strong>');
}
document.write('<hr>');


//-- La Boucle WHILE   

/** 
 * Tant que j est strictement inférieur ou égal à 10 ;
 * Alors j'execute mes instructions 
 * Puis j'incrémente j par pas de 1
 */

var j=0
while(j<=10) {
    document.write('<p>Instruction Executée WHILE : <strong>' + j + '</strong>');
    //**ATTENTION A NE PAS OUBLIER L'INCREMENTATION SINON C'EST UNE BOUCLE INFINIE */
    j++;
}
document.write('<hr>');


//-- La Boucle FOREACH

Prenoms.forEach(affichePrenom);
function affichePrenom(valeur, i) {
    document.write('<p>Instruction Executée FOREACH : <strong>' + i + ' ' + '</strong>');
}

//-- La Boucle FOR OF
for(apotre of Prenoms) {console.log(apotre); }

 /**
  * Pour découvrir toutes les autres possibilités
  * de boucle : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Boucles_et_it%C3%A9ration
  */

  //-- Boucle Inverse
  for( let i = Prenoms.length ; i--;) {
      console.log(Prenoms[i]);
  }

  /**
   * https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Boucles_et_it%C3%A9ration
   * https://www.incredible-web.com/blog/performance-of-for-loops-with-javascript/
   */

