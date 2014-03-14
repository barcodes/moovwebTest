var fs_opts = {
    animation:"slide",
    directionNav:false,
    useCSS:false
};

function do_slider() {
    if(typeof(jQuery.flexslider) == 'function') {
        jQuery('.flexslider').flexslider(fs_opts);
        _init_panZoom();
    }
}

$(function() {
    setTimeout(do_slider, 500);
    setTimeout(override_functions, 1500);

    $('#_full-site-link').click(function() {
        document.cookie = 'mw_mobile_site=false' + '; domain=.perryellis.com; path=/';
    });

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
                    document.location.href = '/basket';
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

    if($('#menu_container').length < 1) {
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
                $('#header').addClass('menu-open-header-mod');
                $('body').scrollTop(0);
            },
            afterClose: function() {
                html.css('overflow', 'auto');
                $('#header').removeClass('menu-open-header-mod');
            }
        });
        jPM.on();
    }

    if($('body').hasClass('_cart')) {
        // It's hack vs  hack
        equalHeight = function() { return; };
    }
    if($('body').hasClass('_home')) {
        if( document.location.href.indexOf('.es-us.') != -1 ) {
            $('#category-grid').load('/home_blocks/hp-blocks_es.html');
        } else {
            $('#category-grid').load('/home_blocks/hp-blocks.html');
        }
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

(function(window) {
    if (! $.cssProps.transform) {
        $.cssProps.transform = '-webkit-transform';
    }
    var wrapper,
        slider,
        images,
        zoomedImage,
        zoomer,
        button,
        // width of image requested from server, only used for quality:
        imageWidth = 800,
        // size of zoomed image compared to flexslider size:
        zoomMultiplier = 3;
    $('.swatchesdisplay a.swatch').on('click', removeZoomer);

    function init() {
        if (! $('body').hasClass('_product')) {
            return;
        }
        removeZoomer();
        wrapper = $('#_flexslider');
        slider = $('.flexslider');
        images = $('.flexslider li img');
        zoomer = $('<div/>', {
            id: '_product-zoom'
        });
        button = $('<button/>', {
            text: 'Zoom Out'
        });
        zoomer.appendTo(wrapper);
        button.appendTo(zoomer);
        images.on('click', createImage);
        button.on('click', removeImage);
        // possible memory leak: when flexslider is destroyed, we can't remove this
        $('#_flexslider .flex-control-nav a').on('click', removeImage);
    }

    function createImage(event) {
        slider.flexslider('stop');
        zoomer.show();
        var oldImg = $(this),
            w = zoomer.outerWidth(),
            h = zoomer.outerHeight();
        zoomedImage = $('<img/>', {
            src: oldImg.attr('src').replace(/sw=\d+/, 'sw=' + imageWidth)
        });
        zoomedImage
            .appendTo(zoomer)
            .panzoom({
                // contain refuses to work
                // contain: 'invert'
            })
            .panzoom('zoom', zoomMultiplier, {focal: event})
            .on('panzoomend', function(event, panzoom, matrix, changed) {
                if (matrix[4] < -w) {
                    matrix[4] = -w;
                } else if (matrix[4] > w) {
                    matrix[4] = w;
                }
                if (matrix[5] < -h) {
                    matrix[5] = -h;
                } else if (matrix[5] > h) {
                    matrix[5] = h;
                }
                zoomedImage.panzoom('setMatrix', matrix);
            });
    }

    function removeImage() {
        if (! zoomedImage) {
            return;
        }
        zoomedImage.panzoom('destroy');
        zoomedImage.remove();
        zoomedImage = null;
        zoomer.hide();
    }

    function removeZoomer() {
        if (! zoomer) {
            return;
        }
        images.off('click');
        button.off('click');
        removeImage();
        zoomer.remove();
        zoomer = null;
    }

    window._init_panZoom = init;
})(window);

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
                    _init_panZoom();
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
    total = $($('.minicarttotal')[0]).find('a').html();
    total = total ? total.match(/^(\d+,?)+/)[0] : 0;
    if(total > 0) {
        $("#_bag-button").append("<span class='_cart-count'>" + total + "</span>");
    }
}
