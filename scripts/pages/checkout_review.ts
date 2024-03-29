$('./body') {
    add_class('_checkout-review')

    $('.//div[@class="checkoutprogressindicator"]') {
        $('./div[contains(@class, "step3")]//span[@class="value"]') {
            text('Review')
        }
    }

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

    $('//div[@class="txtCopyright"]') {
        add_class('_minimal-footer')
        move_to('//div[@id="copytxt"]', 'top')
    }
}
