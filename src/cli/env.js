import * as dotenv from "dotenv";
dotenv.config();

const parseEnv = () => {
  const envVar = process.env;
  const envVariablesKeys = Object.keys(envVar);
  envVariablesKeys.map((variable) => {
    if (variable.includes("RSS"))
      console.log(`${variable}=${envVar[variable]}`);
  });
};

parseEnv();