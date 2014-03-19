$("body") {
    add_class("_product")
    remove("//div[contains(@class, 'contentslotproductdetail')]")
    remove("//div[contains(@class, 'socialmedia')]")
    remove("//div[@id='breadcrumb']")
    remove("//div[@class='productnavigation']")

    insert_top("style", type: "text/css") {
        inject(read("../../assets/stylesheets/flexslider.css"))
        text() {
            replace("/assets/fonts", concat($asset_host, "fonts"))
            replace("/assets/images", concat($asset_host, "images"))
        }
    }
    insert_top("script", type: "text/javascript", src: asset("javascript/jquery.flexslider-min.js"))

    remove("img")
    $("//div[@id='pdpMain']") {
        remove(".//div[contains(@class, 'primaryproductimage')]")
        $(".//div[@class='productinfopricing']") {
            insert_after("div", id:"_flexslider") {
                insert("div", class: "flexslider") {
                    %slider = this()
                    insert("ul", id: "_slider", class: "slides") {
                        %slides = this()
                        %path = path()
                        $("//div[@class='productthumbnails']/img") {
                            copy_to(%path) {
                                attr("src") {
                                    value() {
                                        replace(/sw\=([0-9].*)/, "sw=320")
                                    }
                                }
                                wrap("li")
                            }
                        }
                    }
                }
                move('../div[@class="OneLinkHide"]', '.', 'before')
                move('..//div[@class="promotion"]', '.', 'after')
            }
            $("..") {
                add_class("_slider-container")
            }
            insert_after("div", "Bag", class: "_configure") {
                insert_at("top", "i", class: "fa fa-plus-circle")
            }
        }

        $('.//div[contains(@class, "detailsblock")][not(contains(@class, "_slider-container"))][1]') {
            move_here('//div[@class="itemNo productid"]', 'top')
        }

        $('//div[@class="quanity"]') {
            $('./span[@class="label"]') {
                text('Qty:')
            }
            $('./input[@class="quantityinput"]') {
                attribute('type', 'tel')
            }
        }
    }

    $("//div[@id='pdpTabsDiv']") {
        attributes(id: "_mw_was_pdpTabsDiv", class: "_mw_was_product_tabs")
        $("ul") {
            name("div")
            attributes(data-ur-set: "tabs")
            $("li") {
                name("div")
                %contentid = fetch("a/@href")
                %contentid {
                    replace("#", "")
                }
                $("a") {
                    attributes(data-ur-tabs-component: "button", href: 'javascript:void(0);', data-ur-tab-id: %contentid)
                    insert("i", class: "fa fa-plus-circle")
                    insert("i", class: "fa fa-minus-circle")
                }
                move_here("//div[@id='" + %contentid + "']") {
                    attributes(data-ur-tabs-component: "content", data-ur-tab-id: %contentid)
                    remove('./a[@class="printpage"]')
                }

                $('./div[@id="pdpContactTab"]//tr[last()]/td/p[contains(text(), "1.800")]') {
                    %foo = text()
                    %foo {
                        replace('.', '-')
                    }
                    inner_wrap('a', href:'tel:' + %foo)
                }
            }
        }

    }
    $('//script[contains(text(), "getRRDisplayCode")]') {
        text() {
            replace('isMobileDevice ? "mobile" : ""', 'isMobileDevice ? "" : ""')
        }
        move_to('/html/body')
    }
}