$$('.shippingmethods') {
    $('./div[@class="shippingmethod"]/div[@class="value"]') {
        $('./label') {
            wrap_text_children('span')
            move('../input', '.', 'top')
        }
    }
}