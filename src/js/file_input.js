const NAME = 'fileinput'
const VERSION = '2.0.0'
const DATA_KEY = 'ms.fileinput'
const JQUERY_NO_CONFLICT = $.fn[NAME]

class FileInput {
    constructor(element) {
        this._element = element
        this._fileInput = element.querySelector('input[type=file]')
        this._button = element.querySelector('.btn-file')
        this._fileList = element.querySelector('.files')
        this._multipleSupport = typeof this._fileInput.multiple !== 'undefined'
    }

    static get VERSION() {
        return VERSION
    }

    static _jQueryInterface(config) {
        return this.each(function () {
            const $element = $(this)
            let data = $element.data(DATA_KEY)

            if (!data) {
                data = new FileInput(this)
                $element.data(DATA_KEY, data)

                $(data._button).on('click', function (event) {
                    event.stopImmediatePropagation();
                    data['handleButtonClick']()
                });

                $(data._fileInput).on('change', function () {
                    data['handleFileChange']()
                });
            }
        })
    }

    handleButtonClick() {
        this._fileInput.click();
    }

    handleFileChange() {
        let files = [], fileArr, filename = 'No file chosen';

        if (this._multipleSupport) {
            fileArr = this._fileInput.files;
            for (
                let i = 0, len = fileArr.length;
                i < len;
                i++
            ) {
                files.push(fileArr[i].name);
            }
            filename = files.join(', ');

        } else {
            filename = this._fileInput.val().split('\\').pop();
        }

        if ('' == filename) {
            filename = 'No file chosen';
        }

        this._fileList.innerHTML = filename;
        this._fileList.setAttribute('title', filename);
    }

}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME] = FileInput._jQueryInterface
$.fn[NAME].Constructor = FileInput
$.fn[NAME].noConflict = () => {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return FileInput._jQueryInterface
}

export default FileInput
