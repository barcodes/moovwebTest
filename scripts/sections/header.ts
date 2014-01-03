$("//div[@id='header']") {
    name("header")
    add_class("_header")
    $("//li[contains(@class, 'topLevelMenu')]") {
        attributes(data-ur-set:'toggler')
        $("a") {
            attributes(data-ur-toggler-component: 'button', href: 'javascript:void(0);')
            $(". | ../div//a")
            {
                insert("i", class:"fa fa-chevron-right")
            }
        }
        $("div[not(contains(@class, 'hasThirdLevel')) and not(contains(@class, 'subcategories'))]") {
            attributes(data-ur-toggler-component: 'content')
            remove("@class")
        }
    }
    $("//div[@class='headerslotcontent']/div[@class='bottombannercontainer']") {
        remove(".//@style")
        remove(".//span/span")
    }
    $("//div[@class='headerleft']") {
        insert_top('a', id:'_search-toggle') {
            insert('i', class:'fa fa-search')
        }
    }
    $("//div[@class='categorywrapper']") {
        attributes(data-ur-toggler-component: "content")
        wrap("div", data-ur-set: "toggler")
        {
            insert_top("div",class: "_header-buttons") {
                insert_top("a", id:"_bag-button", class: "_header-button", href: fetch("//a[@class='linkminicart']/@href"))
                {
                    insert("div") {
                        insert("span", "My Bag") {
                            insert_top("i", class: "_button-bag")
                        }
                    }
                }
                insert_top("a", id:"_sale-button", class: "_header-button", href: "/sale")
                {
                    insert("div", "Sale") {
                        insert_top("i", class: "fa fa-tags")
                    }
                }
                insert_top("a", id:"_menu-button", class: "_header-button", data-ur-toggler-component: "button")
                {
                    insert("div", "Menu") {
                        insert_top("i", class: "fa fa-bars")
                    }
                }
            }
        }
        $(".//li[@class='test']/a[@class='hasThirdLevelMobile']/..") {
            attributes(data-ur-set: "toggler")
            $("a[@class='hasThirdLevelMobile']") {
                attributes(data-ur-toggler-component: "button")
            }
            insert("div", data-ur-toggler-component: "content") {
                move_here("../div[@class='subcategories']")
            }
        }
    }
    $(".//script[contains(text(), 'width:\"580px\"')]") {
        text() {
            replace("width:\"580px\"", "width:\"98%\", height:\"100%\"")
        }
    }
}
