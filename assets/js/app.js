document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.intro');
    const header = document.querySelector('.header')
    const scrollItems = document.querySelectorAll('.scroll-item');

    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;

        scrollItems.forEach(el => {
            let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
            if (windowCenter >= scrollOffset) {
                el.classList.add('animation');
            } else {
                el.classList.remove('animation');
            }
        });
    };

    const headerFixed = () => {
        let scrollTop = window.scrollY;
        let heroCenter = hero.offsetHeight / 2;

        if (scrollTop >= heroCenter) {
            header.classList.add('fixed');
            hero.style.margin.Top = `${header.offsetHeight}px`;
        } else {
            header.classList.remove('fixed');
            hero.style.marginTop = `0px`;
        }
    };


    window.addEventListener('scroll', () => {

        scrollAnimation();
    });
});

/* Mobile Nav*/
$("#navToggle").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
});

/* Smooth Scroll =========================*/

$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    nav.removeClass("show");

    $("html, body").animate ({
        scrollTop: elementOffset - 60
    }, 600);
});


// $('.progress__barblue').each(function () {

//     var $this = $(this);
//     var per = $this.attr('per');
//     $this.css("width", per + '%');
//     $({ animatedValue: 0}).animate({ animatedValue: per}, {
//         duration: 1000,
//         step: function() {
//             $this.attr('per', Math.floor(this.animatedValue) + '%');
//         },
//         comlete: function() {
//             $this.attr('per', Math.floor(this.animatedValue) + '%');
//         }
//     });
// });


  /* MODAL
  ========================================*/

  const modalCall = $("[data-modal]");
  const modalClose = $("[data-close]");

  modalCall.on("click", function(event) {
      event.preventDefault();

      let $this = $(this);
      let modalId = $this.data('modal');

      $(modalId).addClass('show');
      $("body").addClass('no-scroll');

      setTimeout(function() {
          $(modalId).find(".modal__dialog").css ({
              transform: "rotateY(0)"
          });
      }, 60);

  });

  modalClose.on("click", function(event) {
      event.preventDefault();

      let $this = $(this);
      let modalParent = $this.parents('.modal');

      modalParent.find(".modal__dialog").css ({
          transform: "rotateY(90deg)"
      });

      setTimeout(function() {
          modalParent.removeClass('show');
          $("body").removeClass('no-scroll');
      }, 200);
  });

  $(".modal").on("click", function(event) {
      let $this = $(this);

      $this.find(".modal__dialog").css ({
          transform: "rotateY(90deg)"
      });

      setTimeout(function() {
          $this.removeClass('show');
          $("body").removeClass('no-scroll');
      }, 200);
  });

  $(".modal__dialog").on("click", function(event) {
      event.stopPropagation();
  });


//SLIDER ================
$(function() {
    $("[data-slider]").slick ({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        autoplay: true,
        fade: true,
        arrows: false,
        dots: true,
    });
});