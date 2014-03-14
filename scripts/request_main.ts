# log('request_main: ' + $path)

# parse_headers() {  # iterate over all the incoming/outgoing headers
#     log(name())      # log the name of the current cookie in the iteration
#     log(value())     # log the value of the current cookie in the iteration
# }

match($path) {
    with(/\/home_blocks\/hp-blocks(_.*)?\.html/i) {
        set_upstream_host('www.burkesdesign.com')
    }
    with(/\/reviews.djs/i) {
        set_upstream_host('www.perryellis.com')
    }
}
