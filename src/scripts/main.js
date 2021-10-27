
const activeClass = "active";

// Переключение табов
// demo
// button(data-tab-id="tabId1", data-tab-control="tab1") 1
// button(data-tab-id="tabId1", data-tab-control="tab2") 2
// .tab-block(data-tab-id="tabId1", data-tab-block="tab1") 1
// .tab-block(data-tab-id="tabId1", data-tab-block="tab2") 2
const tabIdList = document.querySelectorAll("[data-tab-id]");
if (tabIdList) {
	let tabGroupList = new Set();
	for (const tabId of tabIdList) {
		tabGroupList.add(tabId.dataset.tabId);
	}
	for (const tabGroup of tabGroupList) {
		const tab = {
			controlList: document.querySelectorAll(`[data-tab-id="${tabGroup}"][data-tab-control]`),
			blockList: document.querySelectorAll(`[data-tab-id="${tabGroup}"][data-tab-block]`),
		};

		function tabSwith(name) {
			for (const control of tab.controlList) control.classList.remove(activeClass);
			for (const block of tab.blockList) block.style.display = "none";
			document.querySelector(`[data-tab-id="${tabGroup}"][data-tab-control="${name}"]`).classList.add(activeClass);
			document.querySelector(`[data-tab-id="${tabGroup}"][data-tab-block="${name}"]`).style.display = "";
		}
		tabSwith(tab.controlList[0].dataset.tabControl);

		for (const control of tab.controlList) {
			control.addEventListener("click", () => {
				tabSwith(control.dataset.tabControl);
			});
		}
	}
}

// Burger menu Start

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	const menuBody = document.querySelector('.menu__body');
	iconMenu.addEventListener('click', () => {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}

// Burger menu End


// Mask for subscribe Start

// const emailMask = IMask(
// 	document.querySelector('.subscribe__input'),
// 	{
// 		mask: [
// 			{
// 				mask: /^\S*@?\S*$/
// 			}
// 		]
// 	});

// Mask for subscribe End


// slider1 Start

const swiper = new Swiper('.slider1', {
	// Optional parameters
	direction: 'horizontal',
	loop: false,
	slidesPerView: 1,
	slidesPerGroup: 1,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction'
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		// when window width is >= 1024px
		768: {
			slidesPerView: 2,
			spaceBetween: 10
		}
	}

});


// slider1 End

// slider2 Start

const swiper2 = new Swiper('.slider2', {
	// Optional parameters
	direction: 'horizontal',
	loop: false,
	slidesPerView: 1,
	slidesPerGroup: 1,
	autoplay: true,
	initialSlide: 1,
	spaceBetween: 10,
	breakpoints: {
		641: {
			slidesPerView: 3,
			
		},
		1024: {
			slidesPerView: 3,

		},
		1280: {
			slidesPerView: 4,
		},
	}

});


// slider2 End
