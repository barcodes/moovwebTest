$('//body') {
    add_class('_wish-list-search-results')
    $('div[@id="container"]/div[@id="main"]') {
        remove('div[@class="breadcrumb"]')
        remove('div[@id="leftcolumn"]')
        
        $('.//div[./button[@value="Find"]]') {
            attributes(class: 'formactions fullwidth')
        }
    }
}