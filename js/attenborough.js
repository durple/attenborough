document.addEventListener( "DOMContentLoaded", function() {
    var popcorn = Popcorn("#audio-player");
    popcorn.footnote({
        start: 2,
        end: 5, 
        target: "footnotediv",
        text: "Pop"
    });
    popcorn.footnote({
        start: 10,
        end: 15,
        target: "footnotediv",
        text: "Pop Again!"
    })
    popcorn.play()

}, false);
