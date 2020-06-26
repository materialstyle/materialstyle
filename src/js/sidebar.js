function openNav() {
    let msShade = $('#ms-shade');

    if (msShade.length) {
        msShade.show();
    } else {
        let div = $('<div />').appendTo('body');
        div.attr('id', 'ms-shade');
    }
    $('.ms-sidebar').css('left', '0');
};

function closeNav() {
    if (!$('.ms-sidebar').hasClass('--visible')) {
        $('.ms-sidebar').css('left', '-350px');
        setTimeout(function(){
            $('#ms-shade').hide();
        }, 400);
    }
};

function changeSideNavClass() {
    if ($(window).innerWidth() < 1281) {
        $('.ms-sidebar.--visible').addClass('--switched')
            .removeClass('--visible')
            .css({ 'left': '-350px' });

        $('.ms-sidebar-toggle').show();

        $('footer').css('margin-left', 0);
    } else {

        $('.ms-sidebar.--switched').addClass('--visible')
            .removeClass('--switched')
            .css({ 'left': 0 });

        $('.ms-sidebar-toggle').hide();

        if ($('.ms-sidebar.--visible').hasClass('--fixed')) {
            $('footer').css('margin-left', 250);
        }
    }
};

/** Initialize Menus on the sidebar */
function initMenus() {
    let navLink = $('.nav-link');

    navLink.each(function() {
        let clicker = true;

        $(this).click(function() {
            let subMenu = $(this).parent().next('.sub-menu-container').find('.sub-menu');
            let subMenuHeight = subMenu.outerHeight();

            if (clicker) {
                $(subMenu).css('margin-top', '0');
                clicker = false;

                if ($(this).hasClass('sub-menu-link')) {
                    $(this).find('.material-icons').html('keyboard_arrow_down');
                }
            } else if (!clicker) {
                $(subMenu).css('margin-top', '-' + subMenuHeight + 'px');
                clicker = true;

                if ($(this).hasClass('sub-menu-link')) {
                    $(this).find('.material-icons').html('keyboard_arrow_right');
                }
            }
        })
    });

    $(window).on('resize', function() {
        if ($('aside').hasClass('--visible') || $('aside').hasClass('--switched')) {
            changeSideNavClass();
        }
        $('.ms-root').css('margin-top', $('.fixed-top').innerHeight());
        $('.ms-sidebar').css('min-height', 'calc(100vh - ' + $('.fixed-top').innerHeight() + 'px)');
    });

    navLink.click(function() {
        if (!$(this).hasClass('sub-menu-link')) {
            closeNav();
        }
    });

    $('.nav-close-btn').click(function() {
        closeNav();
    });
};