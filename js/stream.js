const fs = require('fs');

let readStream = fs.createReadStream("./docs/content1.txt", {encoding: 'utf8'});
let writeStream = fs.createWriteStream("./docs/content2.txt");
readStream.on("data", (text)=>{
  console.log(text);
  writeStream.write(text);
})

// use of pipe //
readStream.pipe(writeStream);