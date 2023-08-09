
function hoverHeaderEvent() {
    const $headerGnb = $(".headerBottom");

    // $headerBottom.find(".headerGnb").css("display", "inline-block");
    $headerGnb.on("mouseenter", function () {
        $(this).addClass("active");
        // $(".headerBottom").addClass("active");
    });
    $headerGnb.on("mouseleave", function () {
        $(this).removeClass("active");
        // $(".headerBottom").removeClass("active");
    });
}
hoverHeaderEvent();

$(function () {
    $(".scMain").find("#main-slider").slick({
        arrows: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,

        prevArrow: $(".main-slide-btn-wrap").find(".slide-prev"),
        nextArrow: $(".main-slide-btn-wrap").find(".slide-next"),
    });

    $(".sc2").find(".quick-list-title").on("click", function () {
        const $quickListLink = $(".sc2").find(".quick-list-link")

        $quickListLink.slideToggle();

    })
});


$(".quickTabArea .quickTabTitle li").on("click", function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    let index = $(this).index();
    console.log(index);

    $(".quickTabArea .quickTabCon .quickTabContent").eq(index).addClass("active");
    $(".quickTabArea .quickTabCon .quickTabContent").eq(index).siblings().removeClass("active");
});

$(".sc2 .accordionArea").find(".leftAccordionTitle").on("click", function () {

    const li = $(this).closest("li");

    li.find(".leftAccordionDesc").slideToggle();
    li.siblings().find(".leftAccordionDesc").slideUp();

    li.find("i").toggleClass("active");
    li.siblings().find("i").removeClass("active");
})

$(".boardArea .tabs li").on("click", function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    let i = $(this).index();


    $(".boardArea .boardBox .noticeBoard").eq(i).addClass("active");
    $(".boardArea .boardBox .noticeBoard").eq(i).siblings().removeClass("active");
});

$(".newsTabArea .newsTabTitle li").on("click", function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let i = $(this).index();
    $(".newsTabArea .newsTabCon").eq(i).addClass("active");
    $(".newsTabArea .newsTabCon").eq(i).siblings().removeClass("active");
});

$(".snsTabArea .snsTabTitle li").on("click", function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let i = $(this).index();
    $(".snsTabArea .snsTabCon").eq(i).addClass("active");
    $(".snsTabArea .snsTabCon").eq(i).siblings().removeClass("active");

    $(".snsTabArea").find(".snsTabCon").eq(i).addClass("active");
    $(".snsTabArea").find(".snsTabCon").eq(i).siblings().removeClass("active");
});


$("footer").find("#footerSlider").slick({
    autoplay: true,
    autoplaySpeed: 1200,

    slidesToShow: 6,
    variableWidth: true,

    arrows: true,
    prevArrow: $(".footerSliderArea .footerSlideArrow").find(".prev"),
    nextArrow: $(".footerSliderArea .footerSlideArrow").find(".next"),
});