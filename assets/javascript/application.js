var fs_opts = {
    animation:"slide",
    direction: "horizontal",
    directionNav:false,
    controlNav:false,
    useCSS:false
};

function do_slider() {
    debugger;
    if(typeof(jQuery.flexslider) == 'function') {
        jQuery('.flexslider').flexslider(fs_opts);
    }
}

$(function() {
    setTimeout(do_slider, 500);
})