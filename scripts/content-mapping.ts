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
match($("//div[@class='accountlogin']")) {
    not('0') {
        @import pages/account_login.ts
    }
}
match($("//div[@class='checkoutshipping']")) {
    not('0') {
        @import pages/checkout_shipping.ts
    }
}
match($("//div[@class='checkoutbilling']")) {
    not('0') {
        @import pages/checkout_billing.ts
    }
}
match($("//div[@class='checkoutplaceorder']")) {
    not('0') {
        @import pages/checkout_review.ts
    }
}
match($('//div[@class="orderconfirmation"]')) {
    not('0') {
        @import pages/checkout_confirmation.ts
    }
}
match($("//div[@class='accountoverview']")) {
    not('0') {
        @import pages/account_overview.ts
    }
}
match($("//div[@class='accounteditaddress']")) {
    not('0') {
        @import pages/account_addresses.ts
    }
}
match($("//div[@class='giftcertpurchase']")) {
    not('0') {
        @import pages/gc_purchase.ts
    }
}
match($("//div[@class='registrationform']")) {
    not('0') {
        @import pages/account-information.ts
    }
}
match($("//div[@class='accountpaymentinstruments']")) {
    not('0') {
        @import pages/account-payment-methods.ts
    }
}
match($("//form[contains(@action,'CustomerService-ContactUs')]")) {
    not('0') {
        @import pages/customer-service.ts
    }
}
