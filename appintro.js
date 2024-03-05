// const amount = 9;
// if (amount < 10) {
//   console.log("small number");
// } else {
//   console.log("large number");
// }

// Globals

// console.log(__dirname);
// console.log(__filename);
// console.log(require);
// console.log(module);
// console.log(process);

// i = 10;
// setInterval(() => {
//   console.log(i--);
// }, 1000);

// setTimeout(() => {
//   console.log("Happy New Year!");
// }, 10000);

// Modules + require

// const sayhi = require("./module1");

// sayhi("Prateek");
// sayhi("nitin");
// sayhi("hemant");

// const secret = "Super Secret";

// const data = require("./module1");
// console.log(data);

// console.log(data.a);

// OS module
// const os = require("os");

// const user = os.userInfo();
// console.log(user);

// system uptinme in sec

// console.log(`The system uptime is ${os.uptime()} seconds`)

// const currentOS = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// };

// console.log(currentOS);

// const path = require("path");

// console.log(path.sep);

// const filepath = path.join("module1", "demo", "test.txt");
// console.log(filepath);
// const base = path.basename(filepath);
// console.log(base);

// const absolute = path.resolve(__dirname, filepath);
// console.log(absolute);

// const { readFileSync, writeFileSync } = require("fs");

// const first = readFileSync("./module1/first.txt", "utf8");
// const second = readFileSync("./module1/second.txt", "utf8");

// console.log(first + "\n" + second);

// writeFileSync("./module1/third.txt", "Hello, this is Third text file", {
//   flag: "a",
// });
// writeFileSync("./module1/forth.txt", "Hello, this is Forth text file", {
//   flag: "a",
// });

// const { readFile, writeFile } = require("fs");

// console.log("Start");

// readFile("./module1/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = result;
//   readFile("./module1/second.txt", "utf8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = result;
//     writeFile(
//       "./module1/resultant.txt",
//       `This is result: ${first}, ${second}.`,
//       "utf8",
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log(result); // no returns
//         console.log("done");
//       }
//     );
//   });
// });

// console.log("Starting next task");

// HTTP

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("Welcome to our home page.");
//     res.end();
//   } else if (req.url === "/about") {
//     res.write("Its LingoVerse, A language Learning platform.");
//     res.end();
//   } else {
//     res.write(
//       `<h1>Error 404</h1><br><h2>Page Not Found</h2><br>HeadBack To <a href="/">Home Page</a>`
//     );
//     res.end();
//   }
// });

// server.listen(5000);

// const _ = require("lodash");

// const items = [1, 2, 3, [[4, 3, 4], 6, 23]];

// const newItems = _.flattenDeep(items);
// console.log(newItems);
// console.log("hello Buddy");

// let i = 0;
// setInterval(() => {
//   console.log(i++);
// }, 1000);

// setInterval(() => {
//   console.log(i++ + 100);
// }, 1000);

// console.log("first");

// setTimeout(() => {
//   console.log("second");
// }, 0);

// console.log("last");

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("request event");
//   res.write("Hello World");
//   res.end();
// });

// server.listen(5000, () => {
//   console.log("Server is listeningg on port: 5000...");
// });

// const { readFile, writeFile } = require("fs").promises;

// const start = async () => {
//   try {
//     const first = await readFile("./module1/first.txt", "utf8");
//     const second = await readFile("./module1/second.txt", "utf8");
//     await writeFile(
//       "./module1/third.txt",
//       `This is third File modified:\nfirst:\n\t${first}\nSecond:\n\t${second}`
//     );
//     const third = await readFile("./module1/third.txt", "utf8");
//     await writeFile(
//       "./module1/forth.txt",
//       `This is Forth File modified:\nfirst:\n\t${first}\nSecond:\n\t${second}\nThird:\n\t${third}`
//     );
//     console.log(first);
//     console.log(second);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const readFiles = (fileName) => {
//   return new Promise((resolve, reject) => {
//     readFile(`./module1/${fileName}.txt`, "utf8", (err, result) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       if (result) {
//         resolve(result);
//       }
//     });
//   });
// };

// readFiles("first")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// Events

// const EventEmitter = require("events");

// const customEmitter = new EventEmitter();

// customEmitter.on("response", (name, id, pet) => {
//   console.log(
//     `Data Received from user name: ${name} with id: ${id} with pet: ${pet}`
//   );
// });

// customEmitter.on("response", (name, id) => {
//   console.log(`Some logic`);
// });

// customEmitter.emit("response", "john", 34, "zebra");

// example server

// const http = require("http");

// const server = http.createServer();

// server.on("request", (req, res) => {
//   res.write("Welcome");
//   console.log(req.url);
//   res.end();
// });

// server.listen(5000);

// Streams

// const { writeFileSync } = require("fs");

// for (let i = 0; i < 100000; i++) {
//   writeFileSync("./module1/big.txt", "Hello, this is Third text file\n", {
//     flag: "a",
//   });
// }

// const { createReadStream } = require("fs");

// const stream = createReadStream("./module1/big.txt", {
//   highWaterMark: 900000,
//   encoding: "utf8",
// });

// stream.on("data", (result) => {
//   console.log(result);
// });

// stream.on("error", (err) => {
//   console.log(err);
// });

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
  // const text = fs.readFileSync("./module1/big.txt", "utf8");
  // res.write(text);
  // res.end();
//   const filestream = fs.createReadStream("./module1/big.txt", "utf8");
//   filestream.on("open", () => {
//     filestream.pipe(res);
//   });
//   filestream.on("error", (err) => {
//     res.write(err);
//     res.end();
//   });
// });

// server.listen(5000);



