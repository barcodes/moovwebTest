$('//html') {
    add_class('_checkout-confirmation')

    $('//div[@id="content"]') {
        $('//div[@class="orderpaymentdetails"]') {
            move('.//td[@class="orderbilling"]','.','top')
            move('.//td[@class="orderpaymentinstruments"]','.','top')
            move('.//td[@class="orderpaymentsummary"]','.','top')
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
        
        # $('//div[@class="ordershipment"]') {
        #     $('./table/tbody/tr') {
        #         insert_after('tr') {
        #             attributes(colspan: '3')
        #         }
        #         move('./td[4]','../tr[2]','top')
        #     }
        #     remove('./table/thead/tr/th[4]')
        # }
    }
}