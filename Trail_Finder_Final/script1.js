
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle search functionality
    document.getElementById('search-btn').addEventListener('click', () => {
        const searchInput = document.getElementById('search-input').value.toLowerCase().trim();

        // Define mappings of search queries to corresponding pages
        const searchMappings = {
            'samaria gorge': 'Samaria_Gorge.html',
            'samaria': 'Samaria_Gorge.html',
            'cape of antibes': 'Cap_Antibes.html',
            'saint jean cap ferrat': 'Saint_Jean_Cap_Ferrat.html', 
            'ferrat': 'Saint_Jean_Cap_Ferrat.html',
            'saint jean': 'Saint_Jean_Cap_Ferrat.html',
            'eze': 'Eze.html',
            'nietzsche path': 'Eze.html',
            'cime de roccassiera': 'cime_de_roccassiera.html',
            'roccassiera': 'cime_de_roccassiera.html',
            'cime': 'cime_de_roccassiera.html',
            'madeira': 'Madeira_trek.html',
            'bikos': 'Bikos_Gorge.html'
            // Add more mappings as needed
        };

        // Check if the search query has a mapping
        if (searchInput in searchMappings) {
            // Redirect to the corresponding page
            window.location.href = searchMappings[searchInput];
        } else {
            // Handle case when no matching page is found
            alert('No matching hikes found for your search query.');
        }
    });

    // Event listener for toggling menu visibility when menu button is clicked
    document.getElementById('menu-btn').addEventListener('click', () => {
        document.getElementById('menu').classList.toggle('show');
    });

    // Function to handle login redirection
    document.getElementById('login-btn').addEventListener('click', function() {
        window.location.href = 'login.html';
    });

    // Show dropdown menu when user profile icon is clicked
    document.getElementById('user-profile').addEventListener('click', () => {
        document.getElementById('dropdown-menu').style.display = 'block';
    });
  
    // Log out when log out button is clicked
    document.getElementById('logout-btn').addEventListener('click', () => {
        // Clear user data upon logout
        localStorage.removeItem('loggedInUserDataArray');
        // Redirect to login page
        window.location.href = 'login.html';
    });

    // Check if the user is logged in
    const loggedInUserDataArray = JSON.parse(localStorage.getItem('loggedInUserDataArray')) || [];
    const isLoggedIn = loggedInUserDataArray.length > 0;

    // Show profile icon and logout button if user is logged in
    if (isLoggedIn) {
        document.getElementById('user-profile').style.display = 'block';
        document.getElementById('logout-btn').style.display = 'block';
        document.getElementById('login-btn').style.display = 'none'; // Hide login button
    } else {
        document.getElementById('user-profile').style.display = 'none';
        document.getElementById('logout-btn').style.display = 'none'; // Hide logout button
        document.getElementById('login-btn').style.display = 'block';
    }

    // Functionality to add favorite hikes
    document.getElementById('add-favorite-btn').addEventListener('click', () => {
        const favoriteInput = document.getElementById('favorite-input').value.trim();
        if (favoriteInput !== '') {
            let loggedInUserDataArray = JSON.parse(localStorage.getItem('loggedInUserDataArray')) || [];
            const isLoggedIn = loggedInUserDataArray.length > 0;

            if (!isLoggedIn) {
                loggedInUserDataArray.push({favorites: []});
            }

            const loggedInUser = loggedInUserDataArray[0];
            
            if (!loggedInUser.favorites) {
                loggedInUser['favorites'] = [];
            }

            loggedInUser.favorites.push(favoriteInput);

            localStorage.setItem('loggedInUserDataArray', JSON.stringify(loggedInUserDataArray));

            document.getElementById('favorite-input').value = '';

            displayFavorites(loggedInUser);
        } else {
            alert('Please enter a favorite hike.');
        }
    });

    // Function to display favorite hikes on profile page
    const displayFavorites = (loggedInUser) => {
        if (loggedInUser) {
            const favoritesList = document.getElementById('favorites-list');
            favoritesList.innerHTML = ''; // Clear previous list

            if (!loggedInUser.favorites) {
                loggedInUser['favorites'] = [];
            }
            loggedInUser.favorites.forEach((favorite, index) => {
                const listItem = document.createElement('li');
                const deleteButton = document.createElement('button');
                deleteButton.innerHTML = '&times;'; // Small cross symbol
                deleteButton.classList.add('delete-button'); // Add a class for styling
                deleteButton.addEventListener('click', () => {
                    loggedInUser.favorites.splice(index, 1);
                    localStorage.setItem('loggedInUserDataArray', JSON.stringify(loggedInUserDataArray));
                    displayFavorites(loggedInUser);
                });
                listItem.textContent = favorite;
                listItem.appendChild(deleteButton);
                favoritesList.appendChild(listItem);
            });
        }
    };

    // Display favorite hikes on profile page when DOM content is loaded
    if (isLoggedIn) {
        const loggedInUser = loggedInUserDataArray[0];
        displayFavorites(loggedInUser);
    }

// Functionality to add favorite hikes
document.getElementById('add-last_hike-btn').addEventListener('click', () => {
    const last_hikeInput = document.getElementById('last_hike-input').value.trim();
    if (last_hikeInput !== '') {
        let loggedInUserDataArray = JSON.parse(localStorage.getItem('loggedInUserDataArray')) || [];
        const isLoggedIn = loggedInUserDataArray.length > 0;

        if (!isLoggedIn) {
            loggedInUserDataArray.push({last_hikes: []});
        }

        const loggedInUser = loggedInUserDataArray[0];
        
        if (!loggedInUser.last_hikes) {
            loggedInUser['last_hikes'] = [];
        }

        loggedInUser.last_hikes.push(last_hikeInput);

        localStorage.setItem('loggedInUserDataArray', JSON.stringify(loggedInUserDataArray));

        document.getElementById('last_hike-input').value = '';

        displayLast_Hikes(loggedInUser);
    } else {
        alert('Please enter a favorite hike.');
    }
});

// Function to display favorite hikes on profile page
const displayLast_Hikes = (loggedInUser) => {
    if (loggedInUser) {
        const last_hikesList = document.getElementById('last_hikes-list');
        last_hikesList.innerHTML = ''; // Clear previous list

        if (!loggedInUser.last_hikes) {
            loggedInUser['last_hikes'] = [];
        }
        loggedInUser.last_hikes.forEach((last_hike, index) => {
            const listItem = document.createElement('li');
            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = '&times;'; // Small cross symbol
            deleteButton.classList.add('delete-button'); // Add a class for styling
            deleteButton.addEventListener('click', () => {
                loggedInUser.last_hikes.splice(index, 1);
                localStorage.setItem('loggedInUserDataArray', JSON.stringify(loggedInUserDataArray));
                displayLast_Hikes(loggedInUser);
            });
            listItem.textContent = last_hike;
            listItem.appendChild(deleteButton);
            last_hikesList.appendChild(listItem);
        });
    }
};

// Display favorite hikes on profile page when DOM content is loaded
if (isLoggedIn) {
    const loggedInUser = loggedInUserDataArray[0];
    displayLast_Hikes(loggedInUser);
}










    
});

