$('body') {
	add_class('_cart')

	insert_top("style", type: "text/css") {
        inject(read("../../assets/stylesheets/flexslider.css"))
        text() {
            replace("/assets/fonts", concat($asset_host, "fonts"))
            replace("/assets/images", concat($asset_host, "images"))
        }
    }
	insert_top("script", type: "text/javascript", src: asset("javascript/jquery.flexslider-min.js"))

	$$('.cart') {
		%cart = this()
		$('//div[@class="breadcrumb"]/a') {
			remove_attributes()
			name('h2')
			move(this(), %cart, position('top'))
		}
		$('//table[@class="carttable"]') {
			name('div')
			remove('./thead')
			remove('./tfoot')
			$('./tbody/tr') {
				name('div')
				attribute('class', 'productrow')
				$('./td') {
					name('div')
					remove('.//div[@class="clear"]')
				}
				remove('.//div[@class="editdetails"]')
				$('./div[@class="quantitycolumn"]') {
					wrap('div', id: 'quantityDIV')
					%qtyDIV = this()
					insert_top('a', class:'_row-qty-minus') {
						insert('i', class:'fa fa-minus')
					}
					$('../../div[@class="quantitycolumndetails"]') {
						$('./button[@class="removetextbutton"]') {
							$('./span') {
								name('i')
								attribute('class', 'fa fa-times-circle')
								text('')
							}
							move(this(), %qtyDIV, position('before'))
						}
					}
					insert('a', class:'_row-qty-plus') {
						insert('i', class:'fa fa-plus')
					}
				}
				$('.//div[@id="quantityDIV"]') {
					%qtyDIV = this()
					$('../div[@class="quantitycolumndetails"]/div[@class="stockstate"]') {
						move(this(), %qtyDIV, position('before'))
					}
					$('../div[@class="unitpricecolumn"]') {
						move(this(), %qtyDIV, position('before'))
					}
					move_here('..//button[contains(@class, "addtowishlist")]')
				}
				insert('div', style:"clear:both")
			}
		}
		$('//table[@class="cartfooter"]') {
			remove('//select[@id="shippingMethodID"]/option')
			copy_here('//select[@id="shippingMethodID"]/option') {
				name('input')
				attributes(type:'radio')
			}
		}
	}

	remove('//div[@class="actions"][1]')
	$('//div[@class="actions"]') {
		remove('span[@name="dwfrm_cart_continueShopping"]')
	}

	$('//div[contains(@class, "logincreate")]') {
		attributes(class: 'loginbox')
	}

	$$('.productrelateditems') {
		#remove()
		$('./div[@id="cart_rr"]') {
			attributes(class: 'flexslider')

			$('./ul') {
				attributes(class: 'slides')
			}
		}
	}
}