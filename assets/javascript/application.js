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

    $("#_flexslider").on('click', '#_slider-prev', function() {
        $(this).parents("#_flexslider").find(".flexslider").flexslider("prev");
    }).on('click', '#_slider-next', function() {
        $(this).parents("#_flexslider").find(".flexslider").flexslider("next");
    });
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

    var origAddMiniCart = app.minicart.add;
    app.minicart.add =  function(progressImageSrc, postdata, callback) {
        origAddMiniCart(progressImageSrc, postdata, function() {
            _updateMobileCart();
            callback();
        })
    }

    _updateMobileCart();
}

function _updateMobileCart() {
    var $cartTotal = $(".linkminicart").text();
    var total = 0;
    $(".minicartquantityvalue").each(function() { total += parseInt(this.value); });
    if(total > 0) {
        $("#_bag-button").append("<span class='_cart-count'>" + total + "</span>");
    }
}

