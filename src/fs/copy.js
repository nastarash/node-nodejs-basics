import { copyFile, readdir, access, constants, mkdir } from "fs";

const FILE_PATH = "src/fs/files";
const FILE_PATH_COPY = "src/fs/filesCopy";

const errCallback = (err) => {
  if (err) {
    throw new Error("FS operation failed");
  }
};

const copy = async () => {
  access(FILE_PATH_COPY, constants.F_OK, (err) => {
    if (!err) {
        throw new Error("FS operation failed");
    } else {
      mkdir(FILE_PATH_COPY, (err) => {
        errCallback(err);
        readdir(FILE_PATH, (err, files) => {
          files.forEach((file) =>
            copyFile(
              `${FILE_PATH}/${file}`,
              `${FILE_PATH_COPY}/${file}`,
              (err) => errCallback(err)
            )
          );
        });
      });
      console.log("Directory copied successfully");
    }
  });
};

await copy();
