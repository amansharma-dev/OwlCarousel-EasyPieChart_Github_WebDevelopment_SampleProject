$(document).ready(function () {


    $('h1').click(function () {

        $(this).css('background-color', '#3DDC84');
    })


    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    });



    var skillTopOffset = $(".section-01").offset().top;


    $(window).scroll(function () {


        if (window.pageYOffset > skillTopOffset - $(window).height() + 200) {


            $('.chart').easyPieChart({
                easing: 'easInOut',
                barColor: '#f1c40f',
                trackColor: false,
                scaleColor: false,
                lineWidth: 7,
                size: 150,
                animate: 3000,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });


        }
    });
});