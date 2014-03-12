# Place holder/example file

$("body") {
    add_class("_home")

    insert_top("style", type: "text/css") {
        inject(read("../../assets/stylesheets/flexslider.css"))
        text() {
            replace("/assets/fonts", concat($asset_host, "fonts"))
            replace("/assets/images", concat($asset_host, "images"))
        }
    }
    insert_top("script", type: "text/javascript", src: asset("javascript/jquery.flexslider-min.js"))

    //when there is a main-banner or large-hp-banner
    $("//div[@id='main-banner']/.. | //div[@id='large-hp-banner']/..") {
        %divs = $("div") {
            remove("@style")
        }
        remove("@style")
        match(%divs) {
            not("1") {
                remove("div[@id='main-banner'] | div[@id='large-hp-banner']")
                attributes(id:"_flexslider", class: "flexslider")
                insert("ul", class: "slides") {
                    move_here("../div") {
                        name("li")
                        remove("@style")
                    }
                }
                copy_here("//div[@class='categorywrapper']", "after") {
                    remove("@data-ur-toggler-component")
                }
            }
        }
    }
    //when there is a slider
    $("//a[contains(@href, 'best-sellers')][contains(@style, 'url(')]")
    {
        create_image_from_bg()
        add_class("_best-seller-link")

        insert_after("div", id:"_flexslider", class: "flexslider") {
            %slider = this()
            $("//ul[@id='slider']") {
                attributes(id: "_slider", class: "slides")
                remove("@style")
                $("li") {
                    inner("")
                    create_image_from_bg()
                }
                move(this(), %slider, position("bottom"))
            }
            remove("following-sibling::div")
        }

    }

    $('//div[@class="home-slot-top"]') {
        $('//div') {
            remove('@style')
        }
    }

    $('//div[@id="banners-container"]') {
        insert('div', id: 'category-grid')
    }

    remove("//div[@class='home-slot-bottom']")
    remove("//div[@class='extended-text']")
}