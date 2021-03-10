var button = $( "#collapser" );
var tabimg = $( "#icon-img" );
var stp = $( "#savethepub" );

var bntclicked = false;

button.click(function() {
    if (bntclicked === false) {
        tabimg.css({"max-width":"70px", "top":"8%", "left":"21%", "z-index":"0"})
        stp.css({"font-size":"22px", "top":"7%"})

        bntclicked = true;
    }
    else if (bntclicked === true) {
        tabimg.css({"max-width":"113px", "top":"43%", "left":"50%", "z-index":"0"})
        stp.css({"font-size":"22px", "top":"84%"})

        bntclicked = false;
    }
});