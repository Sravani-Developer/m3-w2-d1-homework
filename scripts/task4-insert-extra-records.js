const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";

const extra = [
  { city: "Pacoima", zip: "91331", state: "CA", income: "60360", age: "33" },
  { city: "Ketchikan", zip: "99950", state: "AK", income: "00000", age: "00" }
];

(async () => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const col = client.db("statsdb").collection("uscensus");

    const result = await col.insertMany(extra);
    console.log(`✅ Task 4: Inserted extra records. Count = ${result.insertedCount}`);
  } catch (e) {
    console.error("❌ Task 4 Error:", e.message);
  } finally {
    await client.close();
  }
})();
