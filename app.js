const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const mainSlide = document.querySelector('.main-slide')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')

const slidesCount = mainSlide.querySelectorAll('div').length

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

let activeSlide = 0

upBtn.addEventListener('click', () => {
    changeSlider('up')
})

downBtn.addEventListener('click', () => {
    changeSlider('down')
})


function changeSlider(direction) {
    if(direction === 'up') {
        activeSlide++
        if(activeSlide === slidesCount) {
            activeSlide = 0
        }
    }else if(direction === 'down') {
        activeSlide--
        if(activeSlide < 0) {
            activeSlide = slidesCount - 1
        }
    }
    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlide * height}px)`
    sidebar.style.transform = `translateY(${activeSlide * height}px)`
}