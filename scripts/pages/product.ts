$("body") {
    add_class("_product")
    remove("//div[contains(@class, 'contentslotproductdetail')]")
    remove("//div[contains(@class, 'socialmedia')]")
    remove("//div[@id='breadcrumb']")

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
            $('//div[@class="promotion"]') {
                insert('div', id: "_promotion-details-container", data-ur-set: 'toggler') {
                    move_here('..//a[@id="tooltipviewdetails"]') {
                        name('div')
                        attributes(data-ur-toggler-component: 'button')
                        insert_top('i', class: 'fa fa-info-circle')
                        move('./div[@class="tooltip-body"]', '.', 'after')
                    }
                    $('./div[@class="tooltip-body"]') {
                        remove('@style')
                        attributes(data-ur-toggler-component: 'content')
                    }
                }
                remove('.//span[@class="formfieldtooltip"]')
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

        $('.//div[@id="pdpATCDivpdpMain"]') {
            insert_after('div', id: '_checkout-btn-container', style: 'display: none;') {
                insert('span') {
                    text('Added To Bag')
                    insert_top('i', class: 'fa fa-check')
                }
                insert('a', href: '/basket/', class: "checkout-btn", 'Check Out')
                insert('div', class: 'clear')
            }
        }
    }

    move('//div[@class="productnavigation"]', '//div[@id="divFiftyOneWelcomeMatParams"]', 'after')
    $('//div[@class="productnavigation"]') {
        remove('.//img')
        $('./div[@class="productprevious"]/a/span') {
            text() {
                replace('«', '')
            }
            insert_top('i', class: 'fa fa-chevron-circle-left')
        }
        $('./div[@class="productnext"]/a/span') {
            text() {
                replace('»', '')
            }
            insert('i', class: 'fa fa-chevron-circle-right')
        }
    }

    $("//div[@id='pdpTabsDiv']") {
        attributes(id: "_mw_was_pdpTabsDiv", class: "_mw_was_product_tabs")
        $("ul") {
            name("div")
            attributes(data-ur-set: "tabs", data-ur-closeable: "true")
            $("li") {
                name("div")
                %contentid = fetch("a/@href")
                %contentid {
                    replace("#", "")
                }
                $("a") {
                    name('span')
                    remove('./@href')
                    attributes(data-ur-tabs-component: "button", data-ur-tab-id: %contentid)
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
            insert('div') {
                insert('span', data-ur-tabs-component: 'button', data-ur-tab-id: 'pdpReviewsTab') {
                    insert('span', 'Customer Reviews')
                    insert("i", class: "fa fa-plus-circle")
                    insert("i", class: "fa fa-minus-circle")
                } 
                move('//div[@id="pdpReviewsTab"]', '.', 'bottom')
                $('./div[@id="pdpReviewsTab"]') {
                    attributes(data-ur-tabs-component: 'content', data-ur-tab-id: 'pdpReviewsTab')
                    remove('@class')
                    remove('@style')
                    remove('.//div[contains(@class, "BVDIHeader")]')
                }
            }
        }
    }

    $('.//div[@id="pdpMain"]') {
        $('.//img') {
            perf.optimize_image() {
                perf.quality(40)
            }
        }
    }

    $('//script[contains(text(), "getRRDisplayCode")]') {
        text() {
            replace('isMobileDevice ? "mobile" : ""', 'isMobileDevice ? "" : ""')
        }
        move_to('/html/body')
    }

    $('.//script[contains(text(), "app.ProductCache = ")]') {
        inner() {
            replace(/\?sw=450/, '?sw=320')
            replace(/http:\/\/demandware\.edgesuite\.net\//i, "http://opt.moovweb.net/img?linkEncoded=0&quality=40&img=http://demandware.edgesuite.net/")
        }
    }
}
