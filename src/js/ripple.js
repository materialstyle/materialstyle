import $ from "jquery";
import {getElementsToBeRendered} from "../js/util.js";

const initRipple = (component, parent) => {
    let rippleElement = $(component).filter(function () {
        return getElementsToBeRendered(this, parent);
    });

    if (rippleElement.length) {
        $(rippleElement).on("mousedown", function (e) {
            $(this).addClass("ms-rendered");
            let rippleElement = $(this);

            /** create .ink element if it doesn't exist */
            if (rippleElement.find(".ink").length == 0) {
                rippleElement.append("<span class='ink'></span>");
            }

            let ink = rippleElement.find(".ink");

            /** prevent quick double clicks */
            ink.removeClass("animate");

            /** set .ink diameter */
            if (!ink.height() && !ink.width()) {
                let d = Math.max(
                    rippleElement.outerWidth(),
                    rippleElement.outerHeight()
                );
                ink.css({height: d, width: d});
            }

            /** get click coordinates */
            let x = e.pageX - rippleElement.offset().left - ink.width() / 2;
            let y = e.pageY - rippleElement.offset().top - ink.height() / 2;

            /** set .ink position and add class .animate */
            ink
                .css({
                    top: y + "px",
                    left: x + "px"
                })
                .removeClass('stop-animate')
                .data('mousedown', 'true')
                .data('animationstate', 'running')
                .addClass("animate");

            $(this).find('.animate').on('animationend webkitAnimationEnd', function () {
                if ('false' == $(this).data('mousedown')) {
                    $(this).removeClass('animate');
                } else {
                    $(this).data('animationstate', 'stopped');
                }
            });
        });

        $(rippleElement).on("mouseup", function (e) {
            $(this).find('.animate').data('mousedown', 'false');

            if ('stopped' == $(this).find('.animate').data('animationstate')) {
                $(this).find('.animate').removeClass('animate');
            }
        });

        $(rippleElement).on("mousemove", function (e) {
            $(this).find('.animate').data('mousedown', 'false');

            if ('stopped' == $(this).find('.animate').data('animationstate')) {
                $(this).find('.animate').removeClass('animate');
            }
        });
    }
};

export default initRipple;
