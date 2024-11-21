const form = document.getElementById("illegalActivityForm");
const thankYouMessage = document.getElementById("thankYouMessage");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.style.display = "none";
    thankYouMessage.style.display = "block";
});

thankYouMessage.addEventListener("submit", (e) =>{
    e.preventDefault();
    thankYouMessage.style.display = "none";
    form.style.display = "block";
})