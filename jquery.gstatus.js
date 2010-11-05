/*!
 * jQuery gStatus Plugin
 * version: 0.1
 * @requires jQuery v1.3.2 or later
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;(function($) {
	var methods	= {
		hide:	function(options) {
			return this.clearQueue().delay(options.duration).hide();
		},
		init:	function(options) {
			return this.each(function() {
				if (options.hideOnClick) {
					$(this).bind('click.gStatus', methods.hide);
				}
			});
		},
		show:	function(options) {
			var self = this.find('span').html(options.message).end().clearQueue().show();
			
			return options.duration ? self.delay(options.duration).hide(0) : self;
		},
		update:	function(options) {
			var self = this.find('span').html(options.message);
			
			return options.duration ? self.clearQueue().delay(options.duration).hide(0) : self;
		}	
	};
	
	$.fn.gStatus = function(method, options) {
		// Extend defaults with optional options object
		var	options	= $.extend(true, {}, $.fn.gStatus.defaults, options);
			
		// Fast fail if nothing selected
		if (!this.length) {
			return this;
		}
		
		// Call the appropriate method or error
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' +  method + ' does not exist in jQuery.gStatus' );
		}
	};
	
	// Defaults
	$.fn.gStatus.defaults = {
		duration:		0,
		hideOnClick:	true,
		message:		'Loading ...'
	};
}(jQuery));