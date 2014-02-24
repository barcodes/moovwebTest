$('//body') {

    add_class('_generic-content')

    $('div[@id="container"]/div[@id="main"]') {
        remove('div[@class="breadcrumb"]')
        remove('div[@id="leftcolumn"]')
    }
    
}