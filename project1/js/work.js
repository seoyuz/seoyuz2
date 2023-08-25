$(function () {
    // const $slider = $(".slider");
    //
    // $slider.on("init", function (event, slick) {
    //     let index = $(this).index();
    //     const ratio = (slick.currentSlide + 1) / slick.slideCount * 100 + "%"
    //     $(".progressBar").eq(index).css("width", ratio);
    // });
    //
    // $slider.slick({
    //     centerMode: true,
    //     centerPadding: "300px",
    //     arrows: false,
    //
    //     // autoplay: true
    // });
    //
    // $slider.on("beforeChange", function (event, slick, current, next) {
    //     let index = $(this).index();
    //     const ratio = (next + 1) / slick.slideCount * 100 + "%"
    //     $(".progressBar").eq(index).css("width", ratio);
    //
    //     //첫슬라이드 버그수정 코드//
    //     if (current !== next) {
    //         $(".slick-current + .slick-cloned").each(function(i, v) {
    //             const item = $(v);
    //             setTimeout(function() {
    //                 item.addClass("slick-current");
    //                 item.addClass("slick-active");
    //             });
    //         });
    //     }
    // });


    // $(".work2023").on("init", function (event, slick) {
    //     const ratio = (slick.currentSlide + 1) / slick.slideCount * 100 + "%"
    //     $(this).siblings().find(".progressBar").css("width", ratio);
    // });
    // $(".work2023").slick({
    //     centerMode: true,
    //     centerPadding: '300px',
    //
    //     arrows: true,
    //     appendArrows: true,
    //     prevArrow: $(this).siblings().find(".prevArrow"),
    //     nextArrow: $(this).siblings().find(".nextArrow"),
    // });
    // $(".work2023").on("beforeChange", function (event, slick, current, next) {
    //     const ratio = (next + 1) / (slick.slideCount) * 100 + "%"
    //     $(this).siblings().find(".progressBar").css("width", ratio);
    // });
    //
    // $(".work2022").on("init", function (event, slick) {
    //     const ratio = (slick.currentSlide + 1) / slick.slideCount * 100 + "%"
    //     $(this).siblings().find(".progressBar").css("width", ratio);
    // });
    // $(".work2022").slick({
    //     centerMode: true,
    //     centerPadding: '300px',
    //
    //     arrows: true,
    //     appendArrows: true,
    //     prevArrow: $(this).siblings().find(".prevArrow"),
    //     nextArrow: $(this).siblings().find(".nextArrow"),
    // });
    // $(".work2022").on("beforeChange", function (event, slick, current, next) {
    //     const ratio = (next + 1) / (slick.slideCount) * 100 + "%"
    //     $(this).siblings(".progressArea").find(".progressBar").css("width", ratio);
    // });
    //
    // $(".work2021").on("init", function (event, slick) {
    //     const ratio = (slick.currentSlide + 1) / slick.slideCount * 100 + "%"
    //     $(this).siblings(".progressArea").find(".progressBar").css("width", ratio);
    // });
    // $(".work2021").slick({
    //     centerMode: true,
    //     centerPadding: '300px',
    //
    //     arrows: true,
    //     appendArrows: true,
    //     prevArrow: $(this).siblings().find(".prevArrow"),
    //     nextArrow: $(this).siblings().find(".nextArrow"),
    // });
    // $(".work2021").on("beforeChange", function (event, slick, current, next) {
    //     const ratio = (next + 1) / (slick.slideCount) * 100 + "%"
    //     $(this).siblings(".progressArea").find(".progressBar").css("width", ratio);
    // });



    $(".slider").each(function () {
        const $progressBar = $(this).parent().find(".progressBar");

        $(this).on("init", function (event, slick) {
            const ratio = (slick.currentSlide + 1) / slick.slideCount * 100 + "%";
            $progressBar.css("width", ratio);
        });

        $(this).on("beforeChange", function (event, slick, currentSlide, nextSlide) {
            const ratio = (nextSlide + 1) / slick.slideCount * 100 + "%";
            $progressBar.css("width", ratio);
        });

        $(this).slick({
            centerMode: true,
            centerPadding: '300px',

            prevArrow: $(this).parent().find(".prevArrow"),
            nextArrow: $(this).parent().find(".nextArrow")
        });
    });


});