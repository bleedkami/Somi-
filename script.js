let currentPage = 0;
const pages = document.querySelectorAll(".page");
const bgMusic = document.getElementById("bg-music");

function nextPage() {
    if (currentPage < pages.length - 1) {
        pages[currentPage].classList.remove("active");
        currentPage++;
        pages[currentPage].classList.add("active");
    }
}

function prevPage() {
    if (currentPage > 0) {
        pages[currentPage].classList.remove("active");
        currentPage--;
        pages[currentPage].classList.add("active");
    }
}

function finishStory() {
    alert("Thank you for reading! ❤️");
}

function toggleMusic() {
    if (bgMusic.paused) {
        bgMusic.play();
        document.getElementById("music-btn").innerText = "Pause Music";
    } else {
        bgMusic.pause();
        document.getElementById("music-btn").innerText = "Play Music";
    }
}