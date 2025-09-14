let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

// Use an event listener for the button click
ctrlIcon.addEventListener("click", playPause);

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    } else {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}

// Add an event listener to update the progress bar continuously while the song plays
song.addEventListener('play', () => {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
});

// Update song time when the user drags the slider
progress.onchange = function() {
    song.currentTime = progress.value;
    song.play(); // Play the song after changing the time
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}