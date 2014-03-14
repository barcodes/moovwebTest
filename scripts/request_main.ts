match($path) {
    with(/\/home_blocks\/hp-blocks.html/i) {
        set_upstream_host('www.burkesdesign.com')
    }
}
