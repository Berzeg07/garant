$(document).ready(function(){

	// Мобильное меню 
	$(".fa-bars").click(function(m){
		m.preventDefault();
		$(".main-menu__box3, .main-menu__box4, .main-menu__box5, .main-menu__box6").slideToggle(500);
	});
	// Конец Мобильное меню

    // Табы главная
    $('.service-box a').click(function(e) {
        e.preventDefault();
        $('a').removeClass('active_tab');
        $(this).addClass('active_tab');
        var tab = $(this).attr('href');
        $('.detail-box').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);       
    });
    $('.service-box a:first').click();
    // Конец Табы


      // Табы новости
      $('.news__box_data a').click(function(i) {
        i.preventDefault();
        $('a').removeClass('active_tab2');
        $(this).addClass('active_tab2');
        var tab = $(this).attr('href');
        $('.cart').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);       
    });
      $('.news__box_data a:first').click();
    // Конец Табы

        /* Slider
        =====================*/
        var owl2 = $("#slider__actual");
        owl2.owlCarousel({
            loop:true,
            nav:true, 
            autoplay:false,
            smartSpeed:1000,
            margin:25,
        center:false,     //если нужны обрезаные края
        navText:['<span class="nav-left"></span>','<span class="nav-right"></span>'],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2 
            },
            768:{
                items:3
            }, 
             1240:{
                items:4
            },      
        }
    });

    /* Slider 2
    =====================*/
    var owl = $("#slider__news");
    owl.owlCarousel({
        loop:true,
        nav:true, 
        autoplay:false,
        smartSpeed:1000,
        margin:5,
        center:false, 
        navText:['<span class="nav-left1"></span>','<span class="nav-right2"></span>'],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1 
            },
            768:{
                items:1
            },      
        }
    });

    $(function() {

        $(".js-nicescroll").niceScroll({
            cursorcolor: "#166594",
            background: "#BABABA",
            cursorwidth: "5px",
            cursorborder: "0",
            cursorborderradius: "6px",
            autohidemode: false,
            cursorminheight: 50,
            horizrailenabled: false,
            railpadding: { top: -5, right: 0, left: 0, bottom: 5 },
        });

    });

    // Fancybox
    // $("a[rel=group]").fancybox({
    //     'transitionIn' : 'none',
    //     'transitionOut' : 'none',
    //     'titlePosition' : 'over',
    //     'titleFormat' : function(title, currentArray, currentIndex, currentOpts) {
    //         return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
    //     }
    // });

    // Modal window
    // $('a[name=modal]').click(function(e) {
    // 	e.preventDefault();
    // 	var id = $(this).attr('href');
    // 	var maskHeight = $(document).height();
    // 	var maskWidth = $(window).width();
    // 	$('#mask').css({'width':maskWidth,'height':maskHeight});
    // 	$('#mask').fadeTo("slow",0.8); 
    // 	var winH = $(window).height();
    // 	var winW = $(window).width();
    // 	posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement ||document.body.parentNode || document.body).scrollTop;
    // 	$(id).css('top',  posTop+50);
    // 	$(id).css('left', winW/2-$(id).width()/2);
    // 	$(id).fadeIn(500); 
    // });
    // $('.window .dd-close').click(function (e) {
    // 	e.preventDefault();
    // 	$('#mask, .window').hide();
    // 	$('.window').hide();
    // }); 

    // $('#mask, .an-exit__krest').click(function () {
    // 	$('#mask').hide();
    // 	$('.window').hide();
    // }); 
    // $(".phone").mask("+ 7 (999) 999 - 99 - 99?"); 
    // $(".form-message").submit(function() { 
    // 	var tel = $(this).find('input[name="phone"]');
    // 	var empty = false;
    // 	if (tel.val() == ""){
    // 		empty = true;
    // 	}
    // 	if (empty == true){
    // 		tel.addClass("error-input");
    // 		tel.focus();
    // 	}else{
    // 		var form_data = $(this).serialize(); 
    // 		$.ajax({
    // 			type: "POST", 
    // 			url: "/message.php", 
    // 			data: form_data,
    // 			success: function() {
    // 				cleanTnanks(this);
    // 			}
    // 		});
    // 	}
    // 	return false;
    // }); 

    // function cleanTnanks(form){
    // 	$('input[type="text"]').removeClass("error-input");
    // 	$("input[type=text], textarea").val("");
    // 	$('.window').hide();
    // 	$('a[href=#thanks]').trigger('click');

    // };



});//END READY
