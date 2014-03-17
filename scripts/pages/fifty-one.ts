inner() {
    replace('https://www.perryellis.com/','/')
    replace('http://www.perryellis.com/','/')
}
$('div[@id="page"]') {
    $('.//div[@id="internationalShipping"]') {
        $('.//span[@class="smallNote"]') {
            insert_top('div', class: 'clear')
        }
    }
}