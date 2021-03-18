$(function(){

    let siteHeight = $('body').height()
    let headerHeight = $('.header').height()
    let backgroundHeight = siteHeight - headerHeight
    let sidebarLeftHeight = $('.sidebar--left .sidebar__wrapper').height()
    if (sidebarLeftHeight > backgroundHeight){
        $('.header__background').css('height', sidebarLeftHeight)
    } else{
        $('.header__background').css('height', backgroundHeight)
    }

    let windowWidth = document.documentElement.clientWidth;
    $('.sidebar__list-item').on('click', function(){
        if (windowWidth <= 1024){
            $('.sidebar__checker--left').focus()
            $('.sidebar__list-item').toggleClass('sidebar__list-item--active')
            $('.menu__horizontal').siblings().attr('href', '#')
        }
    })

    $('.header__search-btn').on('click', function(){
        $(this).addClass('header__search-btn--white')
        $('.header__search').removeClass('header__search--input-hidden')
        $('.header__search-input').focus()
    })

    $('.header__search-input').on('blur', function(){
        $('.header__search-btn').removeClass('header__search-btn--white')
        $('.header__search').addClass('header__search--input-hidden')
    })

    $('.header__inner-sections').on('click', function(){
        if ($('.sidebar').hasClass('sidebar--active')){
            $('.sidebar--left').removeClass('sidebar--active')
            $('.header__background').removeClass('header__background--active')
            $('.sidebar--left .sidebar__wrapper .sidebar__inner').removeClass('animate__slideInLeft')
            $('body').css('overflow', 'auto')
        } else{
            $('.sidebar--left').addClass('sidebar--active')
            $('.header__background').addClass('header__background--active')
            $('.sidebar--left .sidebar__wrapper .sidebar__inner').addClass('animate__slideInLeft')
            $('.sidebar__checker--left').focus()
            $('body').css('overflow', 'hidden')
        }
    })

    let sidebarLinkHover = {};
    $('.sidebar__list-link').on('mouseenter', function(){
        sidebarLinkHover.value = 1
    })

    $('.sidebar__list-link').on('mouseleave', function(){
        sidebarLinkHover.value = 0
    })

    $('.sidebar__checker--left').on('blur', function(){
        if (sidebarLinkHover.value === 1){
            $('.sidebar__checker--left').focus()
        } else if ($('.header__inner-sections').is(':hover')){
            $('.sidebar__checker--left').focus()
            $('body').css('overflow', 'hidden')
        } else{
            $('.sidebar--left').removeClass('sidebar--active')
            $('.header__background').removeClass('header__background--active')
            $('.sidebar--left .sidebar__inner').removeClass('animate__slideInLeft')
            $('body').css('overflow', 'auto')
        }
    })

    if (windowWidth <= 1024){
        $('.header__inner-sign').addClass('header__inner-sign--mobile')

    }

    $(window).resize(function(){
        let windowWidth = document.documentElement.clientWidth;
        if (windowWidth <= 1024){
            $('.header__inner-sign').addClass('header__inner-sign--mobile')
        }
    })
 
    $('.header__inner-sign--mobile').on('click', function(){
        if ($('.sidebar').hasClass('sidebar--active')){
            $('.sidebar--right').removeClass('sidebar--active')
            $('.header__background').removeClass('header__background--active')
            $('.sidebar--right .sidebar__inner').removeClass('animate__slideInRight')
            $('body').css('overflow', 'auto')
        } else{
            $('.sidebar--right').addClass('sidebar--active')
            $('.header__background').addClass('header__background--active')
            $('.sidebar--right .sidebar__inner').addClass('animate__slideInRight')
            $('.sidebar__checker--right').focus()
            $('body').css('overflow', 'hidden')
        }
    })

    $('.sidebar__checker--right').on('blur', function(){
        if ($('.header__inner-sign--mobile').is(':hover')){
            $('.sidebar__checker--right').focus()
            $('body').css('overflow', 'hidden')
        } else{
            $('.sidebar--right').removeClass('sidebar--active')
            $('.header__background').removeClass('header__background--active')
            $('.sidebar--right .sidebar__inner').removeClass('animate__slideInRight')
            $('body').css('overflow', 'auto')
        }
    })   

});