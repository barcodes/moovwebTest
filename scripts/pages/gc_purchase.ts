$('//body') {
    add_class('_gc-purchase')
    $('div[@id="container"]/div[@id="main"]') {
        remove('div[@class="breadcrumb"]')
        remove('div[@id="leftcolumn"]')
    }
    $('//table[@class="giftcertificateamounttable"]/tr') {
        insert_bottom('td') {
            move('..//button[@id="AddToBasketButton"]', '.')
        }
    }
}