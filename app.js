const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');

const slidesCount = mainSlide.querySelectorAll('div').length;
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

const container = document.querySelector('.container');
let activSlideIndex = 0;

upBtn.addEventListener('click', () => {
    changeSlide('up')

})

downBtn.addEventListener('click', () => {
    changeSlide('down')

})


document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        changeSlide('up')
    } else if (event.key === 'ArrowDown') {
        changeSlide('down')
    }
})

function changeSlide(direction) {
    if (direction === 'up') {
        activSlideIndex++
        if (activSlideIndex === slidesCount) {
            activSlideIndex = 0
        }
    } else if (direction === 'down') {
        activSlideIndex--
        if (activSlideIndex < 0) {
            activSlideIndex = slidesCount - 1
        }
    }
    const height = container.clientHeight
    mainSlide.style.transform = `translateY(-${activSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activSlideIndex * height}px)`
}