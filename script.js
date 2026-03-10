function scrollProgram() {
    document.getElementById("program").scrollIntoView({
        behavior: "smooth"
    });
}

// Form Submission Handling
document.getElementById("formDaftar").addEventListener("submit", function (e) {
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let program = document.getElementById("programSelect").value;

    if (nama === "" || email === "" || program === "") {
        alert("Harap isi semua data terlebih dahulu!");
        return;
    }

    alert("Pendaftaran berhasil! Kami akan menghubungi anda.");
});

// Scroll Reveal Animations
document.addEventListener("DOMContentLoaded", function () {
    const reveals = document.querySelectorAll(".reveal");

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});