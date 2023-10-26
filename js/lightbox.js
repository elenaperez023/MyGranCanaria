const images=document.querySelectorAll('.img-gallery')
const imagesLight=document.querySelector('.add-img')
const containerLight=document.querySelector('.img-light')
const menuButton1=document.querySelector('.close-button')

// console.log(images)
// console.log(imagesLight)
// console.log(containerLight)

images.forEach(image =>{
    image.addEventListener('click', ()=>{
        imageAppear(image.getAttribute('src'))
    })
})

containerLight.addEventListener('click', (e)=>{
    if(e.target !== imagesLight){
        containerLight.classList.toggle('show')
        imagesLight.classList.toggle('showImage')
        menuButton1.computedStyleMap.opacity='1'
    }
})

const imageAppear= (image)=>{
    imagesLight.src=image;
    containerLight.classList.toggle('show')
    imagesLight.classList.toggle('showImage')
    menuButton1.computedStyleMap.opacity='0'
}