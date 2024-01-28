const loginForm = async (event) => {
    event.preventDefault();
    console.log('Login form submitted');
    const email = document.querySelector('#emailLogin').value.trim();
    const password = document.querySelector('#passwordLogin').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Could not login to account. Please try again');
        }
    }
};


const signupForm = async (event) => {
    event.preventDefault();
    console.log('Signup form submitted');
    const first_name = document.querySelector('#signupFirstname').value.trim();
    const last_name = document.querySelector('#signupLastname').value.trim();
    const email = document.querySelector('#emailSignup').value.trim();
    const password = document.querySelector('#passwordSignup').value.trim();

    if (first_name && last_name && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ first_name, last_name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Could not create account. Please try later')
        }
        }
};

document
    .querySelector('#loginForm')
    .addEventListener('submit', loginForm);

document
  .querySelector('#signupForm')
  .addEventListener('submit', signupForm);