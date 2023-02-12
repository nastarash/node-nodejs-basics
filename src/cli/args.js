const parseArgs = () => {
  process.argv.map((arg, i) => {
    const isArgHasValue = !process.argv[i + 1]?.includes("--");
    if (arg.includes("--") && isArgHasValue) {
      console.log(`${arg} is ${process.argv[i + 1]}`);
    }
  });
};

parseArgs();
