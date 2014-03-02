# HTML Transformations go here

$("/html") {
    #fix nasty markup
    @import modules/fix-broken-markup.ts

    rewrite_links()
    absolutize_srcs()
    absolutize('.//link', 'href')

    clean_mobile_meta_tags()
    remove_html_comments()

    add_assets()

    $("./head") {
        insert('link', href:'//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css', rel:'stylesheet', type:'text/css')
        insert("script", type: "text/javascript", src: asset("javascript/application.js"))
        insert("script", src:"http://jpanelmenu.com/jquery.jpanelmenu.js")
    }

    @import sections/header.ts
    @import mappings.ts
    @import sections/footer.ts

    @import modules/remove-responsive.ts
}
