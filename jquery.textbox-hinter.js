/* 
 * jQuery - Textbox Hinter plugin v1.0
 * http://www.aakashweb.com/
 * Copyright 2010, Aakash Chakravarthy
 * Released under the MIT License.
 *
 * @author Aakash Chakravarthy
 * @author Halil Özgür (Modifications/Enhancements) 
 */
(function($){
    $.fn.tbHinter = function(options) {

    var defaults = {
        text: 'Enter a text ...',
           "class": ''
    };
    
    var options = $.extend(defaults, options);

    function defaultAction(el)
    {
        if(el.val() == options.text){
            el.val('');
            el.removeClass(options["class"]);
        }
    }
    return this.each(function(){
    
        $(this).focus(function(){
            defaultAction($(this));
        });
        
        $(this).blur(function(){
            if($(this).val() == ''){
                $(this).val(options.text);
                $(this).addClass(options["class"]);
            }
        });
        
        var self = $(this);
        $(this).parents("form").submit(function (){
            defaultAction(self);
        });
        
        $(this).blur();
        
    });
};
})(jQuery);