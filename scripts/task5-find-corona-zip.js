const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";

(async () => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const col = client.db("statsdb").collection("uscensus");

    const doc = await col.findOne(
      { city: "Corona", state: "NY" },
      { projection: { _id: 0, city: 1, state: 1, zip: 1 } }
    );

    if (!doc) console.log("⚠️ Task 5: Corona, NY not found.");
    else console.log(`✅ Task 5: Corona, NY zip code is ${doc.zip}`);
  } catch (e) {
    console.error("❌ Task 5 Error:", e.message);
  } finally {
    await client.close();
  }
})();
