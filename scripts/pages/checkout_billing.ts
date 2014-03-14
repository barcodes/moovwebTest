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
}
