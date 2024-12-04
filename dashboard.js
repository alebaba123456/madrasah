const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');

// Toggle menu saat tombol hamburger diklik
menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('visible');
    sidebar.classList.toggle('hidden');
});

// Dropdown menu titik tiga
const threeDotsButton = document.getElementById('threeDotsButton');
const dropdownMenu = document.getElementById('dropdownMenu');

// Toggle dropdown saat tombol titik tiga diklik
threeDotsButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('visible');
});

// Logout
document.getElementById('logoutButton').addEventListener('click', function() {
    alert('Anda telah logout.');
    window.location.href = 'index.html';
});
