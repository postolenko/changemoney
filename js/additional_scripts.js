$(window).on("load",function(){

	getMainNavScroll();
	getSistemScroll();

});

$(window).on("resize",function(){

	getMainNavScroll();
	getSistemScroll();

});

$(document).ready(function() {		

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



