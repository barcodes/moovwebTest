$('//body') {
    add_class('_store-locator')

    remove('.//script[contains(text(), "FastClick.attach")]')
    $('div[@id="container"]/div[@id="main"]') {
        remove('.//div[@class="breadcrumb"]')
        remove('.//div[@id="leftcolumn"]')
    }
}