$(document).ready(function () {
	$(".slick-slider").slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: "linear",
		prevArrow: '<button class="slick-btn slick-prev"><img src="img/arrow_left.png" alt="" /></button>',
		nextArrow: '<button class="slick-btn slick-next"><img src="img/arrow_right.png" alt="" /></button>',
	});
	$(".zoom-gallery").magnificPopup({
		delegate: "a",
		type: "image",
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: "mfp-with-zoom mfp-img-mobile",
		image: {
			verticalFit: true,
			titleSrc: function (item) {
				return item.el.attr("title") + ' &middot; <a class="image-source-link" href="' + item.el.attr("data-source") + '" target="_blank">image source</a>';
			},
		},
		gallery: {
			enabled: true,
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function (element) {
				return element.find("img");
			},
		},
	});
});
