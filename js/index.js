/// <reference types="../@types/jquery" />
///////////////////////////////////////////////////////

// start slide
$("#bars").on("click", function () {
    $("aside").animate({ width: "250px" }, 500)
    $(".home .all").animate({ marginLeft: "250px" }, 500)
})
$(".fa-xmark").on("click", function () {
    $("aside").animate({ width: "0px" }, 500)
    $(".home .all").animate({ marginLeft: "0px" }, 500)
})

$("aside a").on("click", function () {
    let aHref = $(this).attr("href")
    let sectionOffset = $(aHref).offset().top
    $("body,html").animate({ scrollTop: sectionOffset }, 2000)


})
// end slide


// start slide
$(".singers .singer1 h3").on("click", function () {
    $(".singers .singer1 p").slideToggle()
    $(".singers .singer2 p").slideUp()
    $(".singers .singer3 p").slideUp()
    $(".singers .singer4 p").slideUp()
})
$(".singers .singer2 h3").on("click", function () {
    $(".singers .singer2 p").slideToggle()
    $(".singers .singer1 p").slideUp()
    $(".singers .singer3 p").slideUp()
    $(".singers .singer4 p").slideUp()
})
$(".singers .singer3 h3").on("click", function () {
    $(".singers .singer3 p").slideToggle()
    $(".singers .singer2 p").slideUp()
    $(".singers .singer1 p").slideUp()
    $(".singers .singer4 p").slideUp()
})
$(".singers .singer4 h3").on("click", function () {
    $(".singers .singer4 p").slideToggle()
    $(".singers .singer2 p").slideUp()
    $(".singers .singer3 p").slideUp()
    $(".singers .singer1 p").slideUp()
})
// end slide


// start counter
var countDownDate = new Date("Nov 25, 2024 15:00:00").getTime();

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

    // Display the result in the element with id="demo"
    // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    //     + minutes + "m " + seconds + "s ";
    $("#days").text(days + " D")
    $("#hours").text(hours + " h")
    $("#min").text(minutes + " m")
    $("#sec").text(seconds + " s")

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        $("#days").text("Ended")
        $("#hours").text("Ended")
        $("#min").text("Ended")
        $("#sec").text("Ended")
        // document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

// end counter
// start textArea

function char() {
    let textArea = document.getElementById('message').value.length;
    let charactersLeft = 100 - textArea;
    // console.log(charactersLeft);
    if (charactersLeft > 0) {
        $("form p span").text(charactersLeft)
    }
    else {
        $("form p span").text("your available character finished")
    }

}
// end textArea