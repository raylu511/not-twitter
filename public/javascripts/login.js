const form = document.getElementById('login')

form.addEventListener('submit', async(e) => {
    e.preventDefault();
    const username = document.getElementById('userName').value;
    const password = document.getElementById('pwd').value;
    fetch('/login', {
        method: 'POST', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        mode: 'no-cors',
        body: JSON.stringify({username, password}),
    }).then(response => console.log(response))
})