document.querySelectorAll('a[href^=""]').forEach(anchor => {
anchor.addEventListener('click',function (e){
    e.preventDefault();

    document.querySelector(this.getAtribute('href')).scrollIntoView({
       behavior:'smooth'
    });
});
});