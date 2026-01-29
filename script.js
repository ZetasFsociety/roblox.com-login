document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();

    if (!user || !pass) {
        alert('Lütfen tüm alanları doldurun!');
        return;
    }

    
    window.location.href = 'https://www.roblox.com/home';
    
});