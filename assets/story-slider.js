/**
 * Adjust slider settings in this file
 * Tiny Slider 2 documentation: https://github.com/ganlanyuan/tiny-slider
 */

window.onload = function() {
	const sliders = document.querySelectorAll( '.story-slider' );
	const sliderNav = document.querySelectorAll( '.story-slider-nav' );
	sliders.forEach( function( slider, i ) {
		const storySlider = tns( {
			container: slider,
			items: 1,
			axis: "vertical",
            autoplay: false,
            navContainer: sliderNav[i],
            controls: false,
		} );
	} );
};
