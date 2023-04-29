

function redirectToProfile() {
    location.href = './profile.html'
}

function redirectToSignUp() {
    if (localStorage.getItem('token')) {
        alert('Already Signed in');
        location.href = './profile.html';
    }else{
        location.href = './index.html'
    }
}


if (localStorage.getItem('user')) {
    const name = document.getElementById('profile-name');
    const email = document.getElementById('profile-email');
    const pass = document.getElementById('profile-pass');

    var userData = JSON.parse(localStorage.getItem('user'));

    name.innerHTML = `
    <div>Full Name : ${userData.name}</div>
    `;

    email.innerHTML = `
    <div>Email : ${userData.email}</div>
    `;

    pass.innerHTML = `
    <div>Password : ${userData.password}</div>
    `;
}


document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    location.href = './index.html';
})
