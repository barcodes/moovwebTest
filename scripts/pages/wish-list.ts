$('//body') {
    add_class('_wish-list')
    $('div[@id="container"]/div[@id="main"]') {
        remove('div[@class="breadcrumb"]')
        remove('div[@id="leftcolumn"]')

        $('.//div[./button[@value="Find"]]') {
            attributes(class: 'formactions fullwidth')
        }

        $('.//div[@class="wishlist"]') {
            move('./div[@class="wishlistsearchform"]', '.', 'bottom')
        }

    }
    $('.//div[@class="wishlistproducts"]') {
        move_here('.//tr[@class="tablerow"]') {
            name('div')
            attributes(class: 'review-row')
            $('./td') {
                name('div')
                $('./div[@class="wishlistaddtocart"]') {
                    insert_after('div', class: 'clear')
                }
            }
            move('.//div[@class="wishlistdateadded"]', '.', 'top')
        }
    }
    remove('.//table[@class="productlisttable"]')
}