document.addEventListener('keyup', e => {

    if(document.querySelector('.form__input').validity.valid === true){

        document.querySelector('.form__input').style.setProperty('border-color','hsl(0, 0%, 59%)')
        document.querySelector('.form__paragraph').classList.remove('active')
    }
    
    if(document.querySelector('.form__input').validity.valid === false && document.querySelector('.form__input').textLength >= 1){
        
        document.querySelector('.form__input').style.setProperty('border-color','red')
        document.querySelector('.form__paragraph').classList.add('active')
    }
     
})

document.addEventListener('submit', e =>{

    e.preventDefault()
    
})