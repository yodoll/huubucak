const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const prevBtn = $('.app__option-prev')
const nextBtn = $('.app__option-next')
const title = $('.app__note-title')


const slides = $$('.app__image-item')

var currentIndex = 0;
const timer = 600;
// Next slide
function NextSlider(index) {  
    $('.app__image-item.active').classList.add('image-item-start');
    setTimeout(function() {
     $('.app__image-item.active').classList.remove('active', 'image-item-start');
    }, timer)

    if(currentIndex >= index) {
        currentIndex = -1;
    }
    currentIndex++;
    slides[currentIndex].classList.add( 'image-item-start', 'item-image-next')
    setTimeout(function() {
        slides[currentIndex].classList.add('active', 'image-item-start')
        slides[currentIndex].classList.remove( 'image-item-start','item-image-next')

    }, timer)
    title.innerHTML = ` Ảnh ${currentIndex + 1} / ${index + 1}`;

}

// Prev slide
function PrevSlider(index) {
    $('.app__image-item.active').classList.add('image-item-end')
    setTimeout(function() {
        $('.app__image-item.active').classList.remove('active', 'image-item-end')
    }, timer)
    if(currentIndex <= 0) {
        currentIndex = index+1;
    }
    currentIndex--;
    slides[currentIndex].classList.add( 'image-item-end', 'item-image-prev')
    setTimeout(function() {
        slides[currentIndex].classList.add('active', 'image-item-end')
        slides[currentIndex].classList.remove( 'image-item-end','item-image-prev')
    }, timer)
    title.innerHTML = ` Ảnh ${currentIndex + 1} / ${index + 1}`;
}

const delayTimer = (btnElement) => {
    btnElement.disabled = !btnElement.disabled;
}

// Auto next slide

slides.forEach((slide, index)=> {
    
    title.innerHTML = ` Ảnh ${currentIndex + 1} / ${index + 1}`;

    nextBtn.onclick = function() {
        NextSlider( index)
        delayTimer(nextBtn)

        setTimeout((e) => {
            e(nextBtn)
        }, timer, delayTimer)

    }
    prevBtn.onclick = function() {
        clearInterval(auto)
        PrevSlider(index)
        delayTimer(prevBtn)

        setTimeout((e) => {
            e(prevBtn)
            auto = setInterval(() => {
                nextBtn.click()
                delayTimer(prevBtn)
            
                    setTimeout((e) => {
                        e(prevBtn)
                    }, timer, delayTimer)
            }, 2000)
        }, timer, delayTimer)
    } 
})


var auto = setInterval(() => {
    nextBtn.click()
    delayTimer(prevBtn)

        setTimeout((e) => {
            e(prevBtn)
        }, timer, delayTimer)
}, 4000)




