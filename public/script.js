const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage("user", userMessage);
  input.value = "";

  // Create and append the thinking message, holding a reference to it.
  const thinkingMsg = document.createElement("div");
  thinkingMsg.classList.add("message", "bot");
  thinkingMsg.textContent = "Gemini is thinking...";
  chatBox.appendChild(thinkingMsg);
  chatBox.scrollTop = chatBox.scrollHeight;

  // Send user message to the backend
  fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: userMessage }),
  })
    .then((response) => {
      if (!response.ok) {
        // Try to get error message from backend, or use default
        return response.json().then((errData) => {
          throw new Error(errData.reply || "Network response was not ok");
        });
      }
      return response.json();
    })
    .then((data) => {
      // Update the thinking message directly with the final, parsed response.
      thinkingMsg.innerHTML = marked.parse(data.reply);
    })
    .catch((error) => {
      console.error("Error:", error);
      // Update the thinking message to show the error.
      thinkingMsg.textContent = `Sorry, something went wrong: ${error.message}`;
      thinkingMsg.classList.add("error");
    });
});

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  // Always use textContent here for simplicity and security.
  // Markdown parsing will be handled separately for the final bot response.
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}
