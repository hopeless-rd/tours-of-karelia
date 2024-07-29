/* Modal */
document.getElementById("open-modal").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
});

document.getElementById("close-my-modal").addEventListener("click", function() {
    document.getElementById("my-modal").classList.remove("open")
});

window.addEventListener(`keydown`, (e)=> {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
});

document.querySelector("#my-modal .modal-box").addEventListener("click", event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener("click", event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove("open");
});

/* Wrapper */

document.getElementById("open-wrapper").addEventListener("click", function() {
    document.getElementById("my-wrapper").classList.add("open")
});

document.getElementById("close-my-wrapper").addEventListener("click", function() {
    document.getElementById("my-wrapper").classList.remove("open")
});

window.addEventListener(`keydown`, (e)=> {
    if (e.key === "Escape") {
        document.getElementById("my-wrapper").classList.remove("open")
    }
});

document.querySelector("#my-wrapper .wrapper-box").addEventListener("click", event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-wrapper").addEventListener("click", event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove("open");
});


document.getElementById("open-wrapper-btn").addEventListener("click", function() {
    document.getElementById("my-wrapper").classList.add("open")
});


