$('//body') {
    add_class('_customer-service')

    $('div[@id="container"]/div[@id="main"]') {
        remove('div[@class="breadcrumb"]')
        remove('div[@id="leftcolumn"]')

        $('.//div[@class="blockCustService"]/div[@class="block_call"]/p[contains(text(), "1-800")]') {
            %foo = text()
            inner_wrap('a', href:'tel:' + %foo)
        }
    }
}