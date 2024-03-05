$(function () {
    $("section.project").find(".slider").slick({
        centerMode: true,
        centerPadding: "15%",

        arrows: true,
        prevArrow: $(this).find(".prevArrow"),
        nextArrow: $(this).find(".nextArrow"),
    });
});