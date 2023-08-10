$(function () {

    $(".business").find(".tabTitle li").on("click", function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        const i = $(this).index()
        $(".business").find(".tabContent").eq(i).addClass("active");
        $(".business").find(".tabContent").eq(i).siblings().removeClass("active");
    });








});