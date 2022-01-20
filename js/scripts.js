/*!
* Start Bootstrap - Freelancer v7.0.5 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

var survey_stock_image = 'https://images.pexels.com/photos/1188532/pexels-photo-1188532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
var coach_stock_image = 'https://images.pexels.com/photos/3861566/pexels-photo-3861566.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';

var modal_survey_stock_image = 'https://images.pexels.com/photos/1624600/pexels-photo-1624600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
var modal_coach_stock_image = 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

function setStockImage(idTag, imageURL) {
    return document.getElementById(idTag).setAttribute('src', imageURL),
        document.getElementById(idTag).setAttribute('alt', imageURL);
}

setStockImage('body-surveyIMG', survey_stock_image);
setStockImage('modal-surveyIMG', modal_survey_stock_image);
setStockImage('body-coachIMG', coach_stock_image);
setStockImage('modal-coachIMG', modal_coach_stock_image);
