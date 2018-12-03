$(window).on("load",function(){

	// $(".scroll").mCustomScrollbar();
	getMainNavScroll();
	getSistemScroll();

});

$(window).on("resize",function(){

	// $(".scroll").mCustomScrollbar();
	getMainNavScroll();
	getSistemScroll();

});

$(document).ready(function() {		

	// $("select").each(function() {

	// 	$(this).select2({
	// 		minimumResultsForSearch: Infinity,
	// 		width: '100%'
	// 	});

	// });

});


function getMainNavScroll() {

	if( bodyWidth > 768 ) {

		$("#main_nav").mCustomScrollbar("destroy");

	} else {

		if( !$("#main_nav").hasClass("mCustomScrollbar") ) {

			$("#main_nav").mCustomScrollbar();

		}		

	}

}

function getSistemScroll() {

	if( bodyWidth > 768 ) {

		$(".sistems_list").mCustomScrollbar("destroy");

	} else {

		if( !$(".sistems_list").hasClass("mCustomScrollbar") ) {

			$(".sistems_list").mCustomScrollbar();

		}		

	}

}



