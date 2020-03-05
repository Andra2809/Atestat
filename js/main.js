"use strict";
jQuery(document).on('ready', function() {

	/* -------------------------------------
            HOME SLIDER
	-------------------------------------- */
	 $('#st-homeslider').owlCarousel({
		items: 1,
		nav:true,
		loop:true,
		dots: false,
		autoplay: true,
		dotsClass: 'st-sliderdots',
		navClass: ['st-prev', 'st-next'],
		navContainerClass: 'st-slidernav',
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
	});
	 

    /* -------------------------------------
            STICKY MENU Plugin
	-------------------------------------- */

	initStickyScrollBlock();
	// initialize fixed blocks on scroll
	function initStickyScrollBlock() {
		ResponsiveHelper.addRange({
			'768..': {
				on: function() {
					jQuery('.st-navigationarea').stickyScrollBlock({
						setBoxHeight: false,
						activeClass: 'sticky',
						positionType: 'fixed',
						extraTop: function() {
							var totalHeight = 0;
							jQuery('0').each(function() {
								totalHeight += jQuery(this).outerHeight();
							});
							return totalHeight;
						},
						showAfterScrolled: true
					});
				},
				off: function() {
					jQuery('.st-navigationarea').stickyScrollBlock('destroy');
				}
			}
		});
	}
	
});
 





