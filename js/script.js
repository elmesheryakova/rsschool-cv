// @ts-nocheck
function printPDF() {
  var element = document.getElementById('cv');
  html2pdf(element, {
    filename: 'cv.pdf',
    image: { type: 'jpeg', quality: 1 },
    jsPDF: {
      orientation: 'p',
      format: 'a4',
      unit: 'mm',
    }
  });
}



var accItem = document.getElementsByClassName('sidebar__block');
var accHD = document.getElementsByClassName('sidebar__block-title');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'sidebar__block close';
    }
    if (itemClass == 'sidebar__block close') {
        this.parentNode.className = 'sidebar__block open';
    }
}



//smooth scroll to anchor
const getId = (link) => link.getAttribute('href').replace('#', '');
	document.querySelectorAll('.section').forEach(
		(section)=> observer.observe(section),
	);

	document.querySelector('.nav-menu__item' ).addEventListener('click', (event) => {
		if (event.target.classList.contains('nav-menu__link')) {
			event.preventDefault();
		
			const id = event.target.getAttribute('href').replace('#', '');
			window.scrollTo({
				top: document.getElementById(id).offsetTop,
				behavior: 'smooth',
			});
		}
	});




