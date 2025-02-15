'use strict';

const fsf = require('./helper/fileSystem');
const template = require('./helper/template');

module.exports = (options) => {

    const baseFolder = fsf.determineDestinationFolder(options);

    for(let file of options.files) {
        let absolutePath = fsf.combinePath(baseFolder, file);
        let { folderName, fileName } = fsf.analyseFilePath(absolutePath);

        if(!fsf.doesFolderExist(folderName)){
            fsf.createFolder(folderName);
        }
        fsf.createFile(absolutePath);

        template({
            absolutePath: absolutePath,
            fileName: fileName,
            template: options.template
        });
    }


};