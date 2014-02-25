$('//body') {
    add_class('_account-login')
    $('div[@id="container"]/div[@id="main"]') {
        remove('div[@class="breadcrumb"]')
        remove('div[@id="leftcolumn"]')

        $('div[@id="content"]/div[@class="accountlogin"]') {
            $('div') {
                wrap('div') {
                    attribute('class', 'repad')
                }
            }
        }

    }
}