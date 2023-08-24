$(function () {
    const $slider = $(".slider");

    $slider.on("init", function (event, slick) {
        const ratio = (slick.currentSlide + 1) / slick.slideCount * 100 + "%"
        $(".slideWrap").find(".progressBar").css("width", ratio);
    })

    $slider.slick({
        centerMode: true,
        centerPadding: "300px",

        arrows: true,
        prevArrow: $(".slideWrap .arrowArea").find(".prevArrow"),
        nextArrow: $(".slideWrap .arrowArea").find(".nextArrow"),
    });

    $slider.on("beforeChange", function (event, slick, current, next) {
        const ratio = (next + 1) / slick.slideCount * 100 + "%"
        $(".slideWrap").find(".progressBar").css("width", ratio);
    });

});