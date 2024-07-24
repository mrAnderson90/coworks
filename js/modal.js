/* Модальное окно */


/* Находим элементы для модального окна */

// Все кнопки которые могут открывать модальные окна по data атрибуту [data-action="modal"]
const openModalBtns = document.querySelectorAll('[data-action="modal"]');

const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector('#closeModal');
const modalBody = document.querySelector('.modal__body');

function openModal() {
	modal.classList.add('modal--open');
	document.body.classList.add('no-scroll');
}

function closeModal() {
	modal.classList.remove('modal--open');
	document.body.classList.remove('no-scroll');
}

/* Открыть модальное окно */
openModalBtns.forEach(function(item) {
	item.addEventListener('click', openModal);
});

// Закрыть модальное окно по кнопке closeModalBtn
closeModalBtn.addEventListener('click', closeModal);

// Закрыть модальное окно при клике на оверлее
modal.addEventListener('click', closeModal);

// Блокируем всплытие события при клике по modalBody
modalBody.addEventListener('click', function(e) {
	e.stopPropagation();
});

// Закрыть модальное окно по нажатием Escape
document.addEventListener('keydown', function(e) {
	if (e.key === 'Escape') {
		closeModal();
	}
});
