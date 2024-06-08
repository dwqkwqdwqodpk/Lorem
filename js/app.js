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
