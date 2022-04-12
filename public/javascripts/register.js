const form = document.getElementById('register');

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log(username, password)
    const response = await fetch('/register', {
        method: 'POST', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({username, password}),
    });
    const data = await response.json();
    if (data) {
        location.assign('/');
    }
})