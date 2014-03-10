$('//body') {
    add_class('_account-order')

    $('div[@id="container"]/div[@id="main"]') {
        remove('div[@class="breadcrumb"]')
        remove('div[@id="leftcolumn"]')
    }

    $('//div[@id="content"]') {
        $('//div[@class="orderpaymentdetails"]') {
            move('./table/tr/td','.','top')
            remove('./table')
            $('td') {
                name('div')
            }
        }
        $('//div[@class="ordershipment"]') {
            $('./table') {
                $('./tr') {
                    insert_after('tr') {
                        attributes(class: 'shipping-row')
                    }
                    move('./td[4]','following-sibling::tr','top')
                }
                $('tr[@class="shipping-row"]/td') {
                    remove('@rowspan')
                    attributes(colspan: '3')
                }
                remove('./thead/tr/th[4]')
            }
        }
    }

}