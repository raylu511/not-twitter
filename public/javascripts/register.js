const form = document.getElementById('register');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    fetch('/register', {
        method: 'POST',
        body: JSON.stringify({username, password})
    })
})