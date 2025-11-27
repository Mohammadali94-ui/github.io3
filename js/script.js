/* ===============================
   Retro Typewriter Interaction JS
   Author: YOU
   =============================== */

/* Promo button pop-up */
function showPromo() {
    alert("Special Offer: Free ribbon spool included with every purchase!");
}

/* Feedback form message */
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("feedbackForm");
    const message = document.getElementById("feedbackMessage");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            message.textContent = "Thank you for your feedback!";
        });
    }
});
