$(window).load(function () {
    $('.fade-in').fadeOut(500);
    $('.preloader').delay("2000").fadeOut(500);
});



$(window).load(function () {

    var a = Math.random() + ""
    var rand1 = a.charAt(5)
    quotes = new Array
    quotes[1] = "A PIZZA IS JUST A SANDWICH"
    quotes[2] = "I'M BLUE"
    quotes[3] = "A HOTDOG IS A BURGER"
    quotes[4] = "DA BA DEE DA BA DAA"
    quotes[5] = "I'M PAV"
    quotes[6] = "TURNING ON THE LIGHTS"
    quotes[7] = "WAKING UP"
    quotes[8] = "IS IT FRIDAY YET?"
    quotes[9] = "GREGORY THE HOUSEPLANT"
    quotes[0] = "REVVING THE ENGINE"
    var quote = quotes[rand1]
    $('.loader-text').text(quote);

});

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

function playclip() {
    var audio = document.getElementById("audio-hover");
    audio.volume = 0.8;
    audio.play();
}

// PROJECT 1 //
$(function () {
    $('#project1-project, #project1-name, #project1-text, #project1-info').hover(function () {
        $('#project1-project, #project1-name').css('filter', 'invert(1)');
        $('#project1-text').css('display', 'none');
        $('#project1-info').css('display', 'block');
        $('#play-pause-button').css('filter', 'invert(0)');
    }, function () {
        // on mouseout, reset
        $('#project1-project, #project1-name').css('filter', '');
        $('#project1-text, #project1-info').css('display', '');
        $('#play-pause-button').css('filter', 'invert(1)');
    });
});

// PROJECT 2 //
$(function () {
    $('#project2-project, #project2-name, #project2-text, #project2-info').hover(function () {
        $('#project2-project, #project2-name').css('filter', 'invert(1)');
        $('#project2-text').css('display', 'none');
        $('#project2-info').css('display', 'block');
    }, function () {
        // on mouseout, reset
        $('#project2-project, #project2-name').css('filter', '');
        $('#project2-text, #project2-info').css('display', '');
    });
});

// PROJECT 3 //
$(function () {
    $('#project3-project, #project3-name, #project3-text, #project3-info').hover(function () {
        $('#project3-project, #project3-name').css('filter', 'invert(1)');
        $('#project3-text').css('display', 'none');
        $('#project3-info').css('display', 'block');
    }, function () {
        // on mouseout, reset
        $('#project3-project, #project3-name').css('filter', '');
        $('#project3-text, #project3-info').css('display', '');
    });
});


// PROJECT4 //
$(function () {
    $('#project4-project, #project4-name, #project4-text, #project4-info').hover(function () {
        $('#project4-project, #project4-name').css('filter', 'invert(1)');
        $('#project4-text').css('display', 'none');
        $('#project4-info').css('display', 'block');
    }, function () {
        // on mouseout, reset
        $('#project4-project, #project4-name').css('filter', '');
        $('#project4-text, #project4-info').css('display', '');
    });
});

// PROJECT 5 //
$(function () {
    $('#project5-project, #project5-name, #project5-text, #project5-info').hover(function () {
        $('#project5-project, #project5-name').css('filter', 'invert(1)');
        $('#project5-text').css('display', 'none');
        $('#project5-info').css('display', 'block');
    }, function () {
        // on mouseout, reset
        $('#project5-project, #project5-name').css('filter', '');
        $('#project5-text, #project5-info').css('display', '');
    });
});

// PROJECT 6 //
$(function () {
    $('#project6-project, #project6-name, #project6-text, #project6-info').hover(function () {
        $('#project6-project, #project6-name').css('filter', 'invert(1)');
        $('#project6-text').css('display', 'none');
        $('#project6-info').css('display', 'block');
    }, function () {
        // on mouseout, reset
        $('#project6-project, #project6-name').css('filter', '');
        $('#project6-text, #project6-info').css('display', '');
    });
});

// ABOUT //
$(function () {
    $('#about-project, #about-name').hover(function () {
        $('#about-project, #about-name').css('filter', 'invert(1)');
    }, function () {
        // on mouseout, reset
        $('#about-project, #about-name').css('filter', '');
    });
});