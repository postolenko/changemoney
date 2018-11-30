var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).load(function() {

	getFooterPosition();

});

$(window).resize(function() {
    
	getFooterPosition();

});

$(document).ready(function() {

	var stepIndex;

	$(".steps_wrapp .step").each(function() {

		parentBlock = $(this).closest(".steps_wrapp");
		stepIndex = $(this).index(".step");

		if( $(this).hasClass("active") && stepIndex < parentBlock.find(".step").length) {

			stepIndex = $(this).index(".step");
			parentBlock.find(".line:eq("+stepIndex+")").addClass("active");

		}

	});

});

function getFooterPosition() {

    $(".footer_section").css({
        "margin-top" : -$(".footer_section").height() + "px"
    });

    $(".wrapper").css({
        "padding-bottom" : $(".footer_section").height() + "px"
    });

}