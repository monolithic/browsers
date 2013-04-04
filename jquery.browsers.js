/* Project: Browsers.js
 * Code name: Lincoln
 * Version: 0.1.0
 * Author: Agence Epsilon
 * Author URL: http://www.agenceepsilon.com
 * Git URL: https://github.com/agenceepsilon/browsers
 * Plugin URL: http://plugins.jquery.com/browsers/
 * Release Date: 24/03/2013
 *
 * Description: Browsers.js
 * jQuery: 1.9+
 * jQuery UI:
 * Plugin(s):
 * Browsers: IE7+, Firefox 5+, Chrome 20+, Safari 3+, Opera 10+
 */

(function($){
    $.fn.browsers = function(opts){

        // Defaults options
        var defaults = {
            osClass: true,
            engineClass: true
        };

        var param = $.extend(defaults, opts);

        return this.each(function(){

            var os = (function(){
                var $userAgent = navigator.userAgent.toLowerCase();
                return {
                    // OS
                    isWin: /windows/.test($userAgent),
                    isLinux: /linux/.test($userAgent),
                    isAndroid: /android/.test($userAgent),

                    // Moteurs de rendu
                    isWebkit: /applewebkit/.test($userAgent),
                    isGecko: /gecko\//.test($userAgent),
                    isTrident: /trident/.test($userAgent),

                    // Browsers
                    isFirefox: /firefox/.test($userAgent),
                    isChrome: /chrome/.test($userAgent),
                    isSafari: /safari/.test($userAgent)

                };
            }());
            // OS
            if(os.isWin == true){
                $(this).addClass("windows");
            }
            if(os.isLinux == true){
                $(this).addClass("linux");
            }
            if(os.isAndroid == true){
                $(this).addClass("android");
            }

            // Moteurs de rendu
            if(os.isWebkit == true){
                $(this).addClass("webkit");
            }
            if(os.isGecko == true){
                $(this).addClass("gecko");
            }
            if(os.isTrident == true){
                $(this).addClass("trident");
            }

            // Browsers
            if(os.isFirefox == true){
                $(this).addClass("firefox");
            }
            if(os.isChrome == true && os.isSafari == true){
                $(this).addClass("chrome");
            }
            if(os.isSafari == true){
                $(this).addClass("safari");
            }

        });
    };
})(jQuery);