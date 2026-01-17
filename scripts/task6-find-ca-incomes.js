const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";

(async () => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const col = client.db("statsdb").collection("uscensus");

    const results = await col
      .find({ state: "CA" }, { projection: { _id: 0, city: 1, income: 1, state: 1 } })
      .toArray();

    console.log("✅ Task 6: Income for all CA cities:");
    console.table(results);
  } catch (e) {
    console.error("❌ Task 6 Error:", e.message);
  } finally {
    await client.close();
  }
})();
