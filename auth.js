const Storage = require('@google-cloud/storage');

// Your Google Cloud Platform project ID
const projectId = 'careful-memory-156210';

// Instantiates a client
const storage = Storage({
  projectId: projectId
});

module.exports = storage;