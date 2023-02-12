import { access, unlink } from "fs";

const FILE_PATH = "src/fs/files/fileToRemove.txt";

const remove = async () => {
  access(FILE_PATH, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
    unlink(FILE_PATH, (err) => {
      if (err) throw new Error("FS operation failed");
      console.log("File was deleted");
    });
  });
};

await remove();
