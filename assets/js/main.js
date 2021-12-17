// Set the date we're counting down to
var countDownDate = new Date("March 7, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("d_day").innerHTML = days
    document.getElementById("d_hour").innerHTML = hours
    document.getElementById("d_min").innerHTML = minutes
    document.getElementById("d_sec").innerHTML = seconds

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("d_day").innerHTML = "EXPIRED";
        document.getElementById("d_hour").innerHTML = "EXPIRED";
        document.getElementById("d_min").innerHTML = "EXPIRED";
        document.getElementById("d_sec").innerHTML = "EXPIRED";
    }
}, 1000);


// change color of navbar on scroll
var myNav = document.getElementById('mynav');
window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 200) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};

// scroll top
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(document).ready(function () {
    $('#t-1').addClass('actives');
    $('#t-1').click(function () {
        $('#t-2').removeClass('actives');
        $('#t-3').removeClass('actives');
        $('#t-4').removeClass('actives');
        $('#t-1').addClass('actives');
        $('#change1').show();
        $('#change2').hide();
        $('#change3').hide();
        $('#change4').hide();
    })
    $('#t-2').click(function () {
        $('#t-1').removeClass('actives');
        $('#t-2').addClass('actives');
        $('#change1').hide();
        $('#change2').show();
        $('#change3').hide();
        $('#change4').hide();
    })
    $('#t-3').click(function () {
        $('#t-1').removeClass('actives');
        $('#t-2').removeClass('actives');
        $('#t-3').addClass('actives');
        $('#change1').hide();
        $('#change2').hide();
        $('#change3').show();
        $('#change4').hide();
    })
    $('#t-4').click(function () {
        $('#t-1').removeClass('actives');
        $('#t-2').removeClass('actives');
        $('#t-3').removeClass('actives');
        $('#t-4').addClass('actives');
        $('#change1').hide();
        $('#change2').hide();
        $('#change3').hide();
        $('#change4').show();
    })
});