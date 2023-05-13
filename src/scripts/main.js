
    const hero = document.querySelector('.hero');
    const header = document.querySelector('.header');
    const btn = document.querySelector('.dropdown-toggle')

    btn.addEventListener('click', (e)=>{
       
       const  pai = btn.parentNode;
       pai.classList.toggle('dropdown--active')

        
        if(header.classList.contains('header--is-large')){
            header.classList.remove('header--is-large')
        }else{
            header.classList.add('header--is-large')
        }

    });

    const height = hero.clientHeight;
    window.addEventListener('scroll', ()=>{
        const position = window.scrollY;
        if(position > height){
        
            header.classList.add('header--is-visible')
        }

        if(position < height){
        
            header.classList.remove('header--is-visible')
        }
       
        
    })