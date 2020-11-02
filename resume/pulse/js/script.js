$(document).ready(function () {
   $(".carousel__inner").slick({
      speed: 1200,
      // // adaptiveHeight: true,
      prevArrow: '<butt on type="button" class="slick-prev"><img src="img/icons/arroow_left.png"></butt>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow_right.png"></button>',
      responsive: [
         {
            breakpoint: 992,
            settings: {
               dots: false,
               arrows: false,
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
      // slidesToShow: 4,
      // slidesToScroll: 1,
      // responsive: [
      //    {
      //       breakpoint: 576,
      //       settings: {
      //          slidesToShow: 1,
      //          slidesToScroll: 1,
      //          infinite: true,
      //          dots: false,
      //          arrows: false,
      //       },
      //    },

      //    {
      //       breakpoint: 600,
      //       settings: {
      //          slidesToShow: 2,
      //          slidesToScroll: 2,
      //       },
      //    },
      //    {
      //       breakpoint: 480,
      //       settings: {
      //          slidesToShow: 1,
      //          slidesToScroll: 1,
      //       },
      //    },
      // ],
   });

   $("ul.catalog__tabs").on("click", "li:not(catalog__tab_active)", function () {
      $(this).addClass("catalog__tab_active").siblings().removeClass("catalog__tab_active").closest("div.container").find("div.catalog__content").removeClass("catalog__content_active").eq($(this).index()).addClass("catalog__content_active");
   });
   // $(".catalog-item__link").each(function (i) {
   //    $(this).on("click", function (e) {
   //       e.preventDefault();
   //       $(".catalog-item__content").eq(i).toggleClass("catalog-item__content_active");
   //       $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
   //    });
   // });
   // $(".catalog-item__back").each(function (i) {
   //    $(this).on("click", function (e) {
   //       e.preventDefault();
   //       $(".catalog-item__content").eq(i).toggleClass("catalog-item__content_active");
   //       $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
   //    });
   // });

   function toggleSlide(item) {
      $(item).each(function (i) {
         $(this).on("click", function (e) {
            e.preventDefault();
            $(".catalog-item__content").eq(i).toggleClass("catalog-item__content_active");
            $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
         });
      });
   }

   toggleSlide(".catalog-item__link");
   toggleSlide(".catalog-item__back");

   // Modal

   $("[data-modal=consultation]").on("click", function () {
      $(".ovarlay, #consultation").fadeIn("slow");
   });

   $(".modal__clouse").on("click", function () {
      $(".ovarlay, #consultation, #thanks #order").fadeOut("slow");
   });

   $(".button_mini").each(function (i) {
      $(this).on("click", function () {
         $("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
         $(".ovarlay, #order").fadeIn("slow");
      });
   });

   function validateForms(form) {
      $(form).validate({
         rules: {
            name: {
               required: true,
               minlength: 5,
            },
            phone: "required",
            email: {
               required: true,
               email: true,
            },
         },
         messages: {
            name: {
               required: "Пожайлуста введите свое имя",
               minlength: jQuery.validator.format("Введите  {0} символов!"),
            },
            phone: "Пожайлуста введите свой номер телефона",
            email: {
               required: "Пожайлуста введите свою почту",
               email: "Не правильно введен почтовый аддресс почты, он должен быть в формате: name@domain.com",
            },
         },
      });
   }
   validateForms("#consultation-form");
   validateForms("#consultation form");
   validateForms("#order form");

   // input mask

   $("input[name=phone]").mask("+7 (999) 999-99-99");

   // PHP Mailer

   $("form").submit(function (e) {
      e.preventDefault();
      $.ajax({
         type: "POST",
         url: "mailer/smart.php",
         data: $(this).serialize(),
      }).done(function () {
         $(this).find("input").val("");
         $("#consultation, #order").fadeOut();
         $(".ovarlay, #thanks").fadeIn("slow");
         return false;
      });
   });
   // Smooth scroll and page up

   $(window).scroll(function () {
      if ($(this).scrollTop() > 650) {
         $(".pageup").fadeIn();
      } else {
         $(".pageup").fadeOut();
      }
   });
   $("a[href^='#up']").click(function () {
      const _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
      return false;
   });
   new WOW().init();
});

// var name = "ivan";

// let number = 7;
// const pi = 3.14;

// number = 4;

// let leftBorderWidth = 200;

//number
//string = "", ``, ''
// true / false
// null не существует
// undefined  существует но без значения
// обект
// let obj = {
//    name: "apple",
//    color: "green",
//    width: 200,
// };
// Symbol

// alert(1234);
// console.log(123456);
// console.log(number);
// let answer = confirm("Вам есть 18?");
// console.log(answer);
// let answer = prompt("Вам есть 18?", "");
// console.log(answer);

// console.log(4 + 4);
// console.log(4 + "Hello");

// let isCheced = false,
//    isClose = false;
// console.log(isCheced && isClose);
// console.log(isCheced || isClose);

// && если с дух сторон true то выдаст true, но если хоть одна сторона false, то выдаст false
// || если хоть одна сторона true, то выдаст true, но если обе стороны false то только в таком случае  false

// if (2 * 2 == 8 * 1) {
//    console.log("Верно");
// } else {
//    console.log("Ошыбка");
// }

// let answer = confirm("Вам есть 18");
// if (answer) {
//    console.log("Проходите");
// } else {
//    console.log("Уходи");
// }

// const num = 101;

// if (num < 49) {
//    console.log("Неправильно");
// } else if (num > 100) {
//    console.log("Много");
// } else {
//    console.log("Верно");
// }

// for (let i = 1; i < 8; i++) {
//    console.log(i);
// }

// function logging(a, b) {
//    console.log(a + b);
// }
// logging(3, 5);
// logging(5, 10);
