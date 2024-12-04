    document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validasi login
    if (username === 'ale123' && password === 'ale123') {
        alert('Login berhasil!');
        // Redirect ke halaman lain jika perlu
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('error-message').textContent = 'Username atau password salah.';
    }
    
});
