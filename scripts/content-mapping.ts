match($("//div[@class='productlisting']")) {
    not("0") {
        @import pages/product-list.ts
    }
}
match($("//div[@id='pdpMain']")) {
    not("0") {
        @import pages/product.ts
    }
}
match($("//div[@class='contentassetpage']")) {
    not('0') {
        @import pages/generic_content.ts
    }
}