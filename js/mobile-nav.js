/* Мобильная навигация */

const moileNavBtnOpen = document.querySelector('#openMobileNav');
const moileNavBtnClose = document.querySelector('#closeMobileNav');
const mobileNav = document.querySelector('.mobile-nav');

// Слушаем события
moileNavBtnOpen.addEventListener('click', function() {
	mobileNav.classList.add('mobile-nav--open');

	// Убираем скролл для body
	document.body.classList.add('no-scroll');
});

moileNavBtnClose.addEventListener('click', function() {
	mobileNav.classList.remove('mobile-nav--open');

		// Удаляем no-scroll для body
	document.body.classList.remove('no-scroll');
});

/* Закрыть мобильную навигацию по клику по ссылкам внутри ммобильной навигации */

// Находим ссылки внутри блока с мобильной навигацией
const mobileNavLinks = mobileNav.querySelectorAll("a, button");

mobileNavLinks.forEach(function(item) {
	item.addEventListener('click', function() {
		mobileNav.classList.remove('mobile-nav--open');

		// Удаляем no-scroll для body
		document.body.classList.remove('no-scroll');
	});
});
