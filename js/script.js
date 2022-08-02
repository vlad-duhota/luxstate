// smooth links
const smoothLinks = document.querySelectorAll('.anchor');
for (let smoothLink of smoothLinks) {   
    smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        });
    });
};

$('.menu-item').click(function(e){
    document.getElementsByClassName("menu-checkbox").disabled=true;
});