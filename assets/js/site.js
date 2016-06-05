(function() {
    //generate random number between min and max
    var rand = function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }


    $('#splash nav a.normal, #header a.normal').each(function (i, el) {
        var $el = $(el);
        $(el).on('click', function (e) {
            e.preventDefault();
            var section = $($el.attr('href'));
            $('html, body').animate({
                scrollTop: section.offset().top
            }, 1000);
        })
    });

    // ----- show / hide header on scroll ----- //
    var showHideHeader = function () {
        var header = $('#header');
        var splash = $('#splash');

        if($(window).scrollTop() > splash.offset().top + splash.height()) {
            console.log("past splash");
            if (!header.is(':visible')) header.show(500);
        } else {
            if (header.is(':visible')) header.hide(500);
        }
    };
    $(window).on('scroll', function() {
        showHideHeader();
    });
    showHideHeader();
    // ----- //

    //get viewport dimensions
    var viewport = function() {
        var viewport = new Object();
        viewport.width = 0;
        viewport.height = 0;
        // the more standards compliant browsers (mozilla/netscape/opera/IE7)
        //use window.innerWidth and window.innerHeight
        if (typeof window.innerWidth != 'undefined') {
            viewport.width = window.innerWidth,
                viewport.height = window.innerHeight
        } else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth !=
            'undefined' && document.documentElement.clientWidth != 0) {
            viewport.width = document.documentElement.clientWidth,
                viewport.height = document.documentElement.clientHeight
        } else {
            viewport.width = document.getElementsByTagName('body')[0].clientWidth,
                viewport.height = document.getElementsByTagName('body')[0].clientHeight
        }
        return viewport;
    };


}).call()
