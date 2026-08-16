
const form = document.querySelector(".feedback-form");
const textarea = form.elements.message;
const emailInput = form.elements.email;
const savedData = JSON.parse(localStorage.getItem("feedback-form-state")) || {};
const formData = {
    email: savedData.email || "",
    message: savedData.message || "",
};
textarea.value = savedData.message || "";
emailInput.value = savedData.email || "";

form.addEventListener("input", (e) => {
    formData[e.target.name] = e.target.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (emailInput.value.trim() === "" || textarea.value.trim() === "") {
        alert("Please fill in all fields.");
    }
    else {
        console.log(formData);
        localStorage.removeItem("feedback-form-state");
        form.reset();
    }
});
