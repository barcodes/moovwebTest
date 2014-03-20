$('./body') {
    add_class('_checkout-billing')
    remove('//div[@class="billingform"]/div[1]')

    $('.//div[@class="checkoutprogressindicator"]') {
        $('./div[contains(@class, "step3")]//span[@class="value"]') {
            text('Review')
        }
    }

    $('.//input[@id="dwfrm_billing_billingAddress_addressFields_zip"]') {
        attribute('type', 'tel')
    }
    $('.//input[@id="dwfrm_billing_billingAddress_addressFields_phone"]') {
        attribute('type', 'tel')
    }
    $('.//input[@id="dwfrm_billing_billingAddress_email_emailAddress"]') {
        attribute('type', 'email')
    }
    $('.//input[@id="dwfrm_billing_paymentMethods_creditCard_number"]') {
        attribute('type', 'number')
    }
    $('.//input[@id="dwfrm_billing_paymentMethods_creditCard_cvn"]') {
        attribute('type', 'number')
    }
    $('.//div[@class="checkbox"]') {
        insert_bottom('div', class: 'clear')
    }
    $('//div[@class="formfield giftcertfield"]') {
        wrap_together('./*[@class="label" or @class="value" or @type="submit"]', 'div', class:'_code_input')
        wrap_together('./*[not(@class="_code_input")]', 'div')
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


