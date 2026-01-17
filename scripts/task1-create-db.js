const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";

(async () => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db("statsdb");

    // DB is created after first write
    await db.collection("_init").insertOne({ createdAt: new Date() });

    console.log("✅ Task 1: Database 'statsdb' created.");
  } catch (e) {
    console.error("❌ Task 1 Error:", e.message);
  } finally {
    await client.close();
  }
})();
