const form = document.getElementById('login')

form.addEventListener('submit', async(e) => {
    e.preventDefault();
    const username = document.getElementById('userName').value;
    const password = document.getElementById('pwd').value;
    const response = await fetch('/login', {
        method: 'POST', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: username, password: password}),
    })
    const data = await response.json();
    if(data.message) {
      location.assign('/');
    }
  })