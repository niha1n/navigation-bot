const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

// Connection URI
const uri = 'mongodb+srv://nihaln:nihal132@staffdirectory.700rrjo.mongodb.net/';

// Database Name
const dbName = 'mbcetData';

// Collection Name
const collectionName = 'info';

// Function to fetch all documents from MongoDB and store them in data.json
async function fetchAndStoreDocuments() {
    let client;
    try {
        // Create a new MongoClient
        client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        // Connect to the MongoDB server
        await client.connect();

        // Select the database and collection
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Fetch all documents from the collection
        const documents = await collection.find({}).toArray();

        // Write the documents to data.json
        const filePath = path.join(__dirname, 'data.json');
        fs.writeFileSync(filePath, JSON.stringify(documents, null, 2));

        console.log(`All documents fetched and stored in ${filePath}`);
    } catch (err) {
        console.error('Error fetching documents from MongoDB:', err);
    } finally {
        if (client) {
            await client.close();
        }
    }
}

// Call the function
fetchAndStoreDocuments();
