let userName = prompt("Please enter your name:");

if (userName !== null && userName.trim() !== "") {
    document.getElementById("greeting").innerText = "Hi, " + userName;
}

document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("userMessage").value.trim();

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("All fields must be filled!");
        return;
    }

    document.getElementById("result").innerHTML = `
        <h3>Submitted Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    document.getElementById("messageForm").reset();
});