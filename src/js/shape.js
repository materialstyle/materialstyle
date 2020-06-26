import {getElementsToBeRendered} from '../js/util.js';

function initShapes(parent) {

    let shapes = $('.ms-shape-container').filter(function() {
        return getElementsToBeRendered(this, parent);
    });

    let btnShapes = $('.ms-btn-shape-container').filter(function() {
        return getElementsToBeRendered(this, parent);
    });

    /** shapes */
    if (shapes.length) {
        shapes.each(function () {
            $(this).addClass('ms-rendered');
            let cornerBg = this.className.match(/shape-parent-bg-[^\s]+/);
            let shapeOutline = this.className.match(/shape-outline-[^\s]+/);

            let cardOutline = $(this).find('> [class*="card-outline-"]');

            if (cardOutline.length) {
                shapeOutline = cardOutline[0].className.match(/card-outline-[^\s]+/);
            }

            if (cornerBg) {
                cornerBg = cornerBg[0].replace('shape-parent-', '');
                $(this).find('> .angle-top-left').addClass(cornerBg);
                $(this).find('> .angle-top-right').addClass(cornerBg);
                $(this).find('> .angle-bottom-left').addClass(cornerBg);
                $(this).find('> .angle-bottom-right').addClass(cornerBg);
            }
            let topLeftCut = $(this).find('> .angle-top-left');
            let topRightCut = $(this).find('> .angle-top-right');
            let bottomLeftCut = $(this).find('> .angle-bottom-left');
            let bottomRightCut = $(this).find('> .angle-bottom-right');

            let topLeftWidth = 0, topRightWidth = 0, bottomLeftWidth = 0, bottomRightWidth = 0;
            if (topLeftCut.length) {
                topLeftWidth = topLeftCut.attr('class').match(/width-[^\s]+/);
                if (topLeftWidth) {
                    topLeftWidth = parseInt(topLeftWidth[0].replace('width-', ''));
                }
            }

            if (topRightCut.length) {
                topRightWidth = topRightCut.attr('class').match(/width-[^\s]+/);
                if (topRightWidth) {
                    topRightWidth = parseInt(topRightWidth[0].replace('width-', ''));
                }
            }

            if (bottomLeftCut.length) {
                bottomLeftWidth = bottomLeftCut.attr('class').match(/width-[^\s]+/);
                if (bottomLeftWidth) {
                    bottomLeftWidth = parseInt(bottomLeftWidth[0].replace('width-', ''));
                }
            }

            if (bottomRightCut.length) {
                bottomRightWidth = bottomRightCut.attr('class').match(/width-[^\s]+/);
                if (bottomRightWidth) {
                    bottomRightWidth = parseInt(bottomRightWidth[0].replace('width-', ''));
                }
            }

            $(this).find('> .angle-top-left').css({
                'top': -(topLeftWidth / 2),
                'left': -(topLeftWidth / 2),
                'width': topLeftWidth,
                'height': topLeftWidth
            });

            $(this).find('> .angle-top-right').css({
                'top': -(topRightWidth / 2),
                'right': -(topRightWidth / 2),
                'width': topRightWidth,
                'height': topRightWidth
            });

            $(this).find('> .angle-bottom-left').css({
                'bottom': -(bottomLeftWidth / 2),
                'left': -(bottomLeftWidth / 2),
                'width': bottomLeftWidth,
                'height': bottomLeftWidth
            });

            $(this).find('> .angle-bottom-right').css({
                'bottom': -(bottomRightWidth / 2),
                'right': -(bottomRightWidth / 2),
                'width': bottomRightWidth,
                'height': bottomRightWidth
            });

            if (shapeOutline) {

                if (cardOutline.length) {
                    shapeOutline = shapeOutline[0].replace('card-outline-', '');
                } else {
                    shapeOutline = shapeOutline[0].replace('shape-outline-', '');
                }

                let label = $('<label class="text-' + shapeOutline + '"></label>').hide().appendTo('body');
                shapeOutline = label.css('color');
                label.remove();

                $(this).find('> .angle-top-left, > .angle-top-right, > .angle-bottom-left, > .angle-bottom-right')
                    .css('border-bottom', '2px solid ' + shapeOutline);

            }

            $(this).css('visibility', 'visible');
        });
    }

    /** btn shapes */
    if (btnShapes.length) {
        btnShapes.each(function () {
            $(this).addClass('ms-rendered');
            let cornerBg = this.className.match(/shape-parent-bg-[^\s]+/);
            let shapeOutline;

            let btnOutline = $(this).find('> [class*="btn-outline-"]');

            if (btnOutline.length) {
                shapeOutline = btnOutline[0].className.match(/btn-outline-[^\s]+/);
            }

            if (cornerBg) {
                cornerBg = cornerBg[0].replace('shape-parent-', '');
                $(this).find('> .angle-top-left').addClass(cornerBg);
                $(this).find('> .angle-top-right').addClass(cornerBg);
                $(this).find('> .angle-bottom-left').addClass(cornerBg);
                $(this).find('> .angle-bottom-right').addClass(cornerBg);
            }

            let angleWidth = 14;

            if (shapeOutline) {
                shapeOutline = shapeOutline[0].replace('btn-outline-', '');

                let label = $('<label class="text-' + shapeOutline + '"></label>').hide().appendTo('body');
                shapeOutline = label.css('color');
                label.remove();

                $(this).find('> .angle-top-left, > .angle-top-right, > .angle-bottom-left, > .angle-bottom-right')
                    .css('border-bottom', '1px solid ' + shapeOutline);

                angleWidth = 18;
            }

            $(this).find('> .angle-top-left').css({
                'top': -(angleWidth / 2),
                'left': -(angleWidth / 2),
                'width': angleWidth,
                'height': angleWidth
            });

            $(this).find('> .angle-top-right').css({
                'top': -(angleWidth / 2),
                'right': -(angleWidth / 2),
                'width': angleWidth,
                'height': angleWidth
            });

            $(this).find('> .angle-bottom-left').css({
                'bottom': -(angleWidth / 2),
                'left': -(angleWidth / 2),
                'width': angleWidth,
                'height': angleWidth
            });

            $(this).find('> .angle-bottom-right').css({
                'bottom': -(angleWidth / 2),
                'right': -(angleWidth / 2),
                'width': angleWidth,
                'height': angleWidth
            });

            $(this).css('visibility', 'visible');
        });
    }
}

$(function () {
    initShapes();
});
