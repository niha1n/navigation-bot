const fs = require('fs');
const path = require('path');
const fsExtra = require('fs-extra');


function modifyFolder(inputPath, inputName) {
    // Rename .html file
    const htmlFilePath = path.join(inputPath, 'index.html');
    const newHtmlFileName = `${inputName}.html`;
    fs.renameSync(htmlFilePath, path.join(inputPath, newHtmlFileName));

    // Rename data.js file
    const dataJsFilePath = path.join(inputPath, 'data.js');
    const newDataJsFileName = `${inputName}Data.js`;
    fs.renameSync(dataJsFilePath, path.join(inputPath, newDataJsFileName));

    // Rename 'tiles' folder
    const tilesFolderPath = path.join(inputPath, 'tiles');
    const newTilesFolderName = `${inputName}`;
    fs.renameSync(tilesFolderPath, path.join(inputPath, newTilesFolderName));

   // Read and modify .html file
   let htmlContent = fs.readFileSync(path.join(inputPath, newHtmlFileName), 'utf8');
   const scriptBlock = `\n<script>\n var customUrlPrefix = "tiles/${inputName}";\n</script>`;
   const newDataJsScript = `\n<script src="./data/${inputName}Data.js"></script>`;
   htmlContent = htmlContent.replace('<script src="data.js"></script>', newDataJsScript);
   htmlContent = htmlContent.split('\n');
   htmlContent.splice(9, 0, scriptBlock);
   htmlContent = htmlContent.join('\n');
   fs.writeFileSync(path.join(inputPath, newHtmlFileName), htmlContent, 'utf8');

   // Relocate files to destination directory
   const destinationHtmlFilePath = path.join(destinationDirectory, newHtmlFileName);
   const destinationDataJsFilePath = path.join(destinationDirectory, 'data', newDataJsFileName);
   const destinationTilesFolderPath = path.join(destinationDirectory, 'tiles', newTilesFolderName);

   fsExtra.moveSync(path.join(inputPath, newHtmlFileName), destinationHtmlFilePath);
   fsExtra.moveSync(path.join(inputPath, newDataJsFileName), destinationDataJsFilePath);
   fsExtra.moveSync(path.join(inputPath, newTilesFolderName), destinationTilesFolderPath);

   const foldersToDelete = ['img', 'vendor'];
    const filesToDelete = ['index.js', 'style.css'];

    foldersToDelete.forEach(folder => {
        const folderPathToDelete = path.join(inputPath, folder);
        if (fs.existsSync(folderPathToDelete)) {
            fsExtra.removeSync(folderPathToDelete);
            console.log(`Deleted folder: ${folder}`);
        }
    });

    filesToDelete.forEach(file => {
        const filePathToDelete = path.join(inputPath, file);
        if (fs.existsSync(filePathToDelete)) {
            fs.unlinkSync(filePathToDelete);
            console.log(`Deleted file: ${file}`);
        }
    });

   console.log('Folder modified and relocated successfully!');
}

// Example usage
const folderPath = 'D:/main project/pano/kblock/app-files';
const destinationDirectory = 'D:/main project/ElectronGUI/navbot/src/renderer/pano';
const newName = 'viceprincipal';
modifyFolder(folderPath, newName);


