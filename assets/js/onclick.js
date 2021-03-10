var button = $( "#collapser" );
var tabimg = $( "#icon-img" );
var stp = $( "#savethepub" );

var bntclicked = false;

button.click(function() {
    if (bntclicked = false) {
        alert("FALSE");
        $( "#icon-img" ).css("max-width", "70px");
        tabimg.css("top", "8%!important");
        tabimg.css("left", "21%!important");
        tabimg.css("z-index", "0");

        stp.css("top", "7%!important");
        stp.css("font-size", "22px");

        bntclicked = true;
    }
    else if (bntclicked = true) {
        alert("TRUE");
        $( "#icon-img" ).css("max-width", "113px");
        tabimg.css("top", "43%!important");
        tabimg.css("left", "");
        tabimg.css("z-index", "0");

        stp.css("top", "84%!important");
        stp.css("font-size", "22px");

        bntclicked = false;
    }
});