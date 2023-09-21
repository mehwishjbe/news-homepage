const hamburgerImage = document.querySelector('.hamburgerImage');
const hamburgerImageClose = document.querySelector('.hamburgerImageClose');

hamburgerImage.addEventListener('click', function(){
    const mobileNavbar = document.querySelector('.mobNavbar');
    mobileNavbar.classList.toggle('active');
});

hamburgerImageClose.addEventListener('click', function(){
    const mobileNavbar = document.querySelector('.mobNavbar');
    mobileNavbar.classList.toggle('active');
});