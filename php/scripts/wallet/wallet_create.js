(function($) {

    $(document).ready(function() {

        $("#Created").click(function() {
            var pc_device = "win16|win32|win64|mac|macintel";
            var this_device = navigator.platform;

            if ( this_device ) {
                if ( pc_device.indexOf(navigator.platform.toLowerCase()) < 0) {
                    $('.panel-body').load('/cli/m.create.html');
                }
                else {
                    $('.panel-body').load('/cli/create.html');
                }
            }
            return false;
        });

        $("#Created").trigger("click");
    });

})(jQuery);