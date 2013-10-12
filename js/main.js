//Initialize function
var init = function () {
    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });
    
    var img = $("#awesome");
    img.click(function(){
    	if (img.attr("data-awesome")){
    		img.attr("src","img/gang-on.png");
    		img.attr("data-awesome","yerp");
    	} else {
    		img.attr("src", "img/gang.png");
    		img.removeAttr("data-awesome");
    	}
    });
};
$(document).ready(init);
