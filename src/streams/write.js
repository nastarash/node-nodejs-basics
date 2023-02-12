import { createWriteStream } from "fs";

const FILE_PATH = "src/streams/files/fileToWrite.txt";

const write = async () => {
  process.stdin.on("data", async (data) => {
    const ws = createWriteStream(FILE_PATH);
    ws.write(data);
  });
};

await write();
