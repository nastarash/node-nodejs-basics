import { writeFile } from "fs";

const FILE_PATH = "src/fs/files/fresh.txt";

const create = async () => {
  writeFile(FILE_PATH, "I am fresh and young", { flag: "wx" },  (err) => {
    if (err) {
       throw new Error('FS operation failed') ;
    }
    console.log("The file was saved!");
  });
};

await create();
