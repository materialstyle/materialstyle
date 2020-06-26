import {getAccentColor, getPrimaryColor, getElementsToBeRendered} from '../js/util.js';

function changeLabelColorAndPosition(element) {
    let contentLength = $(element).find('select').val().length;

    if (contentLength) {
        $(element).find('.floating-label').removeClass('floating-label').addClass('floating-label-floating');
        $(element).find('.floating-label, .static-label, .floating-label-floating').css('color', getAccentColor(element));
    } else {
        $(element).find('.floating-label-floating').addClass('floating-label').removeClass('floating-label-floating');
        $(element).find('.floating-label, .static-label, .floating-label-floating').css('color', getPrimaryColor(element));
    }
};

function changeSelectColor(field) {
    $(field).find('.select2-selection').css(
        'background-image',
        'linear-gradient(' + getAccentColor(field) + ', ' + getAccentColor(field) + '), ' +
        'linear-gradient(' + getPrimaryColor(field) + ', ' + getPrimaryColor(field) + ')'
    );
};

function changeOutlineSelectColor(field) {
    $(field).find('.select2-selection').css('border-color', getPrimaryColor(field));
};

function initSelect(parent) {
    let msSelect = $('.ms-select').filter(function () {
        return getElementsToBeRendered(this, parent);
    });

    let msSelectOutline = $('.ms-select-outline').filter(function () {
        return getElementsToBeRendered(this, parent);
    });

    if (msSelect.length) {
        msSelect.each(function () {
            initSelect2($(this).find('select'));
            changeSelectColor(this);
            changeLabelColorAndPosition(this);
            $(this).addClass('ms-rendered');
            $(this).css('visibility', 'visible');
        });
    }

    if (msSelectOutline.length) {
        msSelectOutline.each(function () {
            initSelect2Outline($(this).find('select'));
            changeOutlineSelectColor(this);
            changeLabelColorAndPosition(this);
            $(this).addClass('ms-rendered');
            $(this).css('visibility', 'visible');
        });
    }

    $('.floating-label').on('click', function () {
        let selectBox = $(this).closest('.ms-select');

        if (selectBox.length) {
            selectBox.find('.select2-selection').trigger('click');
        } else {
            selectBox = $(this).closest('.ms-select-outline');
            selectBox.find('.select2-selection').trigger('click');
        }
    });
};

function initSelect2(select) {
    if ($(select).attr('multiple')) {
        $(select).select2({
            closeOnSelect: false
        });
    } else {
        $(select).select2();
    }

    select.on("select2:open", function (e) {
        $(this).closest('.ms-select').find('.floating-label').addClass('floating-label-floating').removeClass('floating-label');
        $(this).closest('.ms-select').find('.floating-label-floating, .static-label').css('color', getAccentColor($(this).closest('.ms-select').get(0)));
    });

    select.on("select2:close", function (e) {
        if ($(this).val().length === 0) {
            $(this).closest('.ms-select').find('.floating-label-floating').addClass('floating-label').removeClass('floating-label-floating');
        }

        $(this).closest('.ms-select').find('.floating-label').css({
            'color': getPrimaryColor($(this).closest('.ms-select').get(0))
        });
    });
}

function initSelect2Outline(select) {
    if ($(select).attr('multiple')) {
        $(select).select2({
            closeOnSelect: false
        });
    } else {
        $(select).select2();
    }

    select.on("select2:open", function (e) {
        $(this).closest('.ms-select-outline').find('.floating-label').addClass('floating-label-floating').removeClass('floating-label');
        $(this).closest('.ms-select-outline').find('.floating-label-floating, .static-label').css('color', getAccentColor($(this).closest('.ms-select-outline').get(0)));

        $(this).closest('.ms-select-outline').find('.select2-selection').css({
            'border-color': getAccentColor($(this).closest('.ms-select-outline').get(0)),
            '-webkit-box-shadow': 'inset 0 0 1px 1px ' + getAccentColor($(this).closest('.ms-select-outline').get(0)),
            'box-shadow': 'inset 0 0 1px 1px ' + getAccentColor($(this).closest('.ms-select-outline').get(0))
        });
    });

    select.on("select2:close", function (e) {
        if ($(this).val().length === 0) {
            $(this).closest('.ms-select-outline').find('.floating-label-floating').addClass('floating-label').removeClass('floating-label-floating');
        }

        $(this).closest('.ms-select-outline').find('.floating-label').css({
            'color': getPrimaryColor($(this).closest('.ms-select-outline').get(0))
        });

        $(this).closest('.ms-select-outline').find('.select2-selection').css({
            'border-color': getPrimaryColor($(this).closest('.ms-select-outline').get(0)),
            '-webkit-box-shadow': 'none',
            'box-shadow': 'none'
        });
    });
}

$(function () {
    initSelect();
});
