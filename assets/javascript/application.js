var fs_opts = {
    animation:"slide",
    //direction: "horizontal",
    directionNav:false,
    //controlNav:false,
    useCSS:false
};

function do_slider() {
    if(typeof(jQuery.flexslider) == 'function') {
        jQuery('.flexslider').flexslider(fs_opts);
    }
}

/*var searchHideAfterDelay = function() {
	var hideSearchInterval = setInterval(function() {
		if(!$('#searchinput').is(':focus')) {
			$('.headersearchwrapper').slideUp();
			clearInterval(hideSearchInterval);
		}
	}, 5000);
}*/

$(function() {
    setTimeout(do_slider, 500);

    /*$('#_search-toggle').bind('click', function() {
    	$('.headersearchwrapper').slideDown(null,searchHideAfterDelay());
    });*/

    setTimeout(override_functions, 1500);

    $("#_flexslider").on('click', '#_slider-prev', function() {
        $(this).parents("#_flexslider").find(".flexslider").flexslider("prev");
    }).on('click', '#_slider-next', function() {
        $(this).parents("#_flexslider").find(".flexslider").flexslider("next");
    });

    if($('body').hasClass('_product-list')) {
        app.quickView.show = function() { return; }
    }

    if($('body').hasClass('_product')) {
        setTimeout(function() {
            $('#_bag-button').bind('DOMSubtreeModified', function(e) {
                if (e.target.innerHTML.length > 0) {
                    document.location.href = $(this).attr('href');
                }
            });
        }, 2500);        
    }

    if($('body').hasClass('_cart')) {

        checkForShippingOptionsInterval = setInterval(function() {
            options = $('#shippingMethodID').children();
            if(options.length > 0) {
                options.each( function() {
                    self = $(this);
                    var option = $('<label for="'+self.attr('value')+'_new" class="shippingLabel">'
                        + '<input type="radio" name="shippingOption" '
                        + 'id="'+self.attr('value')+'_new" value="'+self.attr('value')+'">'
                        + '<span>' +self.text() + '</span>'
                        + '</label>');
                    option.insertBefore($('.calculator > fieldset'));
                    option.find('input').bind('change', function() {
                        self = $(this);
                        value = self.val();
                        $('#shippingMethodID').val(value);
                        $('.calculator > fieldset button').click();
                    });
                });
                $('.shippingLabel :first').attr('checked', true);
                label = $('.calculator > fieldset > div :first').removeAttr().detach();
                $('.calculator').prepend(label);
                clearInterval(checkForShippingOptionsInterval);
            }
        },1000);

        $('._row-qty-plus').bind('click', function() {
            self = $(this);
            input = self.parent().find('.cartquantity');
            value = parseInt(input.val());
            input.val(value+1);
            self.parents('.productrow').find('.updatetextbutton').click();
        });

        $('._row-qty-minus').bind('click', function() {
            self = $(this);
            input = self.parent().find('.cartquantity');
            value = parseInt(input.val());
            if( value > 1 ) {
                input.val(value-1);
            }
            self.parents('.productrow').find('.updatetextbutton').click();
        });

    }

    $('body script').remove();
    $('body').append('<div id="menu_container" style="display:none;"></div>');
    $('#menu_container').append($('.categorywrapper').show().detach());
    var html = jQuery('html');
    var jPM = $.jPanelMenu({
        menu: '#menu_container',
        trigger: '#_menu-button',
        openPosition: '280px',
        beforeOpen: function() {
            html.css('overflow', 'hidden');
            $('#header').css('position', 'absolute').css('top', '-45px');
            $('body').scrollTop(0);
        },
        afterClose: function() {
            html.css('overflow', 'auto');
            $('#header').removeAttr('style');
        }
    });
    jPM.on();

    if($('body').hasClass('_cart')) {
        // It's hack vs  hack
        equalHeight = function() { return; };
    }
    if($('body').hasClass('_home')) {
        $('#category-grid').load('http://www.burkesdesign.com/home_blocks/hp-blocks.html');
    }

    $('div.productdetailcolumn.productimages').remove();

})

$(function setupSortAndRefine() {
    var wrapper = $('#_sort-refine');
    $('#_refine-button').click(function refineButtonClick() {
        wrapper.attr('class', wrapper.hasClass('_show-refine') ? '' : '_show-refine');
    });
    $('#_sort-button').click(function sortButtonClick() {
        wrapper.attr('class', wrapper.hasClass('_show-sort') ? '' : '_show-sort');
    });
});

function override_functions() {
    if(app.ProductCache != null) {
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
    //$(".minicartquantityvalue").each(function() { total += parseInt(this.value); });
    total = $($('.minicarttotal')[0]).find('a').html().match(/^(\d+,?)+/)[0];
    if(total > 0) {
        $("#_bag-button").append("<span class='_cart-count'>" + total + "</span>");
    }
}
