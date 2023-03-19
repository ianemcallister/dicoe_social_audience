// Imports the Google Cloud client library
const {BigQuery} = require('@google-cloud/bigquery');

async function createDataset() {
  // Creates a client
  const bigqueryClient = new BigQuery();
  const datasetName = "testSet"

  // Create the dataset
  const [dataset] = await bigqueryClient.createDataset(datasetName);
  console.log(`Dataset ${dataset.id} created.`);
}
createDataset();