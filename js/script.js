$(function(){ //Fonction d'attente du chargement du DOM

    $(window).on('scroll', function(){
        var scroll = $(this).scrollTop();

        if (scroll > 100) {
            $('header').addClass('header-scroll');
        } else {
            $('header').removeClass('header-scroll');
        };
    });

    /*
    $('[href="#presentation"]').on('click', function(){
        $('#presentation').css('')
    });
    */

}); //Fin fonction d'attente du chargement du DOM