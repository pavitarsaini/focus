$(window).load(function () {
    var bg = document.getElementById("bg");
    bg.volume = 0.2;
    
    $('#play-pause-button').on("click", function () {
        if ($(this).hasClass('fa-volume-mute')) {
            $(this).removeClass('fa-volume-mute');
            $(this).addClass('fa-volume-up');
            bg.play();
        } else {
            $(this).removeClass('fa-volume-up');
            $(this).addClass('fa-volume-mute');
            bg.pause();
        }
    });

    bg.onended = function () {
        bg.play();
    };
});