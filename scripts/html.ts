# HTML Transformations go here

$("/html") {
  rewrite_links()
  absolutize_srcs()



  add_assets()

  $("./head") {
    insert("script", type: "text/javascript", src: asset("javascript/application.js"))
  }

  @import sections/header.ts
  @import sections/footer.ts

  @import mappings.ts

  @import modules/remove-responsive.ts
}

