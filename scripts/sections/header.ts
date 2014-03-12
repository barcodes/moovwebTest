$("//div[@id='header']") {
    name("header")
    add_class("_header")

    remove('./div[@class="headerbanner"]')

    $("//li[contains(@class, 'topLevelMenu')]") {
        attributes(data-ur-set:'toggler')

        $("a") {
            attributes(data-ur-toggler-component: 'button', href: 'javascript:void(0);')
            $(". | ../div//a") {
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

        $('.//a[1]/span') {
            text() {
                replace('-','')
            }
        }
    }

    $("//div[@class='headerleft']") {
        insert_top("a", class: "_header-button") {
            insert("div") {
                insert_top("i", class: "fa fa-bars")
            }
        }
        insert_bottom("a", id:"_bag-button", class: "_header-button", href: fetch("//a[@class='linkminicart']/@href")) {
            insert("div") {
                attribute('class', 'mini_cart')
                insert("span") {
                    #insert_top("i", class: "fa fa-shopping-cart")
                    insert_top('img', src: asset('images/bag.png'))
                }
            }
        }
        $('*') {
            wrap('div')
        }
        $('./div[3]') {
            attributes(onclick: 'javascript:location.href="'+fetch("//a[@class='linkminicart']/@href")+'"')
        }
        $('./div[1]') {
            attributes(id: "_menu-button", data-ur-toggler-component: "button")
        }

    }

    $("//div[@class='categorywrapper']") {

        $(".//li[@class='test']/a[@class='hasThirdLevelMobile']/..") {
            attributes(data-ur-set: "toggler")

            $("a[@class='hasThirdLevelMobile']") {
                attributes(data-ur-toggler-component: "button", href: "javascript:void(0)")
            }

            insert("div", data-ur-toggler-component: "content") {
                move_here("../div[@class='subcategories']")
            }
        }

        insert_top('div', 'SHOP', class: 'categorywrapper-section-header')

        move('//div[@class="headersearchwrapper"]', '.', 'top') 
        $('.//div[@class="headersearchwrapper"]') {
            $('.//button[@name="simplesearch"]') {
                insert('i', class:'fa fa-search')
            }
            $('.//input[@id="searchinput"]') {
                %placeholder = fetch('@value')
                attributes(placeholder: %placeholder)
                remove('@class')
                remove('@value')
            }
        }

        insert_bottom('div', 'ACCOUNT', class: 'categorywrapper-section-header')

        move('//div[@class="headercustomerinfo"]','.', 'bottom')

        $('div[@class="headercustomerinfo"]') {
            $('a') {
                insert_bottom('i', class: 'fa fa-chevron-right')
            }
        }

        remove('.//li[@id="pepress"]')
        remove('.//li[@id="peblog"]')
        remove('//div[@class="headersearchwrapper"]/@style')

    }

    $(".//script[contains(text(), 'width:\"580px\"')]") {
        text() {
            replace("width:\"580px\"", "width:\"98%\", height:\"100%\"")
        }
    }

    $('//h1[@class="logo"]/a/span') {
        name('img')
        attribute('alt', text())
        text('')
        attribute('src', asset('images/new-pe-logo.png'))
    }

    move('//div[@class="headerslot"]','//div[@id="content"]', 'top')

}
