import 'bootstrap/js/dist/button';
import initRipple from '../js/ripple.js';
import { getElementsToBeRendered } from '../js/util.js';

function initFileInput(parent) {
    let fileInputWrapper = $('.ms-file-input').filter(function() {
        return getElementsToBeRendered(this, parent);
    });

    if (fileInputWrapper.length) {
        fileInputWrapper.each(function () {
            $(this).addClass('ms-rendered');
            let file = $(this).find('> input[type=file]'),
                button = $(this).find('> .btn-file'),
                input = $(this).find('> .files');

            let multipleSupport = typeof file[0].multiple !== 'undefined';
            let filename = 'No file chosen';
            input.html(filename).attr('title', filename);

            button.click(function(event) {
                event.stopImmediatePropagation();
                file.focus().click();
            });

            file.change(function () {
                var files = [], fileArr;

                if (multipleSupport) {
                    fileArr = file[0].files;
                    for (var i = 0, len = fileArr.length; i < len; i++) {
                        files.push(fileArr[i].name);
                    }
                    filename = files.join(', ');

                } else {
                    filename = file.val().split('\\').pop();
                }

                if ('' == filename) {
                    filename = 'No file chosen';
                }

                input.html(filename).attr('title', filename);
            });
        });
    }
}

$(function(){
    initRipple('.btn');
    initFileInput();
});
