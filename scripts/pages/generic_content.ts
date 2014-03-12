$('body') {
    add_class('_generic-content')

    $('./div[@id="container"]/div[@id="main"]') {
        remove('div[@class="breadcrumb"]')
        remove('div[@id="leftcolumn"]')

        $('./div[@id="content"]/div[@class="contentassetpage"]/div') {
            remove('div/@style')

            $('.//img') {
                remove('@width')
                remove('@height')
                remove('@align')
                remove('@alt')
                perf.optimize_image()
            }

            $('.//div[@class="pressImg"]/a') {
                remove('@rel')
                attribute('target', '_blank')

                $('./img') {
                    perf.optimize_image() {
                        perf.width('140')
                        perf.height('181')
                    }
                }
            }
        }
    }
}
