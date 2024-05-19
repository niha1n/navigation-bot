const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 3000;

const uri = 'mongodb+srv://nihaln:nihal132@staffdirectory.700rrjo.mongodb.net/';
const dbName = 'mbcetData';
const collectionName = 'info';

app.use(cors()); // Enable CORS middleware

app.get('/faculties', async (req, res) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    const faculties = await collection.find({}).toArray();
    res.json(faculties);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal server error');
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
