const IMAGES=document.querySelectorAll('.img-gallery')
const IMAGES_LIGHT=document.querySelector('.add-img')
const CONTAINER_LIGHT=document.querySelector('.img-light')
const MCLOSE_BUTTON=document.querySelector('.close-button')

// console.log(IMAGES)
// console.log(IMAGES_LIGHT)
// console.log(CONTAINER_LIGHT)

IMAGES.forEach(image =>{
    image.addEventListener('click', ()=>{
        imageAppear(image.getAttribute('src'))
    })
})

CONTAINER_LIGHT.addEventListener('click', (e)=>{
    if(e.target !== IMAGES_LIGHT){
        CONTAINER_LIGHT.classList.toggle('show')
        IMAGES_LIGHT.classList.toggle('showImage')
        MCLOSE_BUTTON.computedStyleMap.opacity='1'
    }
})

const imageAppear= (image)=>{
    IMAGES_LIGHT.src=image;
    CONTAINER_LIGHT.classList.toggle('show')
    IMAGES_LIGHT.classList.toggle('showImage')
    MCLOSE_BUTTON.computedStyleMap.opacity='0'
}