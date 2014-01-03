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

$(function() {
    setTimeout(do_slider, 500);
    setTimeout(override_functions, 1500);
})


function override_functions() {
    app.ProductCache.showImages = function(selectedVal, vals) {
        $.each(vals, function() {
            if (this.val == selectedVal) {
                $('.flexslider').removeData("flexslider");
                $(".flexslider").empty().append("<ul class='slides'>")
                $.each(this.images.large, function() {
                    $(".flexslider ul").append("<li><img src='" + this + "'/></li>");
                });
                $('.flexslider').flexslider(fs_opts);
            }
        });
    }

    app.quickView.show = function(){}
}