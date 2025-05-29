(function ($) {
	
	"use strict";

	// Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });


	$('.owl-our-team').owlCarousel({
		items:3,
		loop:true,
		dots: true,
		nav: false,
		autoplay: true,
		margin:0,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:3
			  },
			  1600:{
				  items:3
			  }
		  }
	})
	

	// Menu Dropdown Toggle
  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


  // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var width = $(window).width();
        if(width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);  
        }       
        $('html,body').animate({
          scrollTop: (target.offset().top) + 1
        }, 700);
        return false;
      }
    }
  });

  $(document).ready(function () {
      $(document).on("scroll", onScroll);
      
      //smoothscroll
      $('.scroll-to-section a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
          
          $('.scroll-to-section a').each(function () {
              $(this).removeClass('active');
          })
          $(this).addClass('active');
        
          var target = this.hash,
          menu = target;
          var target = $(this.hash);
          $('html, body').stop().animate({
              scrollTop: (target.offset().top) + 1
          }, 500, 'swing', function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
          });
      });
  });

  function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('.nav a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('.nav ul li a').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
      });
  }



	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });

	

	// Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function() {
      if(width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }


})(window.jQuery);


//faz com que a imagem que esta dentro do circulo ao lado do cabecalho nao apareca ao rolar a barra de rolagem 
/*window.addEventListener("scroll", function () {
  const card = document.querySelector(".card");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    card.style.opacity = "0"
  }
  else{
    card.style.opacity = "1";
  }
})*/

const textos = [
  {
    pequeno: "Seja bem-vindo ao Instituto Politécnico Do Ngola Kiluanje",
    grande: "Nós prometemos trazer a melhor solução para o teu futuro.",
    imagem: "assets/images/ETQO0968.JPG"
  },
  {
    pequeno: "Forma-te com qualidade e inovação!",
    grande: "Torna-te um profissional de excelência com o nosso apoio.",
    imagem: "assets/images/study-group-african-people (1).jpg"
  },

  {
    grande: "Transformando o futuro com educação de excelência!",
    pequeno: "A escolha é sua, o futuro é nosso!",
    imagem: "assets/images/Image 8_05_2025, 21_34_49.png"
  }
];

let indice = 0;

function atualizarConteudo() {
  document.getElementById("titulo-pequeno").innerText = textos[indice].pequeno;
  document.getElementById("titulo-grande").innerHTML = textos[indice].grande;
  document.getElementById("imagem-banner").src = textos[indice].imagem;
}

function trocarConteudoManual(direcao) {
  indice = (indice + direcao + textos.length) % textos.length;
  atualizarConteudo();
}

// Troca automática a cada 5 segundos
setInterval(() => {
  trocarConteudoManual(1);
}, 5000);
