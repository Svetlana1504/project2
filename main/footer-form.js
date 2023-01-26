const formContent = document.querySelector('.form-content')
// const formModal = formModalContent.querySelectorAll('.form-modal')
const formBtn = document.querySelector('.form-btn')
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
        if (input.checked== '') {
             createError(input, 'Требуется согласие на обработку персональных данных')
             result = false
        }
    }
    })

    return result
}
formContent.addEventListener('submit', function(event) {
    event.preventDefault()

    if (validation(this) == true) {
        alert('Форма отправлена')
        event.target.reset()
    }
})
