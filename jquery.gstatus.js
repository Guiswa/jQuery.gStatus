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
		destroy:	function() {
			return this.each(function() {
				var self = $(this);
				
				self.unbind('.gStatus').html(self.data('oldHtml')).removeData('gStatus');
			});
		},
		hide:		function(options) {
			return this.clearQueue().delay(options.duration).hide();
		},
		init:		function(options) {
			return this
				.each(function() {
					var self		= $(this),
						selfData	= self.data('gStatus');
					
					// Do setup stuff if not already initialized
					if (!selfData) {
						// Save old contents for later
						self
							.data({
								gStatus: true,
								oldHtml: self.html()
							})
							.html('<span></span>');
						
						if (options.hideOnClick) {
							self.css('cursor', 'pointer').bind('click.gStatus', function() { $(this).gStatus('hide'); });
						}
					}
				})
				.hide();
		},
		show:		function(options) {
			var self = this.find('span').css(options.spanCSS).html(options.message).end().css(options.css).clearQueue().show();
			
			return options.duration ? self.delay(options.duration).hide(0) : self;
		},
		update:		function(options) {
			var self = this.find('span').css(options.spanCSS).html(options.message).end().css(options.css);
			
			return options.duration ? self.clearQueue().delay(options.duration).hide(0) : self;
		}	
	};
	
	// Main plugin method
	$.fn.gStatus = function(method, options) {
		// Extend defaults with optional options object
		options	= $.extend(true, {}, $.fn.gStatus.defaults, options);
			
		// Fast fail if nothing selected
		if (!this.length) {
			return this;
		}
		
		// Call the appropriate method or error
		if (methods[method]) {
			return methods[method].call(this, options);
		} else if (typeof method === 'object' || !method) {
			return methods.init.call(this, options);
		} else {
			$.error('Method ' +  method + ' does not exist in jQuery.gStatus' );
		}
	};
	
	// Defaults
	$.fn.gStatus.defaults = {
		autoOpen:		false,
		css:			{
			position:		'fixed',
			'font-size':	'1.1em',
			'text-align':	'center',
			top:			'0',
			width:			'100%',
			'z-index':		'9999'
		},
		duration:		0,
		hideOnClick:	true,
		message:		'Loading ...',
		spanCSS:		{
			'border-radius':		'0 0 5px 5px',
			'-moz-border-radius':	'0 0 5px 5px',
			background:				'#ffa',
			display:				'inline-block',
			padding:				'0.3em 1em',
			'font-weight':			'bold'
		}
	};
}(jQuery));