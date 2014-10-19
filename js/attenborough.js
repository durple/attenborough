document.addEventListener("DOMContentLoaded", function () {
    var popcorn = Popcorn("#audio-player");
    popcorn.image({
        id: "image1",
        start: 10,
        end: 54,
        target: "footnotediv",
        src: "http://upload.wikimedia.org/wikipedia/commons/c/c0/STS_100_Hadfield_EVA.jpg"
    });

    popcorn.footnote({
        start: 60,
        end: 80,
        target: "footnotediv",
        text: "Pop"
    });
    popcorn.footnote({
        start: 85,
        end: 170,
        target: "footnotediv",
        text: "Pop Again!"
    });
    popcorn.play();

}, false);