$('//body') {

    insert('script', type: 'text/javascript', src: asset('javascript/geo.js'))

    add_class('_store-locator')

    remove('.//script[contains(text(), "FastClick.attach")]')
    $('div[@id="container"]/div[@id="main"]') {
        remove('.//div[@class="breadcrumb"]')
        remove('.//div[@id="leftcolumn"]')
    }
    $('.//script[contains(text(), "getStateName")]') {
        text() {
            replace(/var\ geolocationObject\ =[^;]*/, '')
            replace('jQuery(document).ready(function()', 'window.callLocationLookup = (function()')
        }
    }
}