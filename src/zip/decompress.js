import { createReadStream, createWriteStream } from "fs";
import { createUnzip } from "zlib";
import { pipeline } from "stream";

const FILE_PATH = "src/zip/files/fileToCompress.txt";
const FILE_PATH_ARCHIVE = "src/zip/files/archive.gz";

const gzip = createUnzip();
const source = createReadStream(FILE_PATH_ARCHIVE);
const destination = createWriteStream(FILE_PATH);

const decompress = async () => {
  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
};

await decompress();
