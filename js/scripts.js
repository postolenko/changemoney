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

	// ---------------

	$(".dropdown_wrapp").each( function() {

		if( !$(this).hasClass("active") ) {

	        $(this).find(".dropdown_box").css({
	            "display" : "none"
	        });

		}

    });


    $(".dropdown_title").click(function(e) {

        e.preventDefault();

        parentBlock = $(this).closest(".dropdown_wrapp");

        var dropdownBox = parentBlock.find(".dropdown_box");

        if( dropdownBox.is(":hidden") ) {

            dropdownBox.slideDown(300);
            parentBlock.addClass("active");

        } else {

            dropdownBox.slideUp(300);
            parentBlock.removeClass("active");

        }

    });

    // $(document).mouseup(function (e){

    //     hide_element = $('.dropdown_box');

    //     if (!hide_element.is(e.target)

    //         && hide_element.has(e.target).length === 0) {

    //         parentBlock = hide_element.closest(".dropdown_wrapp");
    //         hide_element.slideUp(300);
    //         parentBlock.removeClass("active");
    //     }

    // });

    // $(this).keydown(function(eventObject){

    //     if (eventObject.which == 27) {

    //         $('.dropdown_box').slideUp(300);

    //     }

    // });

});

function getFooterPosition() {

    $(".footer_section").css({
        "margin-top" : -$(".footer_section").height() + "px"
    });

    $(".wrapper").css({
        "padding-bottom" : $(".footer_section").height() + "px"
    });

}