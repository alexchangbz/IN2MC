// window.addEventListener('scroll', () => {
//     console.log('Scrolled!')
//     const posY = window.scrollY
//     if (posY > 0) {
//         const element = document.querySelector(".brand-section");
//         element.classList.add("red");
//     } else {
//         const element = document.querySelector(".brand-section");
//         element.classList.add("transparent");
//     }
// })

$(window).scroll(function () {
    if (scrollY > 0) {
        $(".brand-section").css("background-color", "transparent");
        $(".logo").css("opacity", "0").fadeOut();
    } else {
        $(".brand-section").css("background-color", "#e50019");
        $(".logo").css("opacity", "1").fadeIn();
    }
});

$('.nav-btn').click(function () {
    if($('#toggleId').hasClass('toggleWhite') && $('#nav-menu').hasClass('inactiveMenu')) {
        $('#toggleId').addClass('toggleBlack')
        $('#toggleId').removeClass('toggleWhite')
        $('#nav-menu').addClass('activeMenu')
        $('#nav-menu').removeClass('inactiveMenu')
    } else {
        $('#toggleId').addClass('toggleWhite')
        $('#toggleId').removeClass('toggleBlack')
        $('#nav-bg').removeClass('activeMenu')
        $('#nav-menu').addClass('inactiveMenu')
        $('#nav-menu').removeClass('activeMenu')
    }
})
