const form = document.getElementById('register');

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const username = document.getElementById('userName').value;
    const password = document.getElementById('pwd').value;
    const response = await fetch('/register', {
        method: 'POST', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({username, password}),
    });
    const data = await response.json();
    if (data.name) {
      console.log("Username exists")
    } else {
      location.assign('/login');
    }
})