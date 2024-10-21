/* Name: Maura Sweeney 
Class: CPSC 332
Assignment: HW6
Last Modified: 10/20/24 */

$(document).ready(function() {
    var seconds = "00";
    var tens = "00";

    // use jquery selector
    const $appendTens = $("#tens");
    const $appendSeconds = $("#seconds");
    const $buttonStart = $("#button-start");
    const $buttonStop = $("#button-stop");
    const $buttonReset = $("#button-reset");
    const $timer = $("#timer");
    var interval;
    $timer.addClass("timer-background");
    $buttonStart.addClass("button-style");
    $buttonStop.addClass("button-style");
    $buttonReset.addClass("button-style");
    const $body = $("body");


    $(".timer-background").css({
        "background-color": "lightgray",
        "font-size": "24px",
        "color": "black",
        "padding": "10px",
        "border-radius": "10px",
        "text-align": "center",
        "border-width": "2px",
        "border-color": "white"
    });

    $(".button-style").css({
        "background-color": "purple",
        "color": "white",
        "border": "none",
        "padding": "10px 20px",
        "border-radius": "10px",
        "font-size": "16px",
        "margin": "5px"
    });

    $(".wrapper").css({
        "background-image": "url('./background.jpg')",
        "border": "5px solid blac",
        "border-radius": "20px",
        "padding": "20px",
        "width": "250px",
        "text-align": "center",
        "color": "white",
        "width": "180px", 
        "background-size": "contain",
        "text-align": "center"
    });

    $buttonStart.on("click", function () {
        $(".timer-background").css("background-color", "green");
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
        opacityInterval = setInterval(startOpacityAnimation, 250);
    });

    $buttonStop.on("click", function () {
        $(".timer-background").css("background-color", "red");
        clearInterval(interval)
        clearInterval(opacityInterval);
        $(".timer-background").css("opacity", 1);
    });

    $buttonReset.on("click", function () {
        $(".timer-background").css("background-color", "lightgray");
        clearInterval(opacityInterval);
        $(".timer-background").css("opacity", 1);
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        $appendTens.html(tens);
        $appendSeconds.html(seconds);
    });

    function startTimer() {
        tens++;

        if (tens < 9) {
            $appendTens.html("0" + tens);
        }

        if (tens > 9) {
            $appendTens.html(tens);

        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            $appendSeconds.html("0" + seconds);
            tens = 0;
            $appendTens.html("0" + 0);
        }

        if (seconds > 9) {
            $appendSeconds.html(seconds);
        }
    }

    function startOpacityAnimation() {
        let opacity = $(".timer-background").css("opacity");
        let newOpacity = opacity == 1 ? 0.8 : 1;
        $(".timer-background").css("opacity", newOpacity);
    }
});