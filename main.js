const hamburgerImage = document.querySelector('.hamburgerImage');

hamburgerImage.addEventListener('click', function(){
    const mobileNavbar = document.querySelector('.mobNavbar');
    mobileNavbar.classList.toggle('active');
});