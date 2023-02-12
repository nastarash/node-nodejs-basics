import { access, unlink, readdir } from "fs";

const FILE_PATH = "src/fs/files/";

const list = async () => {
  access(FILE_PATH, (err) => {
    if (err) throw new Error("FS operation failed");
    readdir(FILE_PATH, (err, files) => {
      if (err) throw new Error("FS operation failed");
      console.log(files);
    });
  });
};

await list();
