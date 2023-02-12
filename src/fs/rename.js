import * as fs from "fs";

const FILE_PATH = "src/fs/files/wrongFilename.txt";
const NEW_FILE_PATH = "src/fs/files/properFilename.md";

const rename = async () => {
  fs.access(NEW_FILE_PATH, (err) => {
    if (!err) {
      throw new Error("FS operation failed");
    }
    fs.rename(FILE_PATH, NEW_FILE_PATH, (err) => {
      if (err) {
        throw new Error("FS operation failed");
      }
      console.log("File succesfully renamed")
    });
  });
};

await rename();
