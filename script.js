const openBtn = document.getElementById("openInvite");
const envelope = document.getElementById("envelope");
const invitation = document.getElementById("invitation");

openBtn.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {

        document.getElementById("openingScreen").style.display = "none";

        invitation.style.display = "block";

        setTimeout(() => {
            invitation.style.opacity = "1";
        }, 100);

    }, 1800);

});

const weddingDate = new Date("June 26, 2026 19:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();
    const gap = weddingDate - now;

    const days = Math.floor(gap / (1000*60*60*24));
    const hours = Math.floor((gap % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((gap % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((gap % (1000*60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

},1000);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".fade-up").forEach(el => {
    observer.observe(el);
});
