var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).load(function() {

	getFooterPosition();

});

$(window).resize(function() {

	bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    
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

    // -----------------------

    $(".respmenubtn").click(function() {

        if( $(".main-nav_wrapp").is(":hidden") ) {

            $(".main-nav_wrapp").fadeIn(300);

            $(this).addClass("active");

        } else {

            $(".main-nav_wrapp").fadeOut(300);

            $(this).removeClass("active");

        }

    });

    $(this).keydown(function(eventObject){

        if (eventObject.which == 27 &&
            $(".main-nav_wrapp").is(":visible") ) {

                $(".main-nav_wrapp").fadeOut(300);

                $(".respmenubtn").removeClass("active");

        }

    });

    // -----------------------

    $(".sistem_select").each(function() {

    	var sistemsList = $(this).find(".sistems_list");
    	var sistemChose = $(this).find(".sistem_chose");

    	sistemsList.find("a").each(function() {

			if( $(this).hasClass("active") ) {

    			sistemChose.html($(this).html());

    			return false;

    		} else {

    			sistemChose.html("");

    		}
   		
    	});

    	if(sistemChose.html() == "") {

    		sistemChose.html( sistemsList.find("a:eq(0)").html() );

    	}

    });

    $(".sistems_list li a").click(function(e) {

    	if( bodyWidth <= 768 ) {

	    	e.preventDefault();
	    	parentBlock = $(this).closest(".sistem_select");
	    	var sistemsListWrapp = $(this).closest(".sistem_select").find(".sistems_list_wrapp");
	    	var sistemChose = parentBlock.find(".sistem_chose");
	    	var appendTempl = $(this).html();
	    	sistemChose.html(appendTempl);
			sistemsListWrapp.fadeOut(300);

		}

    });

    $(".sistem_chose").click(function(e) {

    	e.preventDefault();

    	var sistemsListWrapp = $(this).closest(".sistem_select").find(".sistems_list_wrapp");
    	if( sistemsListWrapp.is(":hidden") ) {
    		sistemsListWrapp.fadeIn(300);
    	} else {
    		sistemsListWrapp.fadeOut(300);
    	}

    });

    $(".sistems_list_wrapp .close_btn").click(function(e) {

    	e.preventDefault();

    	parentBlock = $(this).closest(".sistems_list_wrapp");
    	parentBlock.fadeOut(300);

    });

    $(this).keydown(function(eventObject){

    	if( bodyWidth <= 768 ) {

	    	var sistemsListWrapp = $(".sistems_list_wrapp");

	        if (eventObject.which == 27 &&
	            sistemsListWrapp.is(":visible") ) {
	                sistemsListWrapp.fadeOut(300);
	        }

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