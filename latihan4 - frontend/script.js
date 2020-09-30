$(document).ready(function () {
    const downbtn = $('#down-btn');
    const oyen = $(".float-nav");
    const part2 = $("#part2");

    const digidoc = `<ul>
    <li><a href=""> digi one</a></li>
    <li><a href=""> digi two</a></li>
    <li><a href=""> digi three</a></li>
</ul>`;

    $(downbtn).click(function (e) {
        console.log("yash");
        $(window).scrollTop($(part2).offset().top);
    })
    $(document).click(function (e) {

        if (e.target.localName == "a") {
            const data = e.target.dataset.id;
            // $(oyen).fadeIn(1000);
            $(oyen).show();
            if (data == "digidoc") {
                $(oyen).html(digidoc);
            } else {
                $(oyen).text(data);
            }
        } else {
            $(oyen).hide();
        }

        var eTop = $(e.target).offset().top; //get the offset top of the element
        console.log(eTop + " - " + $(window).scrollTop());
        console.log(eTop - $(window).scrollTop()); //position of the ele w.r.t window

    });


    // $(window).scroll(function () { //when window is scrolled
    //     console.log(eTop - $(window).scrollTop());
    // });
})