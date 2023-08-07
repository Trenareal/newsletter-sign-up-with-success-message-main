'use strict'

const email = document.getElementById('email');
const error = document.getElementById('error');
const button = document.querySelector('.subscribe')

button.addEventListener('click', () =>{
    if(email.Value.length === 0){
        const paragraph =document.createElement('p')
        paragraph.textcontent = 'Input an email'
        paragraph.style.color = 'red'
    }else{
        const anchor =document.createElement('a');
        anchor.href = "sub.html";
    }
})
    
