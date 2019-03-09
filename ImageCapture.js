let video = document.getElementById("video");
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

function snap() {
    $('#popup').modal("hide");
    $('#capture').modal("show");
    $('#pre').hide();
    $('#retake').hide();
    $('#done').hide();


    navigator.getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.oGetUserMedia ||
        navigator.msGetUserMedia;

    if (navigator.getUserMedia) {
        navigator.getUserMedia({
            video: true
        }, streamVideo, throwError);

        function streamVideo(stream) {
            video.srcObject = stream;
            video.play();
        }

        function throwError(e) {
            alert(e.name);
        }
    }
}

function shoot() {
    document.getElementById('video').style.display = 'none';
    document.getElementById('pre').style.display = 'block';
    document.getElementById('retake').style.display = 'inline';
    document.getElementById('done').style.display = 'inline';
    document.getElementById('capturebtn').style.display = 'none';


    context.drawImage(video, 0, 0);
};