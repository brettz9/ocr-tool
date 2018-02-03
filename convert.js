(function () {'use strict';

const volume = process.argv[2];
const offset = process.argv[3];
const skip = false;

const ot = require('./index'); // require('ocr-bulk');
ot.writeFile({
    start: 1,
    end: 256,
    outputPath: __dirname + '/ocr-' + volume + '.txt',
    getImagePath: function (i) {
        return 'C:\\Users\\Brett\\Documents\\images-' + volume + '\\image-' + ot.pad(i, 4) + '.jpg';
    },
    concatenater: function (text, i) {
        console.log('Finishing ' + i);
        return '\n\n{{page|' +
            (skip ? '' : (i + (offset ? parseInt(offset, 10) : 0))) +
            '}}\n\n' + text;
    },
    done: function () {
        console.log('Saved!');
    }
});

}());
