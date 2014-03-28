# Place holder/example file

$("body") {
    add_class("_home")

    insert_top("link", type: "text/css", rel:'stylesheet', href:asset('stylesheets/flexslider.css'))
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
    $("//a[contains(@href, 'best-sellers')][contains(@style, 'url(')]") {
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
        attributes(class: 'flexslider')
        insert('ul', class: 'slides') {
            move('../div', '.') 
            $('./div') {
                name('li')
            }
        }
        insert_after('div', id: '_home-buttons') {
            insert('div', class: 'menu-button', id: '_home-show-categories-btn') {
                insert('span','All Categories')
            }
            insert('div', id: '_home-store-locator-btn') {
                insert('a', href: '/storelocator/') {
                    insert('span','Find A Store')
                }
            }
        }
        insert_after('div', id: 'category-grid') {
            move_here('//div[@id="homepage-blocks"]')
            match($host) {
                with(/es-us/) {
                    remove('.//span[@class="lang-en"]')
                }
                else() {
                    remove('.//span[@class="lang-es"]')
                }
            }
        }
        insert_after('div', class: 'clear')
        insert_after('div', id: '_home-search') {
            copy_here('//div[@class="headersearchwrapper"]')
            $('.//fieldset') {
                remove('.//label')
                $('./*') {
                    wrap('div')
                }
                $('./div[2]') {
                    attributes(class: 'home-search-button')
                }
            }
        }
        insert('div', class: 'clear')

        $('.//img') {
            perf.optimize_image() {
                perf.quality(60)
            }
        }
    }

    remove('.//div[@class="mobile-home-bottom-content-slot"]')
    remove('.//div[@class="homepage"]')
    remove('.//div[@class="clear"]')
    remove('.//div[@class="extended-text"]')
}