$( function() {
    $(".historyTab li").on("click",function () {
        let i = $(this).index();
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        $(".historyCon").eq(i).addClass("active");
        $(".historyCon").eq(i).siblings().removeClass("active");
    });

    $( ".historyCon" ).draggable({
        axis: "x"
    });





});