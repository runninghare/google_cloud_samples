
const storage = require('../../auth');

// The name for the new bucket
const bucketName = 'rj_temp';

// Creates the new bucket
storage.createBucket(bucketName, {
  location: 'AUSTRALIA-SOUTHEAST1',
  regional: true
})
  .then(() => {
    console.log(`Bucket ${bucketName} created.`);
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });
