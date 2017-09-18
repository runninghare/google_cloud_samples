
const storage = require('../../auth');

let bucket = storage.bucket('islington_church');

bucket.getFiles(function(err, files) {
  if (!err) {
    // files is an array of File objects.
    console.log(files)
  }
});  
