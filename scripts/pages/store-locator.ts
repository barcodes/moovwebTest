$('//body') {
    add_class('_store-locator')

    remove('.//script[contains(text(), "FastClick.attach")]')
    $('div[@id="container"]/div[@id="main"]') {
        remove('.//div[@class="breadcrumb"]')
        remove('.//div[@id="leftcolumn"]')
    }
    $('.//script[contains(text(), "getStateName")]') {
        text() {
            # replace(/getStateName\("[\w]+"\)/, 'getStateName("null")')
            # replace(/country:\ "US"/, "country: 'null'")
            # replace(/"38.0"/, '25.7')
            # replace(/"-97.0"/, '-80.2')
            replace(/var\ geolocationObject\ =[^;]*/, '')
        }
    }
}