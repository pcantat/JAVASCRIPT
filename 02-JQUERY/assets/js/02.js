/**
 * --------------------------------
 * 
 *      LES SELECTEURS JQUERY
 * 
 * --------------------------------
 */

// -- Format : $('selecteur')
// -- En jQuery, tous les sélécteurs CSS sont disponibles....


$(function(){
    l = e =>console.log(e);

    // -- Séléctionner les balises SPAN
    l(document.getElementsByTagName('span'));
    l($('span'));

    // - Sélectionner mon menu gràce à son ID
    l(document.getElementById('menu'));
    l($('menu'));

    // - Sélectionner un élément gràce à sa Classe
    l(document.getElementsByClassName('MaClasse'));
    l($('MaClasse'));

    // -- Sélectionner un attribut
    l($('[href="#"]'));
});




