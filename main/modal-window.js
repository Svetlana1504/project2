const registrBtn = document.querySelector('.registration-btn')
const modal = document.querySelector('.modal-wrapper')
const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('.btn-close')


registrBtn.addEventListener('click', () => {
    modal.classList.add('active')
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active')
})

function closeModal () {
    modal.classList.remove('active')
}

closeBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

const formModalContent = document.querySelector('.form-modal-content')
const formModal = formModalContent.querySelectorAll('.form-modal')
const modalBtn = document.querySelector('.modal-btn')
function validation(form) {
    function removeError(element) {
        let parent = element.parentNode;
        if (parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove()
            parent.classList.remove('error')
        }
    }

    function createError(element, text) {
        let parent = element.parentNode;
        const errorLabel = document.createElement('label')
        errorLabel.classList.add('error-label')
        errorLabel.textContent = text
        parent.classList.add('error')
        parent.append(errorLabel)
    }
    let result = true;
    form.querySelectorAll('input').forEach(input => {
        removeError(input)
        if (input.dataset.maxLength) {
            if (input.value.length < input.dataset.maxLength) {
            console.log('Ошибка поля')
            createError(input, `Минимальное кол-во символов: ${input.dataset.maxLength}`)
            result = false
        }
    }
    if (input.dataset.required == 'true') {
        if (input.checked == '') {
             createError(input, 'Требуется согласие на обработку персональных данных')
             result = false
        }
    }
    })

    return result
}
formModalContent.addEventListener('submit', function(event) {
    event.preventDefault()

    if (validation(this) == true) {
        alert('Форма отправлена')
        document.querySelector('.modal-wrapper').classList.remove('active')
        // const modalWindow = document.querySelector('.modal-overlay')
        // const modalWindow1 = document.querySelector('.modal-wrapper')
        // if (modalWindow1.classList.contains('active')) {
        //     modalWindow1.classList.remove('active')
        // }
        // modalWindow1.classList.add('active')
        // const modalWindow2 = modalWindow1.querySelector('.active')
        // // modalWindow.classList.add('close')
        // modalWindow2.classList.remove('active')
        event.target.reset()
        // event.reset()
    }
    // const modalWrapper= document.querySelector('.modal-wrapper')
    // // if (modalWrapper.classList.contains('active')) {
    // //     modalWrapper.classList.add('active')
    // // }
    // modalWrapper.classList.remove('active')
})