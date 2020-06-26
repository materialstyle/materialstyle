import {getAccentColor, getPrimaryColor, getElementsToBeRendered} from '../js/util.js';

function changeLabelColorAndPosition(element) {
    let contentLength = $(element).val().length;

    if ($(element).is('div')) {
        contentLength = $(element).html().length;
    }

    if (contentLength > 0) {
        $(element).parent('div').find('.floating-label').removeClass('floating-label').addClass('floating-label-floating');
        $(element).parent('div').find('.floating-label, .static-label, .floating-label-floating').css('color', getAccentColor(element));
    } else {
        $(element).parent('div').find('.floating-label-floating').addClass('floating-label').removeClass('floating-label-floating');
        $(element).parent('div').find('.floating-label, .static-label, .floating-label-floating').css('color', getPrimaryColor(element));
    }
};

function changeTextFieldColor(field) {
    $(field).css(
        'background-image',
        'linear-gradient(' + getAccentColor(field) + ', ' + getAccentColor(field) + '), ' +
        'linear-gradient(' + getPrimaryColor(field) + ', ' + getPrimaryColor(field) + ')'
    );
};

function changeOutlineTextFieldColor(field) {
    $(field).css('border-color', getPrimaryColor(field));
};

function initTextFields(parent) {
    let msTextFields = $('.ms-text-field > .form-control').filter(function () {
        return getElementsToBeRendered(this, parent);
    });

    let msTextFieldsOutline = $('.ms-text-field-outline > .form-control').filter(function () {
        return getElementsToBeRendered(this, parent);
    });

    /** Text fields */
    if (msTextFields.length) {
        msTextFields.each(function () {
            $(this).addClass('ms-rendered');
            changeTextFieldColor(this);
            changeLabelColorAndPosition(this);
            $(this).parent('.ms-text-field').css('visibility', 'visible');
        });

        msTextFields.focus(function () {
            changeLabelColorAndPosition(this);
            $(this).prev('.floating-label').addClass('floating-label-floating').removeClass('floating-label');
            $(this).prev('.floating-label-floating, .static-label').css('color', getAccentColor(this));
            $(this).prev('.floating-label-floating').css({
                'transform': 'translate(0, 12px)'
            });
        });

        msTextFields.focusout(function () {
            changeLabelColorAndPosition(this);

            if ($(this).val().length === 0) {
                $(this).prev('.floating-label-floating').addClass('floating-label').removeClass('floating-label-floating');
            }

            var translateX = $(this).prev('.floating-label').data('translatex');
            if (undefined == translateX) {
                translateX = 0;
            }

            $(this).prev('.floating-label').css({
                'transform': 'translate(' + translateX + 'px, 30px)'
            });
        });
    }

    /** Outline text fields */
    if (msTextFieldsOutline.length) {
        msTextFieldsOutline.each(function () {
            $(this).addClass('ms-rendered');
            changeOutlineTextFieldColor(this);
            changeLabelColorAndPosition(this);
            $(this).prev('.static-label, .floating-label-floating')
                .css({
                    'transform': 'translate(9px, 12px)',
                    'padding-left': '5px',
                    'padding-right': '5px'
                });
            $(this).prev('.floating-label')
                .css({
                    'transform': 'translate(9px, 30px)',
                    'padding-left': '5px',
                    'padding-right': '5px'
                });

            $(this).parent('.ms-text-field-outline').css('visibility', 'visible');
        });

        msTextFieldsOutline.focus(function () {
            changeLabelColorAndPosition(this);
            $(this).prev('.floating-label').addClass('floating-label-floating').removeClass('floating-label');
            $(this).prev('.floating-label-floating, .static-label').css('color', getAccentColor(this));
            $(this).prev('.floating-label-floating').css({
                'transform': 'translate(9px, 12px)'
            });
            $(this).css({
                'border-color': getAccentColor(this),
                '-webkit-box-shadow': 'inset 0 0 1px 1px ' + getAccentColor(this),
                'box-shadow': 'inset 0 0 1px 1px ' + getAccentColor(this)
            });
        });

        msTextFieldsOutline.focusout(function () {
            changeLabelColorAndPosition(this);
            $(this).css({
                'border-color': getPrimaryColor(this),
                '-webkit-box-shadow': 'none',
                'box-shadow': 'none'
            });

            if ($(this).val().length === 0) {
                $(this).prev('.floating-label-floating').addClass('floating-label').removeClass('floating-label-floating');
            }

            var translateX = $(this).prev('.floating-label').data('translatex');
            if (undefined == translateX) {
                translateX = 9;
            }

            $(this).prev('.floating-label').css({
                'transform': 'translate(' + translateX + 'px, 30px)'
            });

        });
    }

    $('.text-field-with-icon > .form-control').each(function () {
        $(this).removeClass('ms-rendered');
    });
};

function initInputGroups(parent) {
    let inputGroups = $('.text-field-with-icon > .form-control').filter(function () {
        return getElementsToBeRendered(this, parent);
    });

    if (inputGroups.length) {
        inputGroups.each(function () {
            $(this).addClass('ms-rendered');
            var prepend = $(this).parent('.text-field-with-icon').find('.icon-left');
            var append = $(this).parent('.text-field-with-icon').find('.icon-right');

            var field = $(this);
            var fieldOutline = $(this);

            var paddingLeft = 0;
            var paddingRight = 0;

            if (prepend.length) {
                paddingLeft += prepend.innerWidth();
            }

            if (append.length) {
                paddingRight += append.innerWidth();
            }

            if (field.length) {

                if (0 !== paddingLeft) {
                    field.css({
                        'padding-left': paddingLeft + 'px'
                    });

                    var floatingLabel = field.parent('.ms-text-field').find('.floating-label');
                    floatingLabel.css({
                        'transform': 'translate(' + paddingLeft + 'px, 30px)'
                    });

                    field.prev('.floating-label-floating, .floating-label').attr('data-translatex', paddingLeft);
                }

                if (0 !== paddingRight) {
                    field.css({
                        'padding-right': paddingRight + 'px'
                    });
                }
            }

            if (fieldOutline.length) {

                if (0 !== paddingLeft) {
                    fieldOutline.css({
                        'padding-left': paddingLeft + 'px'
                    });

                    var floatingLabel = fieldOutline.parent('.ms-text-field-outline').find('.floating-label');
                    floatingLabel.css({
                        'transform': 'translate(' + paddingLeft + 'px, 30px)'
                    });

                    fieldOutline.prev('.floating-label-floating, .floating-label').attr('data-translatex', paddingLeft);
                }

                if (0 !== paddingRight) {
                    fieldOutline.css({
                        'padding-right': paddingRight + 'px'
                    });
                }
            }
        });
    }
}

$(function () {
    initTextFields();
    initInputGroups();
});
