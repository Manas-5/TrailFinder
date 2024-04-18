
// Function to handle login redirection
document.addEventListener('DOMContentLoaded', function () {
  const loginBtn = document.getElementById('login-btn');

  loginBtn.addEventListener('click', function () {
      window.location.href = 'login.html';
  });
});


document.getElementById('login-form').addEventListener('submit', (event) => {
event.preventDefault(); // Prevent form submission

const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

try {
    // Retrieve user data from local storage
    let loggedInUserDataArray = JSON.parse(localStorage.getItem('loggedInUserDataArray')) || [];
    const userDataArray = JSON.parse(localStorage.getItem('userDataArray')) || [];

    // Find the user with the entered username in userDataArray
    const user = userDataArray.find(user => user.username === username);

    if (user && user.password === password) {
        alert('Login successful!'); // Redirect to user dashboard or home page
        // Add the logged in user to loggedInUserDataArray
        loggedInUserDataArray.push(user);
        // Update local storage with the new loggedInUserDataArray
        localStorage.setItem('loggedInUserDataArray', JSON.stringify(loggedInUserDataArray));
        // Here you can redirect the user to another page upon successful login
        window.location.href = 'TrailFinder.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
} catch (error) {
    console.error('Error validating login:', error);
    // Handle error, e.g., show error message to the user
}
});




// Function to handle search functionality
document.getElementById('search-btn').addEventListener('click', () => {
const searchInput = document.getElementById('search-input');
const searchQuery = searchInput.value.toLowerCase().trim();

// Define mappings of search queries to corresponding pages
const searchMappings = {
    'samaria gorge': 'Samaria_Gorge.html',
    // Add more mappings as needed
};

// Check if the search query has a mapping
if (searchQuery in searchMappings) {
    // Redirect to the corresponding page
    window.location.href = searchMappings[searchQuery];
} else {
    // Handle case when no matching page is found
    alert('No matching hikes found for your search query.');
}
});


