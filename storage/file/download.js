const storage = require('../../auth');
var fs = require('fs');
var util = require('util');
var path = require('path');

let bucket = storage.bucket('islington_church');

let filename = process.argv[2] || '/Users/rossz/workspace/ibc_chinese/tmp/170701-Memory-Verse-July-2017-fb-web.fw_.png';
let basename = path.basename(filename);
let remoteFile = bucket.file(basename);

// remoteFile.download({
//   destination: localFilename
// }, function(err) {
//     if (err) {
//         console.log(err.errors);
//     }
// });


remoteFile.createReadStream()
  .on('error', function(res) {
    // console.log(util.inspect(res, {showHidden: false, depth: 1}));
    console.log(res.message);
  })
  .on('response', function(response) {
    // Server connected and responded with the specified status and headers.
    console.log("--- response ---");
   })

// Write stream method 1: It will still create an empty file even if error happens

  .pipe(fs.createWriteStream(filename));

// Write stream method 2: No file will be created in case of error

// let writeStream;
  // .on('end', function() {
  //   console.log("--- end ---");
  //   writeStream.end();
  //   // The file is fully downloaded.
  // })
  // .on('data', (data) => {
  //   if (!writeStream) {
  //       writeStream = fs.createWriteStream(filename);
  //   }
  //   writeStream.write(data);
  // })

