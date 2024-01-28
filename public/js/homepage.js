
//brings user to dashboard

const applyButton = document.getElementById('homepageApplyBtn');

applyButton.addEventListener('click', () => {
    // Check if the user is logged in
    fetch('/api/users/check-auth')  // Replace with the actual endpoint to check authentication
        .then(response => {
            if (response.ok) {
                // User is logged in, redirect to the dashboard
                document.location.replace('/dashboard');
            } else {
                // User is not logged in, redirect to the login page
                document.location.replace('/login');
            }
        })
        .catch(error => {
            console.error('Error checking authentication:', error);
        });
});

//create post function