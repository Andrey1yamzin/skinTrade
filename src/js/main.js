window.addEventListener('DOMContentLoaded', function(){
    'use strict'
    
    let wrapBtn = document.querySelector('.faq__btns');
    let btn = document.querySelectorAll('.faq__btn');
    let tabs = document.querySelectorAll('.faq__tab');

    let header = document.getElementById('header');
    let burderMenu = document.querySelector('.header__openMenu');

    
    function sizePade(){
        if(document.documentElement.clientWidth <= 992){
            header.classList.remove('header');
            header.classList.add('header__burger');
        }else if(document.documentElement.clientWidth > 992){
            header.classList.remove('header__burger');
            header.classList.add('header');
           
        }
    }


    function hideTabContent(hide){
        for(let i = hide; i < tabs.length; i++){
            tabs[i].classList.remove('show');
            btn[i].classList.remove('faq__btn-active');
            btn[i].classList.add('faq__btn-deactive');
            tabs[i].classList.add('hide');
        }}
    
        hideTabContent(1);
    
    
    function showTabContent(show){
        if(tabs[show].classList.contains('hide')){
            tabs[show].classList.remove('hide');
            btn[show].classList.remove('faq__btn-deactive');
            btn[show].classList.add('faq__btn-active');
            tabs[show].classList.add('show');
        }}
    
    
    wrapBtn.addEventListener('click', function(event){
            let target = event.target;
            if(target && target.classList.contains('faq__btn')){
                for(let i = 0; i < btn.length; i++){
                    if(target == btn[i]){
                        hideTabContent(0);
                        showTabContent(i);
                        break; 
                    }
                }
            }
        })

    burderMenu.addEventListener('click', function(){
        header.classList.toggle('show_header');
    });
    window.addEventListener('resize', sizePade);
    window.addEventListener('load', sizePade);
    });