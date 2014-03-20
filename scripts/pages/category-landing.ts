$('body') {
    add_class('_category-landing')

    remove('.//div[@id="leftcolumn"]')
    remove('.//script[contains(text(), "screen.width")]')
    $('.//div[contains(@class, "bottombannercontainer")]') {
        remove('.//div/@style')
        remove('.//br')
        remove('.//a[./div[contains(text(), "shop now")]]')
        move_here('.//table/tr/td/img', 'top')
        move_here('.//table/tr[./td/a]') {
            name('div')
            add_class('_image-group')
            $('./td') {
                name('span')
                remove('./@width')
                remove('./@height')
                remove('./@colspan')
            }
        }
        remove('.//table')
    }
}
