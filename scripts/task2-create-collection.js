const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";

(async () => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db("statsdb");

    await db.createCollection("uscensus");
    console.log("✅ Task 2: Collection 'uscensus' created.");
  } catch (e) {
    if (e.codeName === "NamespaceExists") {
      console.log("ℹ️ Task 2: Collection 'uscensus' already exists.");
    } else {
      console.error("❌ Task 2 Error:", e.message);
    }
  } finally {
    await client.close();
  }
})();
