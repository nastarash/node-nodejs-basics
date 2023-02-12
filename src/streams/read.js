import { createReadStream } from "fs";

const FILE_PATH = "src/streams/files/fileToRead.txt";
const read = async () => {
  const readStream = createReadStream(FILE_PATH);
  readStream.on("data", (data) => process.stdout.write(data));
};

await read();
