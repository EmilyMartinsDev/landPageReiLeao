
    const hero = document.querySelector('.hero');
    const header = document.querySelector('.header');

    const heightClient = hero.clientHeight;
    console.log(heightClient)
    window.addEventListener('scroll', function(){
        const position = window.scrollY;
        console.log(position )
        if(position > heightClient){
           header.classList.add('header--is-hidden')
        }else{
            header.classList.remove('header--is-hidden')
        }


    });

