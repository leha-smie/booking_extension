
const obj = {
	clicks: {
		n1: '#frm > div.xp__fieldset.js--sb-fieldset.accommodation > div.xp__input-group.xp__search > div:nth-child(11) > div.c-autocomplete.sb-destination.-with-clear.region_second_line > button',
		n2: '#ss',
		n3: '#frm > div.xp__fieldset.js--sb-fieldset.accommodation > div.xp__input-group.xp__search > div:nth-child(11) > div.c-autocomplete.sb-destination.-with-clear.region_second_line > ul.c-autocomplete__list.sb-autocomplete__list.sb-autocomplete__list-with_photos > li:nth-child(3)',
		n4: '#frm > div.xp__fieldset.js--sb-fieldset.accommodation > div.xp__dates.xp__group > div.xp-calendar > div > div > div.bui-calendar__content > div:nth-child(1) > table > tbody > tr:nth-child(5) > td:nth-child(2)',
		n5: '#frm > div.xp__fieldset.js--sb-fieldset.accommodation > div.xp__dates.xp__group > div.xp-calendar > div > div > div.bui-calendar__content > div:nth-child(2) > table > tbody > tr:nth-child(5) > td:nth-child(6)',
		n6: '#frm > div.xp__fieldset.js--sb-fieldset.accommodation > div.xp__button > div.sb-searchbox-submit-col.-submit-button > button',
	},
	start() {
		for (step in this.clicks) {
			this.click(this.clicks[step], step);
		}
	},
	click(selector, step) {
		try {
			if (step === "n1" || step === "n2" || step === "n3") {
				document.querySelector(`${selector}`).click();
			} else if (step) {
				setTimeout((() => {
					try {
						document.querySelector(`${selector}`).click();
					}
					catch (err) {
					}
				}), 0);
			}
		}
		catch (err) {
			return
		}
	}
}

obj.start();
function getPrices() {
	const prices = document.querySelectorAll('._e885fdc12');
	let filtredPrices = '';
	for (let i = 0; i < 5; i++) {
		try {
			filtredPrices += `<p>${prices[i].innerText}</p>`;
		}
		catch (err) {
			return
		}
	}
	const windowBooking = document.createElement('div');
	windowBooking.classList.add('booking');
	console.log(windowBooking);
	document.body.append(windowBooking);
	console.log(filtredPrices);
	windowBooking.innerHTML = `<h1>Booking Price</h1> ${filtredPrices}`;
}
getPrices();