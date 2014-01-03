var fs_opts = {
    animation:"slide",
    direction: "horizontal",
    directionNav:false,
    controlNav:false,
    useCSS:false
};

function do_slider() {
    if(typeof(jQuery.flexslider) == 'function') {
        jQuery('.flexslider').flexslider(fs_opts);
    }
}

var searchHideAfterDelay = function() {
	var hideSearchInterval = setInterval(function() {
		if(!$('#searchinput').is(':focus')) {
			$('.headersearchwrapper').slideUp();
			clearInterval(hideSearchInterval);
		}
	}, 5000);
}

$(function() {
    setTimeout(do_slider, 500);

    $('#_search-toggle').bind('click', function() {
    	$('.headersearchwrapper').slideDown(null,searchHideAfterDelay());
    });

})

app.quickView.show = function(){}