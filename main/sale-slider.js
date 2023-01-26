const prev = document.querySelector('.btn-prev')
const next = document.querySelector('.btn-next')
const slide = document.querySelectorAll('.sale-container')
const dots = document.querySelectorAll('.dot')

let index = 0

const activeSlide = n => {
    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.remove('active')
    }
    slide[n].classList.add('active')
}

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active')
    }
    dots[n].classList.add('active')
}

const prepareCurrentSlide = ind => {
    activeSlide(index)
    activeDot(index)
}

const nextSlide = () => {
    if (index === slide.length-1) {
        index = 0
        prepareCurrentSlide(index)
    } else {
        index++
        prepareCurrentSlide(index)
    }
}
const prevSlide = () => {
    if (index === 0) {
        index = slide.length-1
        prepareCurrentSlide(index)
    } else {
        index --
        prepareCurrentSlide(index)
        clearInterval(set)
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot
        prepareCurrentSlide(index)
        clearInterval(set)
    })
})

let set = setInterval(nextSlide, 2000)

next.addEventListener('click', () => {
    clearInterval(set)
})

next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)