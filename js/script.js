function sendEmail(event) {
    event.preventDefault();
    const templateParams = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
    };
    emailjs
        .send("service_1t2353f", "template_ptdjfpp", templateParams)
        .then(() => {
            alert("Email sent Successfully!");
        })
        .catch((error) => {
            console.log("Error sending email: ", error);
            alert("Failed to send email. Try again.");
        });
}
