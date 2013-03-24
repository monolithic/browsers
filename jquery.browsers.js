/* Project: Browsers.js
 * Code name: Chimeara
 * Version: 1.0-b.1
 *  Author: Agence Epsilon
 * Author URL: http://www.agenceepsilon.com
 * Git URL: https://github.com/agenceepsilon/lightbox
 * Plugin URL: http://plugins.jquery.com/lightbox/
 * Release Date: 11/10/2012
 *
 * Description: Lightbox.js
 * jQuery: 1.8+
 * jQuery UI: 1.9+
 * Plugin(s):
 *  - jquery-cookie.js (https://github.com/carhartl/jquery-cookie)
 * Browsers: IE7+, Firefox 5+, Chrome 20+, Safari 3+, Opera 10+
 */

(function($){
    $.fn.browsers = function(opts){

        // Defaults options
        var defaults = {
        };

        var param = $.extend(defaults, opts);

        return this.each(function(){

            var $ua = $(this).userAgent.match(/mozilla/i);

            console.log($ua);


        });
    };
})(jQuery);