jQuery gStatus Plugin
=====================

Requires jQuery v1.3.2 or later

Licensing
---------

Dual licensed under the MIT and GPL licenses:
	http://www.opensource.org/licenses/mit-license.php
	http://www.gnu.org/licenses/gpl.html
 
Usage
-----

Include the plugin on your page after jQuery:

	<script type="text/javascript" src="path/to/jquery.gstatus.js"></script>
	
Create a placeholder div on your page:

	<div id="foo"></div>
	
Initialize the plugin:

	$('#foo').gStatus();

Call one of the public methods:

	$('#foo').gStatus('show');		// Show status with default options
	
	$('#foo').gStatus('hide');		// Hide status with default options
	
	$('#foo').gStatus('update');	// Update status with default options
	
Include an optional options object:

	$('#foo').gStatus('show', {
		message:	'Hello',		// Custom message
		duration:	5000			// In ms; display for 5 seconds before hiding
	});
	
	$('#foo').gStatus('hide', {
		duration:	5000			// In ms; wait 5 seconds, then hide
	});
	
	$('#foo').gStatus('update', {
		css:		{ 'font-size': 14px },			// Custom CSS applied to container div
		spanCSS:	{ 'background-color': 'red' }	// Custom CSS applied to inner span
	});
	
Defaults:

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
	
History
-------

	0.1
		* First release

Questions?
----------

Email me at floodle@floodle.org