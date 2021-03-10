var button = $( "#collapser" );
var tabimg = $( "#icon-img" );
var stp = $( "#savethepub" );

var bntclicked = false;

button.click(function() {
    if (bntclicked === false) {
        tabimg.css({"max-width":"70px", "top":"8%!important", "left":"21%!important", "z-index":"0"})
        stp.css({"font-size":"22px", "top":"7%!important"})

        bntclicked = true;
    }
    else if (bntclicked === true) {
        tabimg.css({"max-width":"113px", "top":"43%!important", "left":"50%!important", "z-index":"0"})
        stp.css({"font-size":"22px", "top":"84%!important"})

        bntclicked = false;
    }
});