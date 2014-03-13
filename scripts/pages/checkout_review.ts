$('//body') {
    add_class('_checkout-review')

    $('.//div[@class="checkoutplaceorder"]') {
        $('./table[@class="placeordertableheader"]') {
            remove('./thead')

            $('./table') {
                name('div')
                remove('./tfoot')

                $('./tr') {
                    name('div')

                    $('./td') {
                        name('div')
                    }

                    $('./div[@class="quantitycolumn"]/div') {
                        inner() {
                            prepend('<strong>Quantity:</strong> ')
                        }
                    }

                    $('./div[@class="unitpricecolumn"]/div[@class="price"]') {
                        inner() {
                            prepend('<strong>Unit Price:</strong> ')
                        }
                    }

                    $('./div[contains(@class, "itemtotalcolumn")]') {
                        inner() {
                            prepend('<strong>Total Price:</strong> ')
                        }
                    }

                    wrap_together('./div[position() > 1]', 'div', class:'right-side')
                }
            }

            unwrap()
        }

        remove('./div[@id="rightcolumn"]/div[@class="checkoutminisummary"]')
    }
}
