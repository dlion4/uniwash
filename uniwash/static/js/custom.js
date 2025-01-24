/*--------------------- Copyright (c) 2021 -----------------------
[Master Javascript]
-------------------------------------------------------------------*/
(function ($) {
  "use strict";
  var photographer = {
    initialised: false,
    version: 1.0,
    mobile: false,
    init: function () {
      if (!this.initialised) {
        this.initialised = true;
      } else {
        return;
      }
      /*-------------- Design Functions Calling ---------------------------------------------------
      ------------------------------------------------------------------------------------------------*/
      this.loader();
      this.toggle();
      this.ldStickyHeader();
      this.bottom_top();
      this.testimonialSlider();
      this.MailFunction();
    },

    /*-------------- Design Functions Calling ---------------------------------------------------
    --------------------------------------------------------------------------------------------------*/
    testimonialSlider: function () {
      if ($('.sr-testimonials-wrapper .swiper-container').length > 0) {
        var galleryThumbs = new Swiper('.sr-testimonials-wrapper .gallery-thumbs', {
          autoHeight: false,
          loop: true,
          spaceBetween: 0,
          centeredSlides: true,
          speed: 1000,
          allowTouchMove: false,
          slidesPerView: 3,
          spaceBetween: 0,
          effect: 'coverflow',
          coverflowEffect: {
            rotate: 0,
            depth: 0,
            modifier: 1,
            slideShadows: false
          },
        });
        var galleryTop = new Swiper('.sr-testimonials-wrapper .gallery-top', {
          spaceBetween: 0,
          slidesPerView: 1,
          loop: true,
          allowTouchMove: false,
          speed: 1000,
          slidesPerView: 1,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          thumbs: {
            swiper: galleryThumbs,
          },
          pagination: {
            el: '.sr-testimonial-container .pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.sr-testimonial-container .next-slide',
            prevEl: '.sr-testimonial-container .prev-slide',
          },
        });
      }
      /* Testimonial Style Two */
      if ($('.testimonials-slider').length > 0) {
        var swiper = new Swiper('.testimonials-slider', {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          autoplay: false,
          speed: 1000,
          pagination: {
            el: '.sr-testimonial2-container .pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.sr-testimonial2-container .next-slide',
            prevEl: '.sr-testimonial2-container .prev-slide',
          },
        });
      }

    },
    // loader           
    loader: function () {
      jQuery(window).on('load', function () {
        $(".ld-loader").fadeOut();
        $(".ld-spinner").delay(500).fadeOut("slow");
      });
    },
    // loader

    //Toggle
    toggle: function () {
      // $(".ld-toggle-btn").on('click', function (e) {
      //   e.stopPropagation();
      //   $("body").toggleClass("menu-open");
      // });
      $(document).ready(function () {
        $(document).on("click", function (event) {
          var $trigger = $(".ld-toggle-btn");
          if ($trigger !== event.target && !$trigger.has(event.target).length) {
            $("body").removeClass("open-toggle");
          }
        });
        $(".ld-toggle-btn").click(function () {
          $("body").toggleClass("open-toggle");
        });
      });
    },
    // sticky header
    //Toggle
    ldStickyHeader: function () {
      $(window).scroll(function () {
        var wh = window.innerWidth;
        if (wh > 767) {
          var h = window.innerHeight;
          var window_top = $(window).scrollTop() + 1;
          if (window_top > 100) {
            $('.ld-header-wrapper').addClass('ld-header-fixed');
          } else {
            $('.ld-header-wrapper').removeClass('ld-header-fixed');
          }
        }
      });
    },

    // Bottom To Top
    bottom_top: function () {
      if ($('#button').length > 0) {

        var btn = $('#button');

        $(window).scroll(function () {
          if ($(window).scrollTop() > 300) {
            btn.addClass('show');
          } else {
            btn.removeClass('show');
          }
        });

        btn.on('click', function (e) {
          e.preventDefault();
          $('html, body').animate({
            scrollTop: 0
          }, '300');
        });


      }
    },
    // Bottom To Top

    // magenific popup 

    // -------  contact form----------
    MailFunction: function () {
      $("#contactForm").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
          // handle the invalid form...
          formError();
          submitMSG(false, "Did you fill in the form properly?");
        } else {
          // everything looks good!
          event.preventDefault();
          submitForm();
        }
      });
      function submitForm() {
        // Initiate Variables With Form Content
        var name = $("#name").val();
        var email = $("#email").val();
        var number = $("#number").val();
        var subject = $("#subject").val();
        var message = $("#message").val();

        $.ajax({
          type: "POST",
          url: "contactmail.php",
          data: "name=" + name + "&email=" + email + "&number=" + number + "&subject=" + subject + "&message=" + message,
          success: function (text) {
            if (text == "success") {
              formSuccess();
            } else {
              formError();
              submitMSG(false, text);
            }
          }
        });
      }

      function formSuccess() {
        $("#contactForm")[0].reset();
        submitMSG(true, "Message Submitted!")
      }

      function formSuccess() {
        $("#contactForm")[0].reset();
        submitMSG(true, "Message Submitted!")
      }

      function formError() {
        $("#contactForm").removeClass().addClass('animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
          $(this).removeClass();
        });
      }

      function submitMSG(valid, msg) {
        if (valid) {
          var msgClasses = "h3 text-center tada animated text-success";
        } else {
          var msgClasses = "h3 text-center text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
      }
    },
















  };
  photographer.init();

}(jQuery));
var swiper = new Swiper(".ld-client-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});


// Get the current year
const currentYear = new Date().getFullYear();
// Display the current year in the span with the ID 'current-year'
document.getElementById("current-year").textContent = currentYear;






