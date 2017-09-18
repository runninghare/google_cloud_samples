const storage = require('../../auth');
var fs = require('fs');
var util = require('util');
var path = require('path');

let bucket = storage.bucket('islington_church');

let filename = process.argv[2] || '/Users/rossz/workspace/ibc_chinese/tmp/170501-Memory-Verse-May-2017-fb-web.fw_.png'
let basename = path.basename(filename);
let remoteFile = bucket.file(basename);

fs.createReadStream(filename)
  .pipe(remoteFile.createWriteStream({public: true}))
  .on('error', function(err) {
    console.log('--- err ---');
    console.log(err.message);
  })
  .on('finish', function() {
    console.log("--- uploading finished! ---");
  });

