$(document).ready(function(){
    
    $('.top-slider').slick({
        mobileFirst: true,
        slidesToShow: 1,
        infinite: true,
        prevArrow:"<img class='a-left control-c prev slick-prev' src='../assets/images/arrow-left.png' style='width:5%; height:100px; z-index:2;'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='../assets/images/arrow-right.png' style='width:5%; height:100px; z-index:2;'>",
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: true
                }
            }
        ]
    });
    
});