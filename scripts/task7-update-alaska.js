const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";

(async () => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const col = client.db("statsdb").collection("uscensus");

    const result = await col.updateMany(
      { state: "AK" },
      { $set: { income: "38910", age: "46" } }
    );

    console.log(`✅ Task 7: Updated AK records. Matched=${result.matchedCount}, Modified=${result.modifiedCount}`);
  } catch (e) {
    console.error("❌ Task 7 Error:", e.message);
  } finally {
    await client.close();
  }
})();
