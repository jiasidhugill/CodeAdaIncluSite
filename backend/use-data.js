// open MongoDB
// return: suggestions (for now, just pre-written text based on what's there)

// sets up MongoDB
const {MongoClient} = require("mongodb");

// find a website
async function findWebsite(client, url) {
    const result = await client.db("WAVEFedWebsiteData").collection("FedWebsDataRT2").findOne({statistics : {pageurl : url}});
    return result;
}

// identify and print errors found

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
        const result = await findWebsite(client, "cms.portal.gov")
        console.log(result);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();
