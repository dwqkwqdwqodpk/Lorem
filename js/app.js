const mobile = document.querySelector('.mobile__btn')
const mwrap = document.querySelector('.mobile__wrapper')
const body = document.querySelector('body')
const mclose = document.querySelector('.mobile__close')

mobile.addEventListener('click', function () {
	mwrap.classList.toggle('mobile__wrapper-active')
	body.classList.toggle('hide')
})

mclose.addEventListener('click', function () {
	mwrap.classList.toggle('mobile__wrapper-active')
	body.classList.toggle('hide')
})




$(document).ready(function () {
	const translates = {
		'ru': {
			'title': 'RU',
			'language': 'Русский',
		},
		'en': {
			'title': 'EN',
			'language': 'English',
		},
	}

	let currentLang = 'ru'

	const elements = $('[data-langkey]')

	$('.language').on('click', () => {
		currentLang = currentLang === 'ru' ? 'en' : 'ru'
		elements.each((key, el) => {
			const obj = $(el)
			const langKey = obj.data('langkey')
			obj.text(translates[currentLang][langKey])
		})
	})


})
