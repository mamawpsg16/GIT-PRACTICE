document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    const options = {
        root: null, // relative to the viewport
        rootMargin: "0px",
        threshold: 0.5 // trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(`${entry.target.id} is in view`);
                entry.target.style.border = "5px solid red";
                // observer.unobserve(entry.target); // Uncomment if you only want to observe once
            } else {
                entry.target.style.border = "1px solid black";
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
