const form = document.getElementById("register");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("userName").value;
  const password = document.getElementById("pwd").value;
  const response = await fetch("/register", {
    method: "POST", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  if (data.name) {
    const errorMessage = document.getElementById('error_message');
    errorMessage.style.display = 'block';
    console.log(errorMessage)
  } else {
    location.assign("/login");
  }
});
