const fs = require('fs');
const path = require('path');


let directoryPath = __dirname;  //Change your directory path here

console.log("Directory:", directoryPath);

// Read the directory contents
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.error(`Unable to scan directory: ${err.message}`);
    }
    console.log(files)



    files.forEach(element => {
        let sourcePath = path.join(directoryPath, element)
        if (sourcePath == __filename) {
            console.log('main skipped')
        }

        else if (!fs.statSync(sourcePath).isFile()) {
            console.log('Its a folder')
        }

        else {
            console.log(path.extname(element));

            console.log("source path - " + sourcePath)

            // let filePath = path.resolve(path.join(__dirname, element))
            // console.log("filePath - " + filePath)
            let fileName = `${path.extname(element)}Files`.slice(1)
            let newFolder = `${directoryPath}/${fileName}`
            fs.mkdirSync(`${newFolder}`, { recursive: true })
            console.log(`folder created sucessfully - ${newFolder}`)



            let destPath = path.join(newFolder, `${element}`)
            fs.renameSync(sourcePath, destPath);
            console.log('file moved successfully')

        }

    });


});
