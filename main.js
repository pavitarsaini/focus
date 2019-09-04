// PROJECT 1 //
$(function() {
  $('#project1-project, #project1-name, #project1-text, #project1-info').hover(function() {
    $('#project1-project, #project1-name').css('filter', 'invert(1)');
            $('#project1-text').css('display', 'none');   
                $('#project1-info').css('display', 'block');
  }, function() {
    // on mouseout, reset
    $('#project1-project, #project1-name').css('filter', '');
        $('#project1-text, #project1-info').css('display', '');
  });
});

$(function() {
  $('#project1-project, #project1-name, #project1-info').click(function () {
    $('#modal-container').modal('show').find('.modal-content').load($(this).attr('href'));
  });
});

// PROJECT 2 //
$(function() {
  $('#project2-project, #project2-name, #project2-text, #project2-info').hover(function() {
    $('#project2-project, #project2-name').css('filter', 'invert(1)');
            $('#project2-text').css('display', 'none');   
                $('#project2-info').css('display', 'block');
  }, function() {
    // on mouseout, reset
    $('#project2-project, #project2-name').css('filter', '');
        $('#project2-text, #project2-info').css('display', '');
  });
});

$(function() {
  $('#project2-project, #project2-name, #project2-info').click(function () {
    $('#modal-container').modal('show').find('.modal-content').load($(this).attr('href'));
  });
});

// PROJECT 3 //
$(function() {
  $('#project3-project, #project3-name, #project3-text, #project3-info').hover(function() {
    $('#project3-project, #project3-name').css('filter', 'invert(1)');
            $('#project3-text').css('display', 'none');   
            $('#project3-info').css('display', 'block');
  }, function() {
    // on mouseout, reset
    $('#project3-project, #project3-name').css('filter', '');
        $('#project3-text, #project3-info').css('display', '');
  });
});

$(function() {
  $('#project3-project, #project3-name, #project3-info').click(function () {
    $('#modal-container').modal('show').find('.modal-content').load($(this).attr('href'));
  });
});

// PROJECT4 //

$(function() {
  $('#project4-project, #project4-name, #project4-text, #project4-info').hover(function() {
    $('#project4-project, #project4-name').css('filter', 'invert(1)');
            $('#project4-text').css('display', 'none');   
                $('#project4-info').css('display', 'block');
  }, function() {
    // on mouseout, reset
    $('#project4-project, #project4-name').css('filter', '');
        $('#project4-text, #project4-info').css('display', '');
  });
});

$(function() {
  $('#project4-project, #project4-name, #project4-info').click(function () {
    $('#modal-container').modal('show').find('.modal-content').load($(this).attr('href'));
  });
});

// PROJECT 5 //

$(function() {
  $('#project5-project, #project5-name, #project5-text, #project5-info').hover(function() {
    $('#project5-project, #project5-name').css('filter', 'invert(1)');
            $('#project5-text').css('display', 'none');   
                $('#project5-info').css('display', 'block');
  }, function() {
    // on mouseout, reset
    $('#project5-project, #project5-name').css('filter', '');
        $('#project5-text, #project5-info').css('display', '');
  });
});

$(function() {
  $('#project5-project, #project5-name, #project5-info').click(function () {
    $('#modal-container').modal('show').find('.modal-content').load($(this).attr('href'));
  });
});

// PROJECT 6 //
$(function() {
  $('#project6-project, #project6-name, #project6-text, #project6-info').hover(function() {
    $('#project6-project, #project6-name').css('filter', 'invert(1)');
            $('#project6-text').css('display', 'none');   
                $('#project6-info').css('display', 'block');
  }, function() {
    // on mouseout, reset
    $('#project6-project, #project6-name').css('filter', '');
        $('#project6-text, #project6-info').css('display', '');
  });
});

$(function() {
  $('#project6-project, #project6-name, #project6-info').click(function () {
    $('#modal-container').modal('show').find('.modal-content').load($(this).attr('href'));
  });
});

// ABOUT //

$(function() {
  $('#about-project, #about-name').hover(function() {
    $('#about-project, #about-name').css('filter', 'invert(1)');
  }, function() {
    // on mouseout, reset
    $('#about-project, #about-name').css('filter', '');
  });
});

