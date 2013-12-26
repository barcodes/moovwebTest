# $("./body") {
#   insert_bottom("footer", class: "_footer") {
#     Move stuff here
#   }
# }

$("//div[@id='footer']") {
    name("footer")
    $(".//div[@id='ftwrapper']") {
        remove(".//@style")
    }
    $(".//div[@class='ftgroup']") {
        attributes(data-ur-set: "toggler")
        $("div[1]") {
            attributes(data-ur-toggler-component: "button")
        }
        insert("div", class:"toggler-content", data-ur-toggler-component: "content")
        {

        }
    }
}
