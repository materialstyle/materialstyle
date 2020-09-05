/**
 * --------------------------------------------------------------------------
 * Material Style (v2.0.0): drawer.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

function openNav() {
    let msShade = $('#ms-shade');

    if (msShade.length) {
        msShade.show();
    } else {
        let div = $('<div />').appendTo('body');
        div.attr('id', 'ms-shade');
    }
    $('.drawer').css('left', '0');
};

function closeNav() {
    if (!$('.drawer').hasClass('--visible')) {
        $('.drawer').css('left', '-350px');
        setTimeout(function () {
            $('#ms-shade').hide();
        }, 400);
    }
};

function changeSideNavClass() {
    if ($(window).innerWidth() < 1281) {
        $('.drawer.--visible').addClass('--switched')
            .removeClass('--visible')
            .css({'left': '-350px'});

        setTimeout(function () {
            $('#ms-shade').hide();
        }, 400);

        $('.drawer-toggle').show();

        $('footer').css('margin-left', 0);
    } else {

        $('.drawer.--switched').addClass('--visible')
            .removeClass('--switched')
            .css({'left': 0});

        $('.drawer-toggle').hide();

        if ($('.drawer.--visible').hasClass('--fixed')) {
            $('footer').css('margin-left', 250);
        }
    }
};

/** Initialize Menus on the drawer */
function initMenus() {
    let navLink = $('.nav-link');

    navLink.each(function () {
        let clicker = true;

        $(this).click(function () {
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

    $(window).on('resize', function () {
        let navbarHeight = $('.navbar').innerHeight();

        if ($('aside').hasClass('--visible') || $('aside').hasClass('--switched')) {
            changeSideNavClass();
        }

        $('.drawer-brand').css('height', navbarHeight + 'px');
        $('.ms-fixed').css('top', navbarHeight + 'px');
        $('.ms-fixed').css('height', 'calc(100vh - ' + navbarHeight + 'px)');
    });

    navLink.click(function () {
        if (!$(this).hasClass('sub-menu-link')) {
            closeNav();
        }
    });

    $('.nav-close-btn').click(function () {
        closeNav();
    });
};

$(function () {
    $('.drawer-toggle').on('click', openNav);

    if ($('.drawer.--visible.--fixed').length) {
        let fixedSideNavBg = $('.drawer.--visible.--fixed')[0].className.match(/bg-[^\s]+/);

        $('.drawer.--visible.--fixed').html(
            $('.drawer.--visible.--fixed').find('.drawer-brand')[0].outerHTML
            + '<div class="ms-fixed ' + fixedSideNavBg + '">'
            + $('.drawer.--visible.--fixed').html()
            + '</div>'
        );

        $('.ms-fixed').find('.drawer-brand')[0].remove();
    }

    let navbarHeight = $('.navbar').innerHeight();

    $('.drawer-brand').css('height', navbarHeight + 'px');
    $('.ms-fixed').css('top', navbarHeight + 'px');
    $('.ms-fixed').css('height', 'calc(100vh - ' + navbarHeight + 'px)');

    $('.drawer .nav-link.active').closest('.sub-menu-container').prev('.nav-item').find('> .sub-menu-link').trigger('click');

    if ($('aside, div').hasClass('--visible')) {
        changeSideNavClass();
    }

    $(document).on('click', function (event) {
        let nav = $('.drawer');
        let toggle = $('.drawer-toggle');
        let target = $(event.target);

        if (!target.is(nav)
            && !target.is(toggle)
            && !nav.has(event.target).length
        ) {
            closeNav();
        }
    });

    initMenus();
});
