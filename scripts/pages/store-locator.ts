$('//body') {
    add_class('_store-locator')

    $('div[@id="container"]/div[@id="main"]') {
        remove('.//div[@class="breadcrumb"]')
        remove('.//div[@id="leftcolumn"]')
    }
}