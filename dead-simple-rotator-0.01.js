/*
*	Dead Simple Rotator v0.01
*	
*	Author: Gideon Barton 2011 gideon.barton@gmail.com
*	Requirements: jQuery, jQueryUI
*
*	Copyright (C) 2011  Gideon Barton
*	
*	This program is free software; you can redistribute it and/or
*	modify it under the terms of the GNU General Public License
*	as published by the Free Software Foundation; either version 2
*	of the License, or (at your option) any later version.
*	
*	This program is distributed in the hope that it will be useful,
*	but WITHOUT ANY WARRANTY; without even the implied warranty of
*	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*	GNU General Public License for more details.
*	
*	You should have received a copy of the GNU General Public License
*	along with this program; if not, write to the Free Software
*	Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

(function($) {
	$.fn.rotator = function(easing, easingLast, duration, durationLast, intervalDuration, imgWidth)
	{
		var div = this.attr('id') + ' img';
		var frameWidth = imgWidth / 4;
		var margins    = [(frameWidth * 1), (frameWidth * 2)];

		var daemon = setInterval(
			function() {
				var offset = $('#' + div).css('margin-left');
				
				switch (offset)
				{
					case '0px':
						$('#' + div).animate({					    
						    'margin-left': '-' + margins[0] + 'px',
						  }, duration, easing);
						break;
					case '-854px':
						$('#' + div).animate({					    
						    'margin-left': '-' + margins[1] + 'px',
						  }, duration, easing);
						break;
					case '-1708px':
						$('#' + div).animate({					    
						    'margin-left': '0px',
						  }, durationLast, easingLast);
						break;
				}
			}, intervalDuration
		);
	};
}) (jQuery);