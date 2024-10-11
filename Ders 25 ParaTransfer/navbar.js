const nawbar = document.querySelector(".nav");

allEvents();

function allEvents() {
    nawbar.addEventListener("mouseenter", () => {
        const h1 = nawbar.querySelector("h1");
        h1.innerHTML = "Powered by Osman";
        h1.classList.add("transition");
    });

    nawbar.addEventListener("mouseleave", () => {
        const h1 = nawbar.querySelector("h1");
        h1.innerHTML = "Anlık Döviz";
        h1.classList.remove("transition");
    });
}