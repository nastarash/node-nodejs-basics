import { createReadStream, createWriteStream, unlink } from "fs";
import { createGzip } from "zlib";
import { pipeline } from "stream";

const FILE_PATH = "src/zip/files/fileToCompress.txt";
const FILE_PATH_ARCHIVE = "src/zip/files/archive.gz";

const gzip = createGzip();
const source = createReadStream(FILE_PATH);
const destination = createWriteStream(FILE_PATH_ARCHIVE);

const compress = async () => {
  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  }).on("close", () => unlink(FILE_PATH, (er) => console.log(er)));
};

await compress();
