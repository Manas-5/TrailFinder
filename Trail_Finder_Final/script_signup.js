// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInputs();
// });

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// const validateInputs = () => {
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//     const password2Value = password2.value.trim();

//     if(usernameValue === '') {
//         setError(username, 'Username is required');
//     } else {
//         setSuccess(username);
//     }

//     if(emailValue === '') {
//         setError(email, 'Email is required');
//     } else if (!isValidEmail(emailValue)) {
//         setError(email, 'Provide a valid email address');
//     } else {
//         setSuccess(email);
//     }

//     if(passwordValue === '') {
//         setError(password, 'Password is required');
//     } else if (passwordValue.length < 8 ) {
//         setError(password, 'Password must be at least 8 character.')
//     } else {
//         setSuccess(password);
//     }

//     if(password2Value === '') {
//         setError(password2, 'Please confirm your password');
//     } else if (password2Value !== passwordValue) {
//         setError(password2, "Passwords doesn't match");
//     } else {
//         setSuccess(password2);
//     }

// };


// // Function to save user data to local storage
// const saveUserData = (username, email, password) => {
//     // Create an object with user data
//     const userData = {
//         username,
//         email,
//         password
//     };

//     try {
//         // Convert the object to a JSON string
//         const userDataString = JSON.stringify(userData);

//         // Store the JSON string in local storage
//         localStorage.setItem('userData', userDataString);
//     } catch (error) {
//         console.error('Error saving user data:', error);
//     }
// };

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     // Validate inputs
//     if (validateInputs()) {
//         // Save user data to local storage
//         saveUserData(username.value, email.value, password.value);

//         // Redirect to login page
//         window.location.href = 'login.html';
//     }
// });

// // Function to handle login redirection
// document.addEventListener('DOMContentLoaded', function () {
//     const loginBtn = document.getElementById('login-btn');

//     loginBtn.addEventListener('click', function () {
//         window.location.href = 'login.html';
//     });
// });

// ----------------------------------------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('form');
//     const username = document.getElementById('username');
//     const email = document.getElementById('email');
//     const password = document.getElementById('password');
//     const password2 = document.getElementById('password2');

//     form.addEventListener('submit', function(e) {
//         e.preventDefault();
//         validateInputs();
//     });

//     const setError = (element, message) => {
//         const inputControl = element.parentElement;
//         const errorDisplay = inputControl.querySelector('.error');

//         errorDisplay.innerText = message;
//         inputControl.classList.add('error');
//         inputControl.classList.remove('success');
//     };

//     const setSuccess = element => {
//         const inputControl = element.parentElement;
//         const errorDisplay = inputControl.querySelector('.error');

//         errorDisplay.innerText = '';
//         inputControl.classList.add('success');
//         inputControl.classList.remove('error');
//     };

//     const isValidEmail = email => {
//         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         return re.test(String(email).toLowerCase());
//     };

//     const validateInputs = () => {
//         const usernameValue = username.value.trim();
//         const emailValue = email.value.trim();
//         const passwordValue = password.value.trim();
//         const password2Value = password2.value.trim();

//         if (usernameValue === '') {
//             setError(username, 'Username is required');
//         } else {
//             setSuccess(username);
//         }

//         if (emailValue === '') {
//             setError(email, 'Email is required');
//         } else if (!isValidEmail(emailValue)) {
//             setError(email, 'Provide a valid email address');
//         } else {
//             setSuccess(email);
//         }

//         if (passwordValue === '') {
//             setError(password, 'Password is required');
//         } else if (passwordValue.length < 8) {
//             setError(password, 'Password must be at least 8 characters');
//         } else {
//             setSuccess(password);
//         }

//         if (password2Value === '') {
//             setError(password2, 'Please confirm your password');
//         } else if (password2Value !== passwordValue) {
//             setError(password2, 'Passwords do not match');
//         } else {
//             setSuccess(password2);
//             saveUserData(usernameValue, emailValue, passwordValue);
//         }
//     };

//     const saveUserData = (username, email, password) => {
//         let userData = JSON.parse(localStorage.getItem('userData')) || [];
    
//         // Check if the username already exists
//         const existingUser = userData.find(user => user.username === username);
//         if (existingUser) {
//             alert('Username already exists. Please choose a different username.');
//             return;
//         }
    
//         // Append the new user data to the existing array
//         userData.push({ username, email, password });
    
//         try {
//             // Store the updated userData array back to localStorage
//             localStorage.setItem('userData', JSON.stringify(userData));
//             alert('Sign up successful!');
//         } catch (error) {
//             console.error('Error saving user data:', error);
//             alert('Failed to save user data. Please try again.');
//         }
//     };
    
// });


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        validateInputs();
    });

    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    };

    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    };

    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const validateInputs = () => {
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();

        if (usernameValue === '') {
            setError(username, 'Username is required');
        } else {
            setSuccess(username);
        }

        if (emailValue === '') {
            setError(email, 'Email is required');
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Provide a valid email address');
        } else {
            setSuccess(email);
        }

        if (passwordValue === '') {
            setError(password, 'Password is required');
        } else if (passwordValue.length < 8) {
            setError(password, 'Password must be at least 8 characters');
        } else {
            setSuccess(password);
        }

        if (password2Value === '') {
            setError(password2, 'Please confirm your password');
        } else if (password2Value !== passwordValue) {
            setError(password2, 'Passwords do not match');
        } else {
            setSuccess(password2);
            saveUserData(usernameValue, emailValue, passwordValue);
        }
    };

    const saveUserData = (username, email, password) => {
        try {
            // Retrieve existing user data from local storage or initialize an empty array
            let userDataArray = JSON.parse(localStorage.getItem('userDataArray')) || [];
    
            // Add new user data to the array
            userDataArray.push({ username, email,password });
    
            // Save the updated array back to local storage
            localStorage.setItem('userDataArray', JSON.stringify(userDataArray));
    
            // Provide feedback to the user, e.g., redirect to another page
            window.location.href = 'login.html';
        } catch (error) {
            console.error('Error saving user data:', error);
            // Handle error, e.g., show error message to the user
        }
    };
});