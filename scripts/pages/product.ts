$("body") {
    add_class("_product")
    remove("//div[contains(@class, 'contentslot')]")
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
            insert_after("div", id:"_flexslider", class: "flexslider") {
                %slider = this()
                insert("ul", id: "_slider", class: "slides") {
                    %slides = this()
                    $("//div[@class='productthumbnails']/img") {
                        attr("src") {
                            value() {
                                replace(/sw\=([0-9].*)/, "sw=320")
                            }
                        }
                        wrap("li") {
                            move(this(), %slides, position("bottom"))
                        }
                    }
                }
            }
        }
    }
}