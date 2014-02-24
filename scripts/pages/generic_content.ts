$('//body') {

    add_class('_generic-content')

    $('div[@id="container"]/div[@id="main"]') {
        remove('div[@class="breadcrumb"]')
        remove('div[@id="leftcolumn"]')

        $('div[@id="content"]/div[@class="contentassetpage"]/div') {

            remove('div/@style')

            $('//img') {
                remove('@width')
                remove('@height')
                remove('@align')
                remove('@alt')
            }
        }

    }

}