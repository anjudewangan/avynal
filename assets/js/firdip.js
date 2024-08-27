(function ($) {
  "use strict";

  // Header
  document.getElementById(
    "header"
).innerHTML = ` <header class="main-header sticky-header sticky-header--normal"> <div class="container-fluid"> <div class="main-header__inner"> <div class="main-header__logo logo-firdip"> <a href="index.html"> <img src="./assets/images/logo/logo.png" alt="Avynal Logo" width="160"> </a> </div> <nav class="main-header__nav main-menu"> <ul class="main-menu__list"> <li> <a href="index.html">Home</a> </li> <li> <a href="./about.html">About</a> </li> <li class="dropdown" class="current"> <a href="./application.html">Applications</a> <ul class="sub-menu"> <li class="dropdown"><a href="./application.html#industrial-section">Industrial Applications</a> <ul class="sub-menu"> <li><a href="./application.html#industrial-section">Machinery spaces</a> </li> <li><a href="./application.html#industrial-section">Electrical switchgear</a></li> <li><a href="./application.html#industrial-section">Hazardous storage areas</a></li> <li><a href="./application.html#industrial-section">Scientific environments</a></li> <li><a href="./application.html#industrial-section">High-hazard ATEX areas</a></li> </ul> </li> <li class="dropdown"><a href="./application.html#commercial-section">Commercial Applications</a> <ul class="sub-menu"> <li><a href="./application.html#commercial-section">Server rooms and switch rooms</a></li> <li><a href="./application.html#commercial-section">Warehouses and storage facilities</a></li> <li><a href="./application.html#commercial-section">Vehicle compartments</a> </li> </ul> </li> <li class="dropdown"><a href="./application.html#bess-section">BESS </a> <ul class="sub-menu"> <li><a href="./application.html#other-section">Battery energy storage system</a></li> </ul> </li> <li class="dropdown"><a href="./application.html#other-section">Other Applications</a> <ul class="sub-menu"> <li><a href="./application.html#other-section">Storage of hazardous substances</a></li> <li><a href="./application.html#other-section">Storage rooms and goods lifts</a></li> <li><a href="./application.html#other-section">Clean rooms</a></li> <li><a href="./application.html#other-section">Data centers</a></li> <li><a href="./application.html#other-section">Offshore platforms</a></li> <li><a href="./application.html#other-section">Aviation</a></li> </ul> </li> </ul> </li> <li class="dropdown"> <a href="#">Products</a> <ul class="sub-menu"> <li><a href="./project.html">Cylindrical Generators</a></li> <li><a href="./project-carousel.html">Box Type Generators</a></li> <li><a href="./project-details.html">HERO Generators</a></li> <li><a href="./project-details.html">ATEX Generators</a></li> <li><a href="./project-details.html">VELEX </a></li> </ul> </li> <li class="dropdown"> <a href="./why-choose-us.html">Why Choose Us</a> </li> <li class="dropdown"> <a href="./news-events.html">News & Events</a> </li> <li> <a href="./contact.html">Contact Us</a> </li> </ul> </nav> <div class="main-header__right"> <a href="#" class="search-toggler main-header__right__info__item"><i class="icon-search" aria-hidden="true"></i><span class="sr-only">Search</span></a> <a href="./login.html" class="main-header__right__info__item"><i class="fa-regular fa-circle-user"></i><span class="sr-only">Login</span></a> <a href="tel:+91-0771-4915561" class="main-header__right__call"> <div class="main-header__right__icon"> <i class="icon-call"></i> </div> <div class="main-header__right__content"> <div class="main-header__right__text">Emergency call</div> <div class="main-header__right__number">0771-4915561</div> </div> </a> <div class="mobile-nav__btn mobile-nav__toggler"> <span></span> <span></span> <span></span> </div> </div> </div> </div> </header>`;


// Footer
document.getElementById(
    "footer"
).innerHTML = ` <footer class="main-footer"> <div class="main-footer__bg" style="background-image: url(./assets/images/shapes/footer-bg.png);"></div> <div class="main-footer__top"> <div class="container"> <div class="main-footer__top__inner"> <div class="main-footer__top__left"> <a href="index.html" class="main-footer__top__logo logo-firdip"> <img src="./assets/images/logo/logo-white.png" width="180" alt="firdip image"> </a> </div> <div class="main-footer__top__right"> <div class="main-footer__top__social"> <a href="https://www.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin-in"></i><span class="sr-only">Linkedin</span></a> <a href="tel:+91-0771-4915561" target="_blank"><i class="icon-call"></i><span class="sr-only">Call</span></a> </div> </div> </div> </div> </div> <div class="main-footer__middle"> <div class="container"> <div class="row"> <div class="col-md-4 col-lg-4"> <div class="footer-widget footer-widget--contact"> <h2 class="footer-widget__title">Contact</h2> <ul class="list-unstyled footer-widget__contact"> <li class="footer-widget__contact__item"> <div class="footer-widget__contact__icon"> <i class="icon-telephone-call-1"></i> </div> <div class="footer-widget__contact__inner"> <a href="tel:+91-0771-4915561" class="footer-widget__contact__text">+91-0771-4915561</a> </div> </li> <li class="footer-widget__contact__item"> <div class="footer-widget__contact__icon"> <i class="icon-email-2"></i> </div> <div class="footer-widget__contact__inner"> <a href="mailto:info@avynal.com" class="footer-widget__contact__text">info@avynal.com</a> </div> </li> <li class="footer-widget__contact__item"> <div class="footer-widget__contact__icon"> <i class="icon-glove"></i> </div> <div class="footer-widget__contact__inner"> <a href="https://themeforest.net/user/bracket-web" class="footer-widget__contact__text" target="_blank">www.avynal.com</a> </div> </li> <li class="footer-widget__contact__item"> <div class="footer-widget__contact__icon"> <i class="icon-pin2"></i> </div> <div class="footer-widget__contact__inner"> <p class="footer-widget__contact__text">408, Wallfort Ozone, Fafadih Chowk, Bilaspur Road, Fafadih, Raipur, Chhattisgarh 492001</p> </div> </li> </ul> </div> </div> <div class="col-md-4 col-lg-4"> <div class="footer-widget footer-widget--link"> <h2 class="footer-widget__title">Quick Links</h2> <ul class="list-unstyled footer-widget__links"> <li class="footer-widget__links__item"><a href="./about.html">About</a></li> <li class="footer-widget__links__item"><a href="./application.html">Applications</a> </li> <li class="footer-widget__links__item"><a href="./project.html">Products</a></li> <li class="footer-widget__links__item"><a href="./why-choose-us.html">Why Choose Us</a> </li> <li class="footer-widget__links__item"><a href="./news-events.html">News & Events</a> </li> <li class="footer-widget__links__item"><a href="./contact.html">Contact Us</a></li> </ul> </div> </div> <div class="col-md-4 col-lg-4 d-flex"> <div class="footer-widget footer-widget--image"> <div class="footer-widget__image"> <a href="tel:+91-0771-4915561" class="footer-widget__image__item"> <img src="./assets/images/shapes/footer-hand.png" alt="firdip"> </a> </div> </div> </div> </div> </div> </div> <div class="main-footer__bottom"> <div class="container"> <div class="row"> <div class="col-md-4 col-lg-4"> <div class="main-footer__bottom__inner"> <p class="main-footer__copyright"> &copy; Copyright <span class="dynamic-year"></span> by <a href="https://www.patiodigital.com/" target="_blank">Patio Digital Pvt Ltd</a>. </p> </div> </div> <div class="col-md-8 col-lg-8"> <div class="row main-footer__bottom__inner"> <div class="col-md-4 main-footer__copyright"> <a href="./terms-use.html">Terms of Use</a> </div> <div class="col-md-4 main-footer__copyright"><a href="./privacy-policy.html">Privacy Policy</a> </div> <div class="col-md-4 main-footer__copyright"><a href="./site-map.html">Site Map</a> </div> </div> </div> </div> </div> </div> </footer>`;



  /*-- Checkout Accoradin --*/
  if ($(".checkout-page__payment__title").length) {
    $(".checkout-page__payment__item")
      .find(".checkout-page__payment__content")
      .hide();
    $(".checkout-page__payment__item--active")
      .find(".checkout-page__payment__content")
      .show();
    $(".checkout-page__payment__title").on("click", function (e) {
      e.preventDefault();
      $(this)
        .parents(".checkout-page__payment")
        .find(".checkout-page__payment__item")
        .removeClass("checkout-page__payment__item--active");
      $(this)
        .parents(".checkout-page__payment")
        .find(".checkout-page__payment__content")
        .slideUp();
      $(this).parent().addClass("checkout-page__payment__item--active");
      $(this).parent().find(".checkout-page__payment__content").slideDown();
    });
  }

  let dynamicyearElm = $(".dynamic-year");
  if (dynamicyearElm.length) {
    let currentYear = new Date().getFullYear();
    dynamicyearElm.html(currentYear);
  }

  // Date Picker
  if ($(".firdip-datepicker").length) {
    $(".firdip-datepicker").each(function () {
      $(this).datepicker();
    });
  }

  // Popular Causes Progress Bar
  if ($(".count-bar").length) {
    $(".count-bar").appear(
      function () {
        var el = $(this);
        var percent = el.data("percent");
        $(el).css("width", percent).addClass("counted");
      },
      {
        accY: -50
      }
    );
  }

  //Fact Counter + Text Count
  if ($(".count-box").length) {
    $(".count-box").appear(
      function () {
        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text()
          }).animate(
            {
              countNum: n
            },
            {
              duration: r,
              easing: "linear",
              step: function () {
                $t.find(".count-text").text(Math.floor(this.countNum));
              },
              complete: function () {
                $t.find(".count-text").text(this.countNum);
              }
            }
          );
        }
      },
      {
        accY: 0
      }
    );
  }

  // custom coursor
  if ($(".custom-cursor").length) {
    var cursor = document.querySelector(".custom-cursor__cursor");
    var cursorinner = document.querySelector(".custom-cursor__cursor-two");
    var a = document.querySelectorAll("a");

    document.addEventListener("mousemove", function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    });

    document.addEventListener("mousemove", function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursorinner.style.left = x + "px";
      cursorinner.style.top = y + "px";
    });

    document.addEventListener("mousedown", function () {
      cursor.classList.add("click");
      cursorinner.classList.add("custom-cursor__innerhover");
    });

    document.addEventListener("mouseup", function () {
      cursor.classList.remove("click");
      cursorinner.classList.remove("custom-cursor__innerhover");
    });

    a.forEach((item) => {
      item.addEventListener("mouseover", () => {
        cursor.classList.add("custom-cursor__hover");
      });
      item.addEventListener("mouseleave", () => {
        cursor.classList.remove("custom-cursor__hover");
      });
    });
  }

  if ($(".contact-form-validated").length) {
    $(".contact-form-validated").validate({
      // initialize the plugin
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true
        },
        subject: {
          required: true
        }
      },
      submitHandler: function (form) {
        // sending value with ajax request
        $.post(
          $(form).attr("action"),
          $(form).serialize(),
          function (response) {
            $(form).parent().find(".result").append(response);
            $(form).find('input[type="text"]').val("");
            $(form).find('input[type="email"]').val("");
            $(form).find("textarea").val("");
          }
        );
        return false;
      }
    });
  }

  // mailchimp form
  if ($(".mc-form").length) {
    $(".mc-form").each(function () {
      var Self = $(this);
      var mcURL = Self.data("url");
      var mcResp = Self.parent().find(".mc-form__response");

      Self.ajaxChimp({
        url: mcURL,
        callback: function (resp) {
          // appending response
          mcResp.append(function () {
            return '<p class="mc-message">' + resp.msg + "</p>";
          });
          // making things based on response
          if (resp.result === "success") {
            // Do stuff
            Self.removeClass("errored").addClass("successed");
            mcResp.removeClass("errored").addClass("successed");
            Self.find("input").val("");

            mcResp.find("p").fadeOut(10000);
          }
          if (resp.result === "error") {
            Self.removeClass("successed").addClass("errored");
            mcResp.removeClass("successed").addClass("errored");
            Self.find("input").val("");

            mcResp.find("p").fadeOut(10000);
          }
        }
      });
    });
  }

  if ($(".video-popup").length) {
    $(".video-popup").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: true,

      fixedContentPos: false
    });
  }

  if ($(".img-popup").length) {
    var groups = {};
    $(".img-popup").each(function () {
      var id = parseInt($(this).attr("data-group"), 10);

      if (!groups[id]) {
        groups[id] = [];
      }

      groups[id].push(this);
    });

    $.each(groups, function () {
      $(this).magnificPopup({
        type: "image",
        closeOnContentClick: true,
        closeBtnInside: false,
        gallery: {
          enabled: true
        }
      });
    });
  }

  function dynamicCurrentMenuClass(selector) {
    let FileName = window.location.href.split("/").reverse()[0];

    selector.find("li").each(function () {
      let anchor = $(this).find("a");
      if ($(anchor).attr("href") == FileName) {
        $(this).addClass("current");
      }
    });
    // if any li has .current elmnt add class
    selector.children("li").each(function () {
      if ($(this).find(".current").length) {
        $(this).addClass("current");
      }
    });
    // if no file name return
    if ("" == FileName) {
      selector.find("li").eq(0).addClass("current");
    }
  }

  if ($(".main-menu__list").length) {
    // dynamic current class
    let mainNavUL = $(".main-menu__list");
    dynamicCurrentMenuClass(mainNavUL);
  }

  if ($(".service-sidebar__nav").length) {
    // dynamic current class
    let mainNavUL = $(".service-sidebar__nav");
    dynamicCurrentMenuClass(mainNavUL);
  }

  if ($(".main-menu").length && $(".mobile-nav__container").length) {
    let navContent = document.querySelector(".main-menu").innerHTML;
    let mobileNavContainer = document.querySelector(".mobile-nav__container");
    mobileNavContainer.innerHTML = navContent;
  }

  if ($(".sticky-header").length) {
    $(".sticky-header")
      .clone()
      .insertAfter(".sticky-header")
      .addClass("sticky-header--cloned");
  }

  if ($(".mobile-nav__container .main-menu__list").length) {
    let dropdownAnchor = $(
      ".mobile-nav__container .main-menu__list .dropdown > a"
    );
    dropdownAnchor.each(function () {
      let self = $(this);
      let toggleBtn = document.createElement("BUTTON");
      toggleBtn.setAttribute("aria-label", "dropdown toggler");
      toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
      self.append(function () {
        return toggleBtn;
      });
      self.find("button").on("click", function (e) {
        e.preventDefault();
        let self = $(this);
        self.toggleClass("expanded");
        self.parent().toggleClass("expanded");
        self.parent().parent().children("ul").slideToggle();
      });
    });
  }

  //Show Popup menu
  $(document).on("click", ".megamenu-clickable--toggler > a", function (e) {
    $("body").toggleClass("megamenu-popup-active");
    $(this).parent().find("ul").toggleClass("megamenu-clickable--active");
    e.preventDefault();
  });
  $(document).on("click", ".megamenu-clickable--close", function (e) {
    $("body").removeClass("megamenu-popup-active");
    $(".megamenu-clickable--active").removeClass("megamenu-clickable--active");
    e.preventDefault();
  });

  if ($(".mobile-nav__toggler").length) {
    $(".mobile-nav__toggler").on("click", function (e) {
      e.preventDefault();
      $(".mobile-nav__wrapper").toggleClass("expanded");
      $("body").toggleClass("locked");
    });
  }

  if ($(".search-toggler").length) {
    $(".search-toggler").on("click", function (e) {
      e.preventDefault();
      $(".search-popup").toggleClass("active");
      $(".mobile-nav__wrapper").removeClass("expanded");
      $("body").toggleClass("locked");
    });
  }
  if ($(".mini-cart__toggler").length) {
    $(".mini-cart__toggler").on("click", function (e) {
      e.preventDefault();
      $(".mini-cart").toggleClass("expanded");
      $(".mobile-nav__wrapper").removeClass("expanded");
      $("body").toggleClass("locked");
    });
  }
  if ($(".odometer").length) {
    $(".odometer").appear(function (e) {
      var odo = $(".odometer");
      odo.each(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });
  }

  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

  if ($("#donate-amount__predefined").length) {
    let donateInput = $("#donate-amount");
    $("#donate-amount__predefined")
      .find("li")
      .on("click", function (e) {
        e.preventDefault();
        let amount = $(this).find("a").text();
        donateInput.val(amount);
        $("#donate-amount__predefined").find("li").removeClass("active");
        $(this).addClass("active");
      });
  }

  //accrodion
  if ($(".firdip-accrodion").length) {
    var accrodionGrp = $(".firdip-accrodion");
    accrodionGrp.each(function () {
      var accrodionName = $(this).data("grp-name");
      var Self = $(this);
      var accordion = Self.find(".accrodion");
      Self.addClass(accrodionName);
      Self.find(".accrodion .accrodion-content").hide();
      Self.find(".accrodion.active").find(".accrodion-content").show();
      accordion.each(function () {
        $(this)
          .find(".accrodion-title")
          .on("click", function () {
            if ($(this).parent().hasClass("active") === false) {
              $(".firdip-accrodion." + accrodionName)
                .find(".accrodion")
                .removeClass("active");
              $(".firdip-accrodion." + accrodionName)
                .find(".accrodion")
                .find(".accrodion-content")
                .slideUp();
              $(this).parent().addClass("active");
              $(this).parent().find(".accrodion-content").slideDown();
            }
          });
      });
    });
  }

  $(".add").on("click", function () {
    if ($(this).prev().val() < 999) {
      $(this)
        .prev()
        .val(+$(this).prev().val() + 1);
    }
  });

  $(".sub").on("click", function () {
    if ($(this).next().val() > 0) {
      if ($(this).next().val() > 0)
        $(this)
          .next()
          .val(+$(this).next().val() - 1);
    }
  });

  if ($(".tabs-box").length) {
    $(".tab-btn").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));
      if ($(target).is(":visible")) {
        return false;
      } else {
        target
          .parents(".tabs-box")
          // .find(".tab-buttons")
          .find(".tab-btn")
          .removeClass("active-btn");
        $(this).addClass("active-btn");
        target
          .parents(".tabs-box")
          // .find(".tabs-content")
          .find(".tab")
          .fadeOut(0);
        target
          .parents(".tabs-box")
          // .find(".tabs-content")
          .find(".tab")
          .removeClass("active-tab");
        $(target).fadeIn(300);
        $(target).addClass("active-tab");
      }
    });
  }

  if ($(".range-slider-price").length) {
    var priceRange = document.getElementById("range-slider-price");

    noUiSlider.create(priceRange, {
      start: [30, 150],
      limit: 200,
      behaviour: "drag",
      connect: true,
      range: {
        min: 10,
        max: 200
      }
    });

    var limitFieldMin = document.getElementById("min-value-rangeslider");
    var limitFieldMax = document.getElementById("max-value-rangeslider");

    priceRange.noUiSlider.on("update", function (values, handle) {
      (handle ? $(limitFieldMax) : $(limitFieldMin)).text(values[handle]);
    });
  }

  function thmOwlInit() {
    // owl slider
    let firdipowlCarousel = $(".firdip-owl__carousel");
    if (firdipowlCarousel.length) {
      firdipowlCarousel.each(function () {
        let elm = $(this);
        let options = elm.data("owl-options");
        let thmOwlCarousel = elm.owlCarousel(
          "object" === typeof options ? options : JSON.parse(options)
        );
        elm.find("button").each(function () {
          $(this).attr("aria-label", "carousel button");
        });
      });
    }
    let firdipowlCarouselNav = $(".firdip-owl__carousel--custom-nav");
    if (firdipowlCarouselNav.length) {
      firdipowlCarouselNav.each(function () {
        let elm = $(this);
        let owlNavPrev = elm.data("owl-nav-prev");
        let owlNavNext = elm.data("owl-nav-next");
        $(owlNavPrev).on("click", function (e) {
          elm.trigger("prev.owl.carousel");
          e.preventDefault();
        });

        $(owlNavNext).on("click", function (e) {
          elm.trigger("next.owl.carousel");
          e.preventDefault();
        });
      });
    }
    let firdipowlCarouselCustomDots = $(".firdip-owl__carousel--custom-dots");
    if (firdipowlCarouselCustomDots.length) {
      firdipowlCarouselCustomDots.each(function () {
        let elm = $(this);
        let firdipowlCarouselThumb = elm.data("thumb-elm");
        $(firdipowlCarouselThumb).each(function () {
          let self = $(this);
          self.find(".owl-dot").on("click", function () {
            elm.trigger("to.owl.carousel", [$(this).index(), 300]);
          });
        });
        elm.on("changed.owl.carousel", function (element) {
          $(firdipowlCarouselThumb).each(function () {
            let self = $(this);
            self.find(".owl-dot").removeClass("active");
            self.find(".owl-dot").eq(element.item.index).addClass("active");
          });
        });
      });
    }
  }

  function thmTinyInit() {
    // tiny slider
    const tinyElm = document.querySelectorAll(".thm-tiny__slider");
    tinyElm.forEach(function (tinyElm) {
      const tinyOptions = JSON.parse(tinyElm.dataset.tinyOptions);
      let thmTinySlider = tns(tinyOptions);
    });
  }
  function firdipSlickInit() {
    // slick slider
    let hiredotsslickCarousel = $(".firdip-slick__carousel");
    if (hiredotsslickCarousel.length) {
      hiredotsslickCarousel.each(function () {
        let elm = $(this);
        let options = elm.data("slick-options");
        let hiredotsslickCarousel = elm.slick(
          "object" === typeof options ? options : JSON.parse(options)
        );
      });
    }
  }

  /*-- Handle Scrollbar --*/
  function handleScrollbar() {
    const bodyHeight = $("body").height();
    const scrollPos = $(window).innerHeight() + $(window).scrollTop();
    let percentage = (scrollPos / bodyHeight) * 100;
    if (percentage > 100) {
      percentage = 100;
    }
    $(".scroll-to-top .scroll-to-top__inner").css("width", percentage + "%");
  }

  /*-- One Page Menu --*/
  function SmoothMenuScroll() {
    var anchor = $(".scrollToLink");
    if (anchor.length) {
      anchor.children("a").bind("click", function (event) {
        if ($(window).scrollTop() > 10) {
          var headerH = "0";
        } else {
          var headerH = "0";
        }
        var target = $(this);
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $(target.attr("href")).offset().top - headerH + "px"
            },
            900,
            "easeInOutExpo"
          );
        anchor.removeClass("current");
        anchor.removeClass("current-menu-ancestor");
        anchor.removeClass("current_page_item");
        anchor.removeClass("current-menu-parent");
        target.parent().addClass("current");
        event.preventDefault();
      });
    }
  }
  SmoothMenuScroll();

  function OnePageMenuScroll() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 117) {
      var menuAnchor = $(".one-page-scroll-menu .scrollToLink").children("a");
      menuAnchor.each(function () {
        var sections = $(this).attr("href");
        $(sections).each(function () {
          if ($(this).offset().top <= windscroll + 100) {
            var Sectionid = $(sections).attr("id");
            $(".one-page-scroll-menu").find("li").removeClass("current");
            $(".one-page-scroll-menu")
              .find("li")
              .removeClass("current-menu-ancestor");
            $(".one-page-scroll-menu")
              .find("li")
              .removeClass("current_page_item");
            $(".one-page-scroll-menu")
              .find("li")
              .removeClass("current-menu-parent");
            $(".one-page-scroll-menu")
              .find("a[href*=\\#" + Sectionid + "]")
              .parent()
              .addClass("current");
          }
        });
      });
    } else {
      $(".one-page-scroll-menu li.current").removeClass("current");
      $(".one-page-scroll-menu li:first").addClass("current");
    }
  }

  // window scroll event
  function stickyMenuUpScroll($targetMenu, $toggleClass) {
    var lastScrollTop = 0;
    window.addEventListener(
      "scroll",
      function () {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > 500) {
          if (st > lastScrollTop) {
            // downscroll code
            $targetMenu.removeClass($toggleClass);
            // console.log("down");
          } else {
            // upscroll code
            $targetMenu.addClass($toggleClass);
            // console.log("up");
          }
        } else {
          $targetMenu.removeClass($toggleClass);
        }
        lastScrollTop = st;
      },
      false
    );
  }
  stickyMenuUpScroll($(".sticky-header--normal"), "active");

  //Strech Column
  function firdip_stretch() {
    var i = $(window).width();
    $(".row .firdip-stretch-element-inside-column").each(function () {
      var $this = $(this),
        row = $this.closest(".row"),
        cols = $this.closest('[class^="col-"]'),
        colsheight = $this.closest('[class^="col-"]').height(),
        rect = this.getBoundingClientRect(),
        l = row[0].getBoundingClientRect(),
        s = cols[0].getBoundingClientRect(),
        r = rect.left,
        d = i - rect.right,
        c = l.left + (parseFloat(row.css("padding-left")) || 0),
        u = i - l.right + (parseFloat(row.css("padding-right")) || 0),
        p = s.left,
        f = i - s.right,
        styles = {
          "margin-left": 0,
          "margin-right": 0
        };
      if (Math.round(c) === Math.round(p)) {
        var h = parseFloat($this.css("margin-left") || 0);
        styles["margin-left"] = h - r;
      }
      if (Math.round(u) === Math.round(f)) {
        var w = parseFloat($this.css("margin-right") || 0);
        styles["margin-right"] = w - d;
      }
      $this.css(styles);
    });
  }
  firdip_stretch();

  function firdip_cuved_circle() {
    let circleTypeElm = $(".curved-circle--item");
    if (circleTypeElm.length) {
      circleTypeElm.each(function () {
        let elm = $(this);
        let options = elm.data("circle-text-options");
        elm.circleType(
          "object" === typeof options ? options : JSON.parse(options)
        );
      });
    }
  }

  /*-- Price Range --*/
  function priceFilter() {
    if ($(".price-ranger").length) {
      $(".price-ranger #slider-range").slider({
        range: true,
        min: 50,
        max: 1000,
        values: [11, 500],
        slide: function (event, ui) {
          $(".price-ranger .ranger-min-max-block .min").val("$" + ui.values[0]);
          $(".price-ranger .ranger-min-max-block .max").val("$" + ui.values[1]);
        }
      });
      $(".price-ranger .ranger-min-max-block .min").val(
        "$" + $(".price-ranger #slider-range").slider("values", 0)
      );
      $(".price-ranger .ranger-min-max-block .max").val(
        "$" + $(".price-ranger #slider-range").slider("values", 1)
      );
    }
  }

  // window load event

  $(window).on("load", function () {
    if ($(".preloader").length) {
      $(".preloader").fadeOut();
    }
    thmOwlInit();
    thmTinyInit();
    priceFilter();
    firdipSlickInit();

    if ($(".circle-progress").length) {
      $(".circle-progress").appear(function () {
        let circleProgress = $(".circle-progress");
        circleProgress.each(function () {
          let progress = $(this);
          let progressOptions = progress.data("options");
          progress.circleProgress(progressOptions);
        });
      });
    }
    if ($(".masonry-layout").length) {
      $(".masonry-layout").imagesLoaded(function () {
        $(".masonry-layout").isotope({
          layoutMode: "masonry"
        });
      });
    }
    if ($(".fitRow-layout").length) {
      $(".fitRow-layout").imagesLoaded(function () {
        $(".fitRow-layout").isotope({
          layoutMode: "fitRows"
        });
      });
    }

    if ($(".post-filter").length) {
      var postFilterList = $(".post-filter li");
      // for first init
      $(".filter-layout").isotope({
        filter: ".filter-item",
        animationOptions: {
          duration: 500,
          easing: "linear",
          queue: false
        }
      });
      // on click filter links
      postFilterList.on("click", function () {
        var Self = $(this);
        var selector = Self.attr("data-filter");
        postFilterList.removeClass("active");
        Self.addClass("active");

        $(".filter-layout").isotope({
          filter: selector,
          animationOptions: {
            duration: 500,
            easing: "linear",
            queue: false
          }
        });
        return false;
      });
    }

    if ($(".post-filter.has-dynamic-filter-counter").length) {
      // var allItem = $('.single-filter-item').length;

      var activeFilterItem = $(".post-filter.has-dynamic-filter-counter").find(
        "li"
      );

      activeFilterItem.each(function () {
        var filterElement = $(this).data("filter");
        var count = $(".filter-layout").find(filterElement).length;
        $(this).append("<sup>[" + count + "]</sup>");
      });
    }

    firdip_cuved_circle();
  });

  $(window).on("scroll", function () {
    OnePageMenuScroll();
    handleScrollbar();
    if ($(".sticky-header--one-page").length) {
      var headerScrollPos = 130;
      var stricky = $(".sticky-header--one-page");
      if ($(window).scrollTop() > headerScrollPos) {
        stricky.addClass("active");
      } else if ($(this).scrollTop() <= headerScrollPos) {
        stricky.removeClass("active");
      }
    }

    var scrollToTopBtn = ".scroll-to-top";
    if (scrollToTopBtn.length) {
      if ($(window).scrollTop() > 500) {
        $(scrollToTopBtn).addClass("show");
      } else {
        $(scrollToTopBtn).removeClass("show");
      }
    }
  });

  $(window).on("resize", function () {
    firdip_stretch();
  });
})(jQuery);
