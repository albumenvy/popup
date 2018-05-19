// 2018-05-19
define(['jquery', 'mage/utils/wrapper'], function($, w) {'use strict'; return function(sb) {
$.extend(sb.prototype, {
	submit: w.wrap(sb.prototype.submit, function(_super) {
		debugger;
		return _super();
	})
});
return sb; };});