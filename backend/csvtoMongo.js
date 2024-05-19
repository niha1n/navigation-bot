const fs = require('fs');
const csvParser = require('csv-parser');
const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb+srv://nihaln:nihal132@staffdirectory.700rrjo.mongodb.net/';

// Database Name
const dbName = 'mbcetData';

// Collection Name
const collectionName = 'info';

async function insertCSVData(csvFilePath) {
    let client;
    try {
        client = new MongoClient(uri);
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        await new Promise((resolve, reject) => {
            const insertionPromises = [];

            fs.createReadStream(csvFilePath)
                .pipe(csvParser())
                .on('data', (row) => {
                    insertionPromises.push(collection.insertOne(row));
                })
                .on('end', async () => {
                    try {
                        await Promise.all(insertionPromises);
                        console.log('CSV data inserted into MongoDB successfully.');
                        resolve();
                    } catch (err) {
                        reject(err);
                    } finally {
                        await client.close();
                    }
                })
                .on('error', (err) => {
                    reject(err);
                });
        });
    } catch (err) {
        console.error('Error inserting CSV data into MongoDB:', err);
    } finally {
        if (client) {
            await client.close();
        }
    }
}

insertCSVData('D:/main project/csv/newData.csv');
