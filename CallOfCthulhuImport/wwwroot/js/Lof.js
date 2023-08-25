document.addEventListener("DOMContentLoaded", function () {
    const polaroids = document.querySelectorAll(".polaroid");
    polaroids.forEach((polaroid) => {
        const randomRotation = -2 + Math.random() * 4; // Rotate between -2deg and 2deg
        const randomTop = Math.random() * 2 + "vh"; // Random vertical position

        polaroid.style.setProperty("--rotation", randomRotation + "deg");
        polaroid.style.top = randomTop;
    });

    const fonts = [
        "Pacifico",
        "Dancing Script",
        "Indie Flower",
        "Patrick Hand",
        "Caveat",
        "Shadows Into Light"
    ];
    const colors = ["#ffeecc", "#ffddaa", "#ddffee", "#ffccdd", "#ccffee"];

    const paragraphs = document.querySelectorAll(".scrapbook p");
    paragraphs.forEach((p) => {
        const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomRotation = -1 + Math.random() * 2; // Rotate between -1deg and 2deg
        const randomFontSize = 14 + Math.random() * 4; // Font size between 14px and 18px
        const randomWidth = 60 + Math.random() * 40 + "%"; // Width between 60% and 100%
        const randomLeft = Math.random() * 10 + "%"; // Left position between 0% and 10%

        p.style.setProperty("--font", randomFont);
        p.style.setProperty("--bgcolor", randomColor);
        p.style.setProperty("--rotation", randomRotation);
        p.style.setProperty("--fontsize", randomFontSize + "px");
        p.style.width = randomWidth;
        p.style.left = randomLeft;
        p.classList.add("random");
    });
});