import crypto from "crypto";
import { readFile } from "fs";

const FILE_PATH = "src/hash/files/fileToCalculateHashFor.txt";

const calculateHash = async () => {
  readFile(FILE_PATH, (err, data) => {
    if (err) throw new Error(err);
    const fileHash = crypto
      .createHash("SHA256")
      .update(data.toString())
      .digest("hex");
    console.log(fileHash);
  });
};

await calculateHash();
