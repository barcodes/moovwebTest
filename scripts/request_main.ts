# log('request_main: ' + $path)

# parse_headers() {  # iterate over all the incoming/outgoing headers
#     log(name())      # log the name of the current cookie in the iteration
#     log(value())     # log the value of the current cookie in the iteration
# }

match($path) {
    with(/\/home_blocks\/hp-blocks\.html/i) {
        set_upstream_host('www.burkesdesign.com')
    }
}
