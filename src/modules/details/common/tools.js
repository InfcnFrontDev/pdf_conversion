/**
 * Created by yangkk on 2016/9/14.
 */

import config from 'common/config'

const ExtMimeTypes = {
    pdf: 'application/pdf',
    doc: 'application/msword',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    xls: 'application/vnd.ms-excel',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ppt: 'application/vnd.ms-powerpoint',
    pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    rtf: 'application/rtf',
    bmp: 'image/bmp',
    gif: 'image/gif',
    png: 'image/png',
    tif: 'image/tiff',
    tiff: 'image/tiff',
    jpe: 'image/jpeg',
    jpeg: 'image/jpeg',
    jpg: 'image/jpeg',
    txt: 'text/plain',
    xml: 'text/xml',
    html: 'text/html'
}

export const accept = function (extStr) {
    let extensions2 = [], mimeTypes2 = [];

    let exts = extStr.split(',');
    for (let n in exts) {
        let ext = exts[n];
        let mimeType = ExtMimeTypes[exts[n]];
        if (mimeType != null) {
            if (extensions2.indexOf(ext) < 0)
                extensions2.push(ext)
            if (mimeTypes2.indexOf(mimeType) < 0)
                mimeTypes2.push(mimeType)
        }
    }

    let extensions = '', mimeTypes = '';
    for (let n in extensions2) {
        if (n > 0)
            extensions += ',';
        extensions += extensions2[n];
    }
    for (let n in mimeTypes2) {
        if (n > 0)
            mimeTypes += ',';
        mimeTypes += mimeTypes2[n];
    }

    return {
        extensions, mimeTypes
    }
}

export const download = function (fileOids, isZip = false) {
    let url = config.apiPath + '/PDFApi/download?isZip=' + isZip;

    for (let i in fileOids) {
        url += '&file=' + encodeURIComponent(fileOids[i])
    }

    url += '&time=' + new Date().getTime();
    console.log(fileOids, url);
    try {
        var elemIF = document.createElement("iframe");
        elemIF.src = url;
        elemIF.style.display = "none";
        document.body.appendChild(elemIF);
    } catch (e) {
    }
}