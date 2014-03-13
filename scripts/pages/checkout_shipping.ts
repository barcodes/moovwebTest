$('./body') {
    add_class('_checkout-shipping')
    remove('//div[@class="addressform"]/div[1]')

    $('.//div[@class="checkoutprogressindicator"]') {
        $('./div[contains(@class, "step3")]//span[@class="value"]') {
            text('Review')
        }
    }
}