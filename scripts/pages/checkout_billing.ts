$('./body') {
    add_class('_checkout-billing')
    remove('//div[@class="billingform"]/div[1]')

    $('.//div[@class="checkoutprogressindicator"]') {
        $('./div[contains(@class, "step3")]//span[@class="value"]') {
            text('Review')
        }
    }
}
