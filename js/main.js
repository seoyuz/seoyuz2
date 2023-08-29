
$(function() {

    function mousemoveEvent(){
        let $win = $(window);
        const $cursor = $(".followCursor");
        const mousePos = {
            x: 0,
            y: 0,
        }

        $win.on("mousemove", function (event){
            mousePos.x = event.clientX;
            mousePos.y = event.clientY;

            $cursor.css({
                left: mousePos.x,
                top: mousePos.y,
            });
        });
    }
    mousemoveEvent();

    // gsap.registerPlugin(ScrollTrigger);
    //
    // gsap.to(".textScrolling .textLeft",
    //     {
    //         scrollTrigger: {
    //             trigger: ".textScrolling",
    //             top: "top top",
    //             end: "bottom bottom",
    //             pin: true,
    //             markers: true,
    //             scrub: 3,
    //         },
    //         x: 300
    //     }
    // );
    //
    // gsap.to(".textScrolling .textRight",
    //     {
    //         scrollTrigger: {
    //             trigger: ".textScrolling",
    //             top: "top top",
    //             end: "bottom bottom",
    //             pin: true,
    //             markers: true,
    //             scrub: 3,
    //         },
    //         x: -300
    //     }
    // );



    $(".intro .introTxt-3").find("span").on("mouseenter", function() {
        $(".intro .introduceArea .introTxt-3 .introImg").css("opacity", "1");
    }).on("mouseleave", function() {
        $(".intro .introduceArea .introTxt-3 .introImg").css("opacity", "");
    });


    $(window).on("scroll", function() {
        // $(this).scrollTop(); // 스크롤 좌표를 px 단위로 알려준다.
        scrollTop = $(this).scrollTop();
        scrollHeaderEvent();

        //텍스트 스크롤 어케하는거임 ㅜ
        //  $(".textScrolling").find(".textLeft").css("left", Math.max(500 - 0.35 * $(this).scrollY) + "px");

        // $(".textScrolling").find(".textLeft").css({
        //     transform: `translateX(${scrollTop}px)`,
        //    // left: scrollTop + "px",
        // });
    });


    let scrollTop = 0;
    function scrollHeaderEvent() {
        if (scrollTop > 1910) {
            $(".header").addClass("on");
            $(".header .gnb").find("img").attr("src", "../images/arrow.png");
        } else {
            $(".header").removeClass("on");
            $(".header .gnb").find("img").attr("src", "../images/arrow-white.png");
            // $(".header").removeClass("on");
        }
    }
    scrollHeaderEvent();

const $projectSlider = $("#projectSlider");

    $projectSlider.on("init", function (event, slick) {
        $(".textBoxWrap").find(".textBox").eq(slick.currentSlide).addClass("active");

        // $(".project").find(".pageCount").text( `${slick.currentSlide + 1} / ${slick.slideCount}` );
        const ratio = (slick.currentSlide + 1) / slick.slideCount * 100 + "%"
        $(".project").find(".progressBar").css("width", ratio);
    });

    $projectSlider.slick({
        arrows: true,
        prevArrow: $(".slideArea .arrowWrap").find(".prevArrow"),
        nextArrow: $(".slideArea .arrowWrap").find(".nextArrow"),

        variableWidth: true,

        dots: true,
        appendDots: $(".project").find(".dotWrap"),
        dotsClass: "customDots",

        customPaging : function (slick, index) {
            return $(".project").find(".textBoxWrap .textBox").eq(index).find("h3").text();
        }
    });

    $projectSlider.on("beforeChange", function (event, slick, current, next) {
        $(".textBoxWrap").find(".textBox").eq(next).addClass("active");
        $(".textBoxWrap").find(".textBox").eq(next).siblings().removeClass("active");

        // $(".project").find(".pageCount").text( `${next + 1} / ${slick.slideCount}` );
        const ratio = (next + 1) /slick.slideCount * 100 + "%"
        $(".project").find(".progressBar").css("width", ratio);
    });


});


