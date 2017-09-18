
const storage = require('../../auth');

let bucket = storage.bucket('rj_temp');

// Delete the bucket
bucket.delete()
  .then(() => {
    console.log(`Bucket deleted.`);
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });
