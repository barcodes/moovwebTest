$('//html') {
    add_class('_checkout-confirmation')

    $('//div[@id="content"]') {
        $('//div[@class="orderpaymentdetails"]') {
            move('./table/tbody/tr/td','.','top')
            remove('./table')
            $('td') {
                name('div')
            }
        }
        $('//div[@class="ordershipment"]') {
            $('./table/tbody/tr') {
                insert_after('tr') {
                    attributes(colspan: '3')
                }
                move('./td[4]','../tr[2]','top')
            }
            remove('./table/thead/tr/th[4]')
        }
    }
}