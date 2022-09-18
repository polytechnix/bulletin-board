$(document).ready(function() {
    // scroll-to button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#button-up').fadeIn();
        } else {
            $('#button-up').fadeOut();
        }
    });
        
    $('#button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    	return false;
    });
});
