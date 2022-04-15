const form = document.getElementById("login");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("userName").value;
  const password = document.getElementById("pwd").value;
  const usernameError = document.getElementById("username_error");
  const passwordError = document.getElementById("password_error");
  const response = await fetch("/login", {
    method: "POST", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  });
  const data = await response.json();
  if (data.message) {
    location.assign("/");
  } else if (data === "Username not found") {
    usernameError.style.display = "block";
    passwordError.style.display = "none";
  } else {
    usernameError.style.display = "none";
    passwordError.style.display = "block";
  }
});
