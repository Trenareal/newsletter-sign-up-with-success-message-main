'use strict'
let button = document.getElementById("link");
const email = document.getElementById("email");


    if (email === ""){
       
       console.log('no email')
    } else if(email != "" ){
        button.href= "sub.html"
    }




    document.getElementById("link").addEventListener('click', button)
