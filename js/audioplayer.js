
$('.column').click(function() {
	$(this).toggleClass("active");
})
$(document).ready(function(){
    $('.play-btn').click(function() {
        if ( $(this).hasClass("fa-play") ) {
            $(this).removeClass("fa-play");
            $(this).addClass("fa-pause");
        } else {
            $(this).removeClass("fa-pause");
            $(this).addClass("fa-play");
        }
    });
    $('.column').click(function() {
        $(this).toggleClass("active");
    })
    $("#btn").click(function(){
        $("#project-wrapper").slideDown();
    })
});