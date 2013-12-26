# $('./body') {
#   insert_top("header", class: "_header") {
#     Move stuff here
#   }
# }
$("//div[@id='header']") {
    name("header")
    add_class("_header")
    $("//li[contains(@class, 'topLevelMenu')]") {
        attributes(data-ur-set:'toggler')
        $("a") {
            attributes(data-ur-toggler-component: 'button', href: 'javascript:void(0);')
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
}
