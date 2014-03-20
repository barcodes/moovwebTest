$('./body') {
    add_class('_checkout-shipping')
    remove('//div[@class="addressform"]/div[1]')

    $('.//div[@class="checkoutprogressindicator"]') {
        $('./div[contains(@class, "step3")]//span[@class="value"]') {
            text('Review')
        }
    }

    $('.//input[@id="dwfrm_singleshipping_shippingAddress_addressFields_zip"]') {
        attribute('type', 'tel')
    }
    $('.//input[@id="dwfrm_singleshipping_shippingAddress_addressFields_phone"]') {
        attribute('type', 'tel')
    }

    $('.//div[@class="checkbox"]') {
        $('./label') {
            inner_wrap('span')
            move('../input', '.', 'top')
        }
    }

    $('//div[@class="txtCopyright"]') {
        add_class('_minimal-footer')
        move_to('//div[@id="copytxt"]', 'top')
    }
}