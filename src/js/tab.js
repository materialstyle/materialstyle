import 'bootstrap/js/dist/tab';
import initRipple from '../js/ripple.js';
import {getElementsToBeRendered} from '../js/util.js';

function initTabs(parent) {
    let msTabs = $('.nav-tabs').filter(function () {
        return getElementsToBeRendered(this, parent);
    });

    if (msTabs.length) {

        msTabs.find('.nav-item').append('<span class="active-indicator"></span>');

        msTabs.each(function () {
            $(this).addClass('ms-rendered');

            $(this).find('.nav-link.active').closest('.nav-item').find('.active-indicator').addClass('ms-tab-active');

            var leftValue = 0;

            if ($(this).find('.ms-tab-active').length) {
                leftValue = $(this).find('.ms-tab-active').closest('.nav-item').position().left;
            }

            var count = 1;
            $(this).find('.active-indicator').each(function () {
                $(this).data('indicatorPosition', count++);
                $(this).css({
                    'transform': 'translateX(0px) scale(1, 1)'
                });

            });

            $(this).data('leftValue', leftValue);

            $(this).css('visibility', 'visible');
        });
    }

    $('.nav-tabs .nav-item').on('mousedown', function () {
        if (!$(this).find('.ms-tab-active').length) {
            var leftValue = $(this).closest('.nav-tabs').data('leftValue');

            if ($(this).find('.active-indicator').data('indicatorPosition') > $(this).closest('.nav-tabs').find('.ms-tab-active').data('indicatorPosition')) {
                leftValue = '-' + ($(this).position().left - leftValue);
            } else {
                leftValue = leftValue - $(this).position().left;
            }

            $(this).find('.active-indicator').css({
                'transform': 'translateX(' + leftValue + 'px) scale(1, 1)',
            });
        }
    });

    $('.nav-tabs .nav-item').on('mouseup', function () {
        var leftValue = $(this).position().left;

        $(this).closest('.nav-tabs').find('.ms-tab-active').removeClass('ms-tab-active');
        $(this).find('.active-indicator').addClass('ms-tab-active').css({
            'transform': 'translateX(0px) scale(1, 1)',
        });
        $(this).closest('.nav-tabs').data('leftValue', leftValue);
    });
}

$(function () {
    initTabs();
});
