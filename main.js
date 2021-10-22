var bar=document.getElementsByClassName('far')[0];
bar.onclick=function()
{
	var nav_menu=document.getElementById('nav_menu');
	nav_menu.classList.toggle('show');
}
const nav_list=document.querySelectorAll('.nav_link');
nav_list.forEach(n => n.addEventListener('click',linkAction));
function linkAction()
{
	var nav_menu=document.getElementById('nav_menu');
	nav_menu.classList.remove('show');
}
var span=document.getElementsByTagName('span');
for (var i = 0; i < span.length; i++) {
	if (i==12) {
		span[i].style.margin='-1.2rem 0 0 0';
	}
}
/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});
/*SCROLL HOME*/
sr.reveal('.home',{});
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.div1',{ interval: 200});

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.title',{delay: 400}); 
sr.reveal('.about-text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL IMAGE*/
sr.reveal('.img1',{interval: 200}); 
sr.reveal('.img2',{interval: 200});
sr.reveal('.img3',{interval: 200});
sr.reveal('.img4',{interval: 200});
sr.reveal('.img5',{interval: 200});
sr.reveal('.img6',{interval: 200});

/*SCROLL FOOTER*/
sr.reveal('.footer',{interval: 2000});
sr.reveal('.col-1',{interval: 2000});
sr.reveal('.col-2',{interval: 2000});
sr.reveal('.col-3',{interval: 2000});