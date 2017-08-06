// the date we're counting down to
var target_date = new Date('Jun 17 2017 16:00:00').getTime();

// variables for time units
var $days = $('.countdownDays');
var $hours = $('.countdownHours');
var $minutes = $('.countdownMinutes');
var $seconds = $('.countdownSeconds');
// update the tag with id "countdown" every 1 second
setInterval(function () {
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (current_date - target_date) / 1000;

    // do some time calculations
    $days.html(parseInt(seconds_left / 86400));
    seconds_left = seconds_left % 86400;

    $hours.html(parseInt(seconds_left / 3600));
    seconds_left = seconds_left % 3600;

    $minutes.html(parseInt(seconds_left / 60));
    $seconds.html(parseInt(seconds_left % 60));
}, 1000);