    /*--------------------------------------------------\
    |                                                   |
    |                                                   |
    |               ~ LA GESTION DU TEMPS  ~            |
    |                                                   |
    |                                                   |
    \--------------------------------------------------*/


    /**
     * La Fonction "settimeout" me permet de certifier une fonction à exécuter 
     * au bout d'une durée définie.
     * 
     */

     funtion(Hello) {
         alert('Bonjour toi !! Que fais-tu icic ?');
     }

     /**
      * 1. - La fonction à éxécuter.
      * 2. - La durée en millisecondes.
      */

     setTimeout(Hello, 3000);

     /**
      * La fonction : "setInterval" me permet d'éxécuter
      * une fonction à interval régulier
      */

     setInterval(Hello, 3000);

     