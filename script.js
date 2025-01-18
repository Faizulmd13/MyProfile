document.addEventListener('DOMContentLoaded', function(){
    emailjs.init({
        publicKey:"x5slHze11D7IiDwdd",
    });

    const form = document.querySelector(".contact-form");
    form.addEventListener('submit', function(event){
        event.preventDefault();

        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        emailjs
            .send("service_muen9gt", "template_886uidm", formData)
            .then((response) => {
                console.log("Success: ", response);
                alert("Message sent succesfully!");
                form.reset();
            })
            .catch((error) => {
                console.error("Error: ", error);
                alert("Failed to send message.");
            });
        });
    });