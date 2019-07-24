(function($){
    "use strict";

    // Iniciar Contador
    $('.contar').counterUp({
        time: 1000,
        delay: 10
    });

    var $doc = $('html, body');
    $('.scroll').click(function(){
        $doc.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
})(jQuery);