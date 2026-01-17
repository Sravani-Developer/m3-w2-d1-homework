const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";

(async () => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const col = client.db("statsdb").collection("uscensus");

    const sorted = await col
      .find({}, { projection: { _id: 0, city: 1, zip: 1, state: 1, income: 1, age: 1 } })
      .sort({ state: 1 })   // 1 = ascending, -1 = descending
      .toArray();

    console.log("✅ Task 8: Sorted by state (ascending):");
    console.table(sorted);
  } catch (e) {
    console.error("❌ Task 8 Error:", e.message);
  } finally {
    await client.close();
  }
})();
