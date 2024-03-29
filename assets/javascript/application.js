// hack due to removing plugins
$.fn.jcarousel = function() {
    return false;
}
$.fn.tooltip = function() {
    return false;
}
$.fn.tabs = function() {
    return false;
}



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

    setTimeout(override_functions, 1500);
    if (! $('body').hasClass('_product-list')) {
        setTimeout(do_slider, 500);
    }

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
                    $('#_checkout-btn-container').show('fast', function() {
                        console.log('foo');
                        $('body').scrollTop($('#_checkout-btn-container').offset().top - 50);
                    });
                }
            });
        }, 2500);        

        $('._configure').click(function() {
            var dest = $('.swatches, .availability').offset().top - $('#header').outerHeight();
            $('html, body').animate({
                scrollTop: dest
            }, 400);
        });

        setTimeout( function() {
            $('.selected a').each( function () {
                var self = $(this);
                self.click();
            });
            if($('span[class="BVRRNumber"]').length == 0) {
                $('span[data-ur-tab-id="pdpReviewsTab"]').parent().remove()
            }
        }, 2000);

        $('#BVCustomerRatings').bind('click', function() {
            $('#_mw_was_pdpTabsDiv > div > div').each(function() {
                $(this).find('> span, > div').attr('data-ur-state','disabled');
            });
            $('#pdpReviewsTab, span[data-ur-tab-id="pdpReviewsTab"]').attr('data-ur-state','enabled');
            var reviewsVPos = $('span[data-ur-tab-id="pdpReviewsTab"]').offset().top;
            $('body').scrollTop(reviewsVPos - 50);
        });

    }

    if($('body').hasClass('_cart')) {

        checkForShippingOptionsInterval = setInterval(function() {
            var options = $('#shippingMethodID').children();
            if(options.length > 0) {
                options.each( function() {
                    var self = $(this);
                    var option = $('<label for="'+self.attr('value')+'_new" class="shippingLabel">'
                        + '<input type="radio" name="shippingOption" '
                        + 'id="'+self.attr('value')+'_new" value="'+self.attr('value')+'">'
                        + '<span>' +self.text() + '</span>'
                        + '</label>');
                    option.insertBefore($('.calculator > fieldset'));
                    option.find('input').bind('change', function() {
                        var value = $(this).val();
                        $('#shippingMethodID').val(value);
                        $('.calculator > fieldset button').click();
                    });
                });
                $('.shippingLabel :first').attr('checked', true);
                var label = $('.calculator > fieldset > div :first').removeAttr().detach();
                $('.calculator').prepend(label);
                clearInterval(checkForShippingOptionsInterval);
            }
        },1000);

        $('.cartquantity').bind('change', {delta: 0}, updateQuantity);
        $('._row-qty-plus').bind('click', {delta: 1}, updateQuantity);
        $('._row-qty-minus').bind('click', {delta: -1}, updateQuantity);

        function updateQuantity(event) {
            var delta = event.data.delta,
                self = $(this),
                input = self.parent().find('.cartquantity'),
                value = parseInt(input.val()) + delta,
                row = self.parents('.productrow');
            if (value < 1) {
                value = 1;
            }
            input.val(value);
            $('<div/>', {
                'class': '_loader',
                'html': '<i class="fa fa-spinner fa-spin"></i>'
            }).appendTo(row);
            row.find('.updatetextbutton').click();
        }
    }

    if( $('body').hasClass('_checkout-login') 
        || $('body').hasClass('_account-login') 
        || $('body').hasClass('_checkout-shipping') 
        || $('body').hasClass('_checkout-billing') ) {

        $('div[class="checkbox"]').unbind().bind('click', function() { 
            var cb = $(this).find('input[type="checkbox"]');
            if(cb.prop('checked')==true) {
                cb.prop('checked', false);
            } else {
                cb.prop('checked', true);
            }
        });

        if($('body').hasClass('_checkout-shipping')) {
            var shippingMethodCheck = setInterval(function() {
                if($('.shippingmethod').length == 0) {
                    return;
                }
                $('.shippingmethods .shippingmethod').unbind().bind('click', function() { 
                    var rb = $(this).find('input[type="radio"]').prop('checked', true);
                });
                clearInterval(shippingMethodCheck);
            }, 1000);
        }

        if($('body').hasClass('_checkout-billing')) {
            $('.paymentmethods label').unbind().bind('click', function() { 
                var rb = $(this).find('input[type="radio"]').prop('checked', true);
                if($(this).attr('for').toLowerCase().indexOf('paypal') == -1) {
                    $('#PaymentMethod_CREDIT_CARD').show();
                    $('#PaymentMethod_PayPal').hide();
                } else {
                    $('#PaymentMethod_CREDIT_CARD').hide();
                    $('#PaymentMethod_PayPal').show();
                }
            });
        }

    }

    if($('#menu_container').length < 1) {
        $('<aside style="display:block;"></aside>').insertAfter('#container');
        $('body aside').append('<div id="mw-aside-scroller"></div>');
        $('#mw-aside-scroller').append($('.categorywrapper').show().detach());

        $('.menu-button').bind('click', function() {
            $('body').toggleClass("mw-menu-open");
            document.location.href = "#mw-aside-scroller";
        });
    }

    if($('body').hasClass('_cart')) {
        // It's hack vs  hack
        equalHeight = function() { return; };
    }

    $('div.productdetailcolumn.productimages').remove();

    var scrollToTopOffset = 450;
    var scrollToTopDuration = 500;

    $(window).scroll(function() {
        if ($(this).scrollTop() > scrollToTopOffset) {
            $('#_scroll-to-top').fadeIn(scrollToTopDuration);
        } else {
            $('#_scroll-to-top').fadeOut(scrollToTopDuration);
        }
    });

    $('#_scroll-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, scrollToTopDuration);
        return false;
    }).hide();

    $('a[id="f1contextchooser"]').bind('click', function() {
        event.preventDefault();
        $('body').removeClass('mw-menu-open');
        //app.dialog.openContextChooser('/on/demandware.store/Sites-perryellis-Site/default/FiftyOne-ShowContextChooser?p=','International Shipping');
    });


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
        zoomInButton,
        zoomOutButton,
        zoomInHasShown = false,
        zoomOutHasShown = false,
        showButtonsOnSwatchChange = true,
        // width of image requested from server, only used for quality:
        imageWidth = 800,
        // size of zoomed image compared to flexslider size:
        zoomMultiplier = 3,
        zoomInText = 'Tap to Zoom In',
        zoomOutText = 'Tap to Zoom Out',
        buttonDisplayDuration = 2500;
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
        if (showButtonsOnSwatchChange) {
            zoomInHasShown = false;
            zoomOutHasShown = false;
        }
        if (! zoomInHasShown && ! $('._product-zoom-in', wrapper).length) {
            zoomInButton = $('<button/>', {
                'text': zoomInText,
                'class': '_product-zoom _product-zoom-in'
            });
            zoomInButton
                .show()
                .on('click', removeImage)
                .appendTo(wrapper);
            setTimeout(function() {
                zoomInButton.fadeOut();
            }, buttonDisplayDuration);
        }
        if (! zoomOutHasShown) {
            zoomOutButton = $('<button/>', {
                'text': zoomOutText,
                'class': '_product-zoom'
            });
            zoomOutButton.appendTo(zoomer);
            zoomOutButton.on('click', removeImage);
        }
        zoomer.appendTo(wrapper);
        images.on('click', createImage);
        // possible memory leak: when flexslider is destroyed, we can't remove this
        $('#_flexslider .flex-control-nav a').on('click', removeImage);

    }

    function createImage(event) {
        var w, h,
            oldImg = $(this);
        slider.flexslider('stop');
        if (! zoomOutHasShown) {
            zoomOutHasShown = true;
            setTimeout(function() {
                zoomOutButton.fadeOut();
            }, buttonDisplayDuration);
        }
        zoomer.show();
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
            .on('load', function() {
                w = zoomedImage.outerWidth();
                h = zoomedImage.outerHeight();
            });
        zoomedImage.on('panzoomend', function(event, panzoom, matrix, changed) {
            if (changed) {
                if (matrix[4] < -w) {
                    matrix[4] = -w;
                } else if (matrix[4] > w) {
                    matrix[4] = w;
                }
                // 60 from padding:
                if (matrix[5] < -h - 60) {
                    matrix[5] = -h - 60;
                } else if (matrix[5] > h) {
                    matrix[5] = h;
                }
                zoomedImage.panzoom('setMatrix', matrix);
            } else {
                removeImage();
            }
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
        if (zoomInButton) {
            zoomInButton.remove();
            zoomInButton = null;
        }
        if (zoomOutButton) {
            zoomOutButton.off('click');
        }
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
    $('aside').height($('html').height());
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

$(function() {
    if ($('body').hasClass('_store-locator')) {
        console.log('setting up locator handlers');

        var _oldGetStoreListHtml = window.getStoreListHtml,
            matchTel = /Main Line: ([-\d]+)<br \/>/g;
        window.getGoogleMapLinkHtml = function() { return ''; };
        window.getStoreListHtml = function() {
            return _oldGetStoreListHtml.apply(window, arguments)
                .replace(matchTel, '<a href="tel:$1">Call</a>')
                .replace(/\|/g, '')
                .replace(/>Directions</g, '>Map<');
        }
    }
});
