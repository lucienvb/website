document.getElementById('background-video').addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
});
