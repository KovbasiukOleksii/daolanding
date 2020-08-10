/* стрелка вверх */
function backToTop() {
	let button = $('.back_To_Top');

	$(window).on('scroll', () => {
		if ($(this).scrollTop() >= 50) {
			button.fadeIn();
		} else {
			button.fadeOut();
		}
	});

	button.on('click', (e) => {
		e.preventDefault();
		$('html').animate({scrollTop: 0}, 500);
	})
} 

backToTop();

/* карусель */

$('.farms_sl').slick({
	slidesToShow: 5,
	slidesToScroll: 5,
  	infinite: true,
  	dots: true,
  	speed: 500,
  	autoplay: true,
  	autoplaySpeed: 3000,
  	arrows: false,
  	responsive: [
    {
      breakpoint: 1250,
      settings: {
      	variableWidth: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
  ]
});

/* часы */

const clocks=document.getElementsByClassName("city_clock");
	function updateClocks(){
		for(let t of clocks)
	{
		let e=t.dataset.timezone,o=(new Date).toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit",second:"2-digit",timeZone:e});
t.textContent=o}}window.onload=setInterval(updateClocks,1e3);


/* модльное окно */

let login = document.getElementsByClassName("modal_login")[0];
let btn = document.getElementsByClassName("login_btn")[0];
let close = document.getElementsByClassName("close")[0];
let loginHeader = document.getElementsByClassName("modal_login")[1];
let bthHeader = document.getElementsByClassName("login_btn")[1];
let closeHeader = document.getElementsByClassName("close")[1];


btn.onclick = function() {
	login.style.display = "block";
}

close.onclick = function() {
	login.style.display = "none";
}

window.onclick = function(e) {
	if (e.target == login) {
		login.style.display = "none"
	}
};

bthHeader.onclick = function() {
	loginHeader.style.display = "block";
}

closeHeader.onclick = function() {
	loginHeader.style.display = "none";
}

window.onclick = function(e) {
	if (e.target == loginHeader) {
		login.style.display = "none"
	}
};

/* бургер меню */

function burgerMenu(selector) {
	let menu = $(selector);
	let btn = menu.find('.bgm_btn');
	let links = menu.find('.bgm_links');
	let hide = menu.find('.bgm_overlay');

	btn.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});

	links.on('click', () => toggleMenu());
	hide.on('click', () => toggleMenu());

	function toggleMenu() {
		menu.toggleClass('bgm_active');

		if (menu.hasClass('bgm_active')) {
			$('body').css('overflow','hidden');
		} else {
			$('body').css('overflow','visible');
		}

	}
}

burgerMenu('.bgm')
