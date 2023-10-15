
const {MongoClient} = require("mongodb");

// putting data into MongoDB database
async function main() {
    const uri = "mongodb+srv://<generateMongoDBLink>";
    const client = new MongoClient(uri);

     //formatting data for websites
    const webData = await import("./all-domains-30-days.json", {
        assert: { type: "json" },
    }).default;

    try {
        await client.connect();
        const test = await client.db("WAVEFedWebsiteData").collection("FedWebsDataRT2").deleteOne({ success : "false" })
        console.log(test);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();
