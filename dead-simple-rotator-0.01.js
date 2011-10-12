/*
*	Dead Simple Rotator v0.01
*	
*	Author: Gideon Barton 2011 gideon.barton@gmail.com
*	Requirements: jQuery
*
*/

function rotator(div, easing, easingLast, duration, durationLast, intervalDuration)
{
	daemon = setInterval(
		function() {
			var offset = $('#' + div).css('margin-left');
			
			switch (offset)
			{
				case '0px':
					$('#' + div).animate({					    
					    'margin-left': '-854px',
					  }, duration, easing);
					break;
				case '-854px':
					$('#' + div).animate({					    
					    'margin-left': '-1708px',
					  }, duration, easing);
					break;
				case '-1708px':
					$('#' + div).animate({					    
					    'margin-left': '0px',
					  }, durationLast, easingLast);
					break;
			}
		}, intervalDuration
	)
}