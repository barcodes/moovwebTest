# $('./body') {
#   insert_top("header", class: "_header") {
#     Move stuff here
#   }
# }
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


$("//div[@id='copytxt']") {
    move_to("//div[@id='header']", position("after"))
}


$("//div[@id='footer']") {
    move_to("//div[@id='header']", position("after"))
}


$("//div[@id='cartmsg']") {
    move_to("//div[@id='header']", position("after"))
}

$("//div[@id='main']") {
    move_to("//div[@id='header']", position("after"))
}

$("//div[@id='divFiftyOneWelcomeMatParams']") {
    move_to("//div[@id='header']", position("after"))
}

$("//div[@id='dialog']") {
    move_to("//div[@id='header']", position("after"))
}

$("//div[@class='headerbar2']") {
    move_to("//div[@id='header']", position("after"))
}
