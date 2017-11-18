var HeightAdjuster = (function () {
    function HeightAdjuster() {
    }
    HeightAdjuster.prototype.Activate = function () {
        var _this = this;
        this.RepairHeight();
        // Re-adjust the height when the size of the window changes
        $(window).resize(function () {
            _this.RepairHeight();
        });
        // Re-adjust the height when the size of the wrapper div changes
        $(".wrapper").resize(function () {
            _this.RepairHeight();
        });
    };
    ;
    HeightAdjuster.prototype.RepairHeight = function () {
        // Get window height and the wrapper height
        var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
        var windowHeight = $(window).height();
        var sidebarHeight = $(".sidebar").height();
        // Set the min-height of the content and sidebar based on the
        // the height of the document.
        if ($("body").hasClass("fixed")) {
            $(".content-wrapper, .right-side").css('min-height', windowHeight - $('.main-footer').outerHeight());
        }
        else {
            var postSetWidth;
            if (windowHeight >= sidebarHeight) {
                $(".content-wrapper, .right-side").css('min-height', windowHeight - neg);
                postSetWidth = windowHeight - neg;
            }
            else {
                $(".content-wrapper, .right-side").css('min-height', sidebarHeight);
                postSetWidth = sidebarHeight;
            }
            // Fix for the control sidebar height
            var controlSidebar = $(".control-sidebar");
            if (typeof controlSidebar !== "undefined") {
                if (controlSidebar.height() > postSetWidth)
                    $(".content-wrapper, .right-side").css('min-height', controlSidebar.height());
            }
        }
    };
    return HeightAdjuster;
}());
$(function () {
    "use strict";
    var heightAdjuster = new HeightAdjuster();
    heightAdjuster.Activate();
});
//# sourceMappingURL=apps.js.map