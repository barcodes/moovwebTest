$("//body") {
    add_class("_product-list")
    remove("//div[@id='mysitewide-banner']/@style")
    remove("//script[contains(text(), 'productsPerRow = 3.0;')]")
    remove("//div[@class='quickviewbutton']")

    $("//div[@id='leftcolumn']") {
        insert_before("div", class: "_action-buttons") {
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
    }
    $("//img[contains(@src, 'sw=15')]") {
        attr("src") {
            value() {
                replace("sw=15", "sw=30")
            }
        }

    }

    $("//div[@id='productresultarea']") {
        remove("@style")
        remove("//div[@class='searchresultsfooter']/div[@class='pagination']")
        move_here("//div[@class='pagination']", "after")
    }

    remove("//div[@class='linkTop']")
    remove("//div[@class='searchresultsheader']")
    remove("//a[@class='pagelast']/..")
    remove("//a[@class='pagefirst']/..")
}