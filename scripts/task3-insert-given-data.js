const { MongoClient } = require("mongodb");
const stats = require("../app");   // reads stats array from app.js
const uri = "mongodb://127.0.0.1:27017";

(async () => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const col = client.db("statsdb").collection("uscensus");

    const result = await col.insertMany(stats);
    console.log(`✅ Task 3: Inserted given data. Count = ${result.insertedCount}`);
  } catch (e) {
    console.error("❌ Task 3 Error:", e.message);
  } finally {
    await client.close();
  }
})();
