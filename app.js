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
//       `<h1>Error 404</h1><br><h2>Page Not Found</h2><br><a href="/">Home Page</a>`
//     );
//     res.end();
//   }
// });

// server.listen(5000);

// const _ = require("lodash");

// const items = [1, 2, 3, [[4, 3, 4], 6, 23]];

// const newItems = _.flattenDeep(items);
// console.log(newItems);


