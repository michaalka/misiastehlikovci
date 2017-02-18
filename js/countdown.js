// the date we're counting down to
var target_date = new Date(2017, 6, 17, 16, 0, 0, 0).getTime();

// variables for time units
var days, hours, minutes, seconds;

// get tag element
var countdown = document.getElementById('countdown');

// update the tag with id "countdown" every 1 second
setInterval(function () {

    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;

    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;

    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);

    // format countdown string + set tag value
    countdown.innerHTML = '<div class="row">'+
        '<div class="col-md-3 col-sm-6 col-xs-6"><span class="circle">' + days +  '<br><b>Dní</b></div> ' +
        '<div class="col-md-3 col-sm-6 col-xs-6"></span> <span class="circle">' + hours + '<br><b>Hodín</b></div>' +
        '<div class="col-md-3 col-sm-6 col-xs-6"></span> <span class="circle">'+ minutes + '<br><b>Minút</b></div>' +
        '<div class="col-md-3 col-sm-6 col-xs-6"></span> <span class="circle">' + seconds + '<br><b>Sekúnd</b></span></div>'+
        '</div>';

}, 1000);