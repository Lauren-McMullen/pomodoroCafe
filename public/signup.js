async function createUser(e) {
    e.preventDefault();

    const username = document.getElementById('username-input').value;
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;
    const confirmPassword = document.getElementById('confirm-password-input').value;
  
    
    if(password != confirmPassword) {
        alert('entered passwords must match. Please try again');
        return;
    };

    const response = await fetch('/user/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            name: name,
            email: email,
            password: password,
        })
    });

    const responseData = await response.json();

    if(responseData.success) {
        console.log('trying to relocate...');
        window.location.href = '../user/login';
    } else {
        alert(responseData.message);
    }

}

window.onload = function () {
    document.getElementById('signup-button').addEventListener('click', (e) => createUser(e));
}