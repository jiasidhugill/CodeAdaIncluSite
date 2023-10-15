// sets up MongoDB
const {MongoClient} = require("mongodb");

// gets data from API
async function getAPI(url) {
    var response = await fetch(url);
   
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);

    return data;
}

async function addData(client, newData) {
    const result = await client.db("WAVEFedWebsiteData").collection("FedWebsDataRT2").insertOne(newData);
    console.log(`New data added with ID ${result.insertedId}`)
}

// putting data into MongoDB database
async function main() {
    const uri = "mongodb+srv://<generateMongoDBLink>";
    const client = new MongoClient(uri);

    //formatting data for websites
    var webData = await import("./all-domains-30-days.json", {
        assert: { type: "json" },
    });
    webData = webData.default;

    var lastIndex = 0;
    var credNum = 50;
    var fedURL = "";
    var APIKey = ""; // add API key here 

    try {
        await client.connect();

        for (var i = lastIndex; i < lastIndex + credNum; i++) {
            fedURL = webData[i].domain;
            url = `https://wave.webaim.org/api/request?key=${APIKey}&url=${fedURL}&reporttype=2`;
            console.log(url);

            var newData = await getAPI(url);
            await addData(client, newData);
        }

        // // use to double-check index: 
        // console.log(webData[lastIndex - 1].domain)
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();
  
