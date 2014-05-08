# # Place holder/example file

$("body") {
    add_class("_home")

    insert_top("link", type: "text/css", rel:'stylesheet', href:asset('stylesheets/flexslider.css'))
    insert_top("script", type: "text/javascript", src: asset("javascript/jquery.flexslider-min.js"))

    log("Logging upstream: "+ $source_host)


    $('//div[@class="home-slot-top"]') {
        $('//div') {
            remove('@style')
        }
    }

    $('//div[@id="banners-container"]') {

        # Coding Challenge #1
        # Transform the banners-container to be a flex slider
        
        # insert Tritium here...
		
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