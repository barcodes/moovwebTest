$("./body") {
    add_class("_product-list")

    remove(".//div[@id='mysitewide-banner']/@style")
    remove(".//script[contains(text(), 'productsPerRow = 3.0;')]")
    remove(".//div[@class='quickviewbutton']")
    remove(".//div[contains(@class, 'cat-banner')]")

    $(".//div[@id='pe_rBanner']") {
        move('../div[@class="extended-text"]','.','after')
        $('../div[@class="extended-text"]') {
            $('a') {
                text('')
                insert('i', class: 'fa fa-info-circle')
            }
            move('./div[@class="extended-text-content"]','.','after')
        }
    }
    $('.//div[contains(@class, "producthits")]') {
        insert_before('div', id:'_sort-refine') {
            insert("div", class: "_action-buttons") {
                insert("a", id: "_sort-button", class: "_action-button") {
                    insert("div", "Sort") {
                        insert("i", class: "fa fa-chevron-down")
                    }
                }
                insert("a", id: "_refine-button", class: "_action-button") {
                    insert("div", "Refine") {
                        insert("i", class: "fa fa-chevron-down")
                    }
                }
            }
            move_here('//div[@class="searchrefinements"]') {
                $('./div[contains(@class, "refinement")]/div[@class="refinedclear"]') {
                    remove_text_nodes()
                    $('./a') {
                        text('')
                        insert('i', class:'fa fa-times-circle-o')
                    }
                    # Prevent from getting picked up for JS AJAX calls:
                    attr('class', '_refinedClear')
                }
            }
            insert('ul', class:'_sort-options') {
                move_here('//select[@id="grid-sort-header"]/option') {
                    name('a')
                    attr('href', fetch('./@value')) {
                        value() {
                            replace(/^https?:\/\/www\.perryellis\.com/, '')
                        }
                    }
                    remove('./@value')
                    match(fetch('./@selected'), 'selected') {
                        add_class('_selected')
                        remove('./@selected')
                    }
                    wrap('li')
                }
            }
        }
    }
    $(".//img[contains(@src, 'sw=15')]") {
        attr("src") {
            value() {
                replace("sw=15", "sw=30")
            }
        }
    }

    $(".//div[@id='productresultarea']") {
        remove("@style")
        remove("//div[@class='searchresultsfooter']/div[@class='pagination']")
        move_here("//div[@class='pagination']", "after")

        remove('./div/div[@class="clear"]')

        $('./div[1]') {
            move_here('../div[position() > 1]/div')
        }
        remove('./div[position() > 1]')
    }
    $('.//div[@class="swatches"]') {
        $('.//div[@class="innerpalette"]/a[2]') {
            $('../../../..//div[@class="image"]') {
                insert('div', 'More colors available', class: 'more_options_available')
            }
        }
    }

    remove(".//div[@class='linkTop']")
    remove(".//div[@class='searchresultsheader']")
    remove(".//a[@class='pagelast']/..")
    remove(".//a[@class='pagefirst']/..")
}