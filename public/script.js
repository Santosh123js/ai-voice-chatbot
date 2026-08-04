const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("message");
const output = document.getElementById("output");

sendBtn.addEventListener("click", async () => {

    const message = messageInput.value;

    if (message.trim() === "") {
        alert("Please enter a message");
        return;
    }

    const response = await fetch("/chat", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            message: message
        })

    });

    const data = await response.json();

    output.innerHTML = `
        <h3>Server Response</h3>
        <p>${data.message}</p>
        <p><strong>You Sent:</strong> ${data.data.message}</p>
    `;

});
