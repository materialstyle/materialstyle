$(function () {
    $('.ms-spinner').html(
        '<div class="animate-loader">' +
        '<svg class="circular" viewBox="25 25 50 50">' +
        '<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="4">' +
        '</svg>' +
        '</div>'
    );

    $('.indeterminate-rainbow').html('<div class="ms-bar"></div><div class="ms-bar"></div><div class="ms-bar"></div><div class="ms-bar"></div>');
});
