# The main file executed by Tritium. The start of all other files.
match($path) {
    with(/\FiftyOne-ShowContextChooser/i) {
        html_fragment() {
            @import pages/fifty-one.ts
        }
    }
    with(/\/on\/demandware\.store\/Sites-perryellis-Site\/default\/COShipping-UpdateShippingMethodList/i) {
        html_fragment() {
            @import pages/shipping-methods.ts
        }
    }
    with(/\/home_blocks\/hp-blocks(_.*)?\.html/i) {
        # Do nothing
    }
    else() {
        match(inferred_content_type()) {
            with(/html/) {
                replace(/fb:/, "fbn_") # Rewrite the xmlns facebook nodes before the html parser clobbers them

                # Force UTF-8 encoding. If you'd like to auto-detect the encoding,
                # simply remove the "UTF-8" argument.  e.g. html(){ ... }
                replace("</ismodule>", "")

                html("UTF-8") {
                    @import html.ts
                }

                replace(/fbn_/, "fb:") # Rewrite the xmlns facebook nodes to restore them
            }

            # with(/javascript/) {
            #     @import ajax.ts
            # }

            else() {
                log("Passing through " + $content_type + " unmodified.")
            }
        }
    }
}