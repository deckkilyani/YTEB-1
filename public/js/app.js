const navToggel =document.querySelector('.nav-toggle');
const links =document.querySelector('.links');

navToggel.addEventListener('click', function(){
    links.classList.toggle("show-links");
});

