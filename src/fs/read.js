import { readFile } from "fs";

const FILE_PATH = "src/fs/files/fileToRead.txt";

const read = async () => {
  readFile(FILE_PATH, (err, data) => {
    if (err) throw new Error("FS operation failed");
    console.log(data.toString());
  });
};

await read();
