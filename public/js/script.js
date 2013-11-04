/* Author: Aidan Nagorcka-Smith (aidanns@gmail.com) */


$("document").ready(function() {

	/* Setup hijacking of the navbar to do smooth scrolling rather than jump with the browser default */
	/* Adapted from: http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links */

	function filterPath(string) {
		return string
			.replace(/^\//,'')
			.replace(/(index|default).[a-zA-Z]{3,4}$/,'')
			.replace(/\/$/,'');
	}
	var locationPath = filterPath(location.pathname);

	$('a[href*=#]').each(function() {
		var thisPath = filterPath(this.pathname) || locationPath;
		if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/,'') ) {
			var $target = $(this.hash), target = this.hash;

			if (target) {
				$(this).click(function(event) {
					event.preventDefault();
					if ($(window).width() > 979) {
						$.scrollTo(target,250,{offset:-40});
					} else {
						$.scrollTo(target,250);
					}
					
				});
			}
		}
	});

});



