window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded ...');
    // selectors
    const nav_btn = document.querySelector('.mobile-nav');
    const mobile_nav = document.getElementById('mobile-nav');
    const nav_links = document.querySelectorAll('#mobile-nav a');
    const down_arrow = document.querySelector('.scroll-down');
    const service_section = document.querySelector('.section-2');
    const footer_logo = document.querySelector('.footer-logo');


    // init hidden mobile nav
    mobile_nav.classList.add('hide-nav');
    
    // even listener showing/hiding nav
    nav_btn.addEventListener('click', () => mobile_nav.classList.contains('hide-nav') ? show_nav() : hide_nav());
    
    // hide nav when click on nav link
    mobile_nav.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link')) {
            hide_nav();
        }
    });
    
    // scroll down to service section
    down_arrow.addEventListener('click', ()=> {
        scroll( service_section, 'smooth' );
    });

    // scroll back to top
    footer_logo.addEventListener('click', ()=> {
        const header = document.querySelector('.logo');

        scroll( header, 'smooth' );
    }); 


    // functions
    function hide_nav() {
        mobile_nav.classList.remove('show-nav');
        mobile_nav.classList.add('hide-nav');
    }

    function show_nav() {
        mobile_nav.classList.remove('hide-nav');
        mobile_nav.classList.add('show-nav');
    }

    function scroll(to, behavior = 'auto'){
        to.scrollIntoView({behavior: behavior});
    }

})