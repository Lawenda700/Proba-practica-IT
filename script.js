function createPoll(event) {
    event.preventDefault();
    alert('Poll created!');
}

let currentUser = null;

function updateNavbar() {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    if (currentUser) {
        loginBtn.style.display = 'none';
        registerBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
    } else {
        loginBtn.style.display = 'block';
        registerBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
    }
}

function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'block';
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'none';
}

function login(event) {
    event.preventDefault();
   
    currentUser = 'loggedUser';
    updateNavbar();
    closePopup('loginPopup');
    document.getElementById('poll-section').style.display = 'block';

}
function register(event) {
    event.preventDefault();
   
    currentUser = 'registeredUser';
    updateNavbar();
    closePopup('registerPopup');
    document.getElementById('poll-section').style.display = 'block';

}
function logout() {
    currentUser = null;
    updateNavbar();
}
