// 2018-05-19
define([
	'jquery', 'mage/utils/wrapper', 'Magento_Ui/js/modal/modal'
], function($, w, modal) {'use strict'; return function(sb) {
$.extend(sb.prototype, {
	submit: w.wrap(sb.prototype.submit, function(_super) {
		debugger;
		// 2018-05-21
		// How is the `mage.modal` jQuery UI widget implemented and used?
		// https://mage2.pro/t/5518
		var m = $('<div>TEST</div>').modal({
			buttons: [],
			modalClass: 'albumenvy-popup',
			type: 'popup'
		});
		m.modal('openModal');
		//return _super();
	})
});
return sb; };});