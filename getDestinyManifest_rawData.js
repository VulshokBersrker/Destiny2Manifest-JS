

// Save the array to a JSON file
// Good for each step of organzing the Destiny 2 data, in case you want to inspect where something may have gone wrong
const savetoJSON = (data, fileName) => {
    var fs = require('fs');
    fs.writeFile(fileName, JSON.stringify(data), function(err, result) {
      if(err) {
        console.log(err);
      }
    });
}


//---------------------------- STEP 1 - GET DATA FROM BUNGIE API ---------------------------- 
// We will be getting the data from Bungie at this point
// This is used for Step 1 only, but it is needed
const API_KEY = 'YOUR-API-KEY-HERE'; // Remove API Key for release

// An async (for remote calls) function to get the Destiny 2 Manifest API Endpoint
const get_Destiny2_Manifest_Inventory = async() => {
  try {
    
    // Get the url for the data table you want to retrieve
    // In this case, the JSON formatted Destiny 2 Inventory Item Definitions
    const manifestDataURL = await fetch('https://www.bungie.net/platform/Destiny2/Manifest/', {
      method: "GET",
      headers: {"X-API-Key": API_KEY}
    }).then(response => response.json())
    .then(data => { 
      // This is the path of the data we want to get
      // Response - stores all the data paths we need for the lore
      // jsonWorldComponentPaths - the data format we are looking for
      // 'en' - the language we want
      // DestinyInventoryItemDefinition - This is the file part, what part of the game we want data of
      return data.Response.jsonWorldComponentContentPaths.en.DestinyInventoryItemDefinition;
    });

    // Now that we have the url, we can get the JSON file
    const jsonData = await fetch('https://www.bungie.net/' + manifestDataURL, {
      method: "GET",
      headers: {"X-API-Key": API_KEY}
    })
    .then(response => response.json())
    .then(data => { 
      // console.log(JSON.stringify(data));
      return JSON.stringify(data);
    });

    
    // We now have the data we need. So we can save it to a JSON file
    console.log("Step 1 - Raw Inventory Data: " + jsonData.length);
    savetoJSON(JSON.parse(jsonData), "./Raw Data from Bungie/raw_data_D2_inventory.json")

  }
  catch(e) {
    console.log("Error:  " + e);
  }
}

const get_Destiny2_Manifest_Lore = async() => {
  try {

    // Get the url for the data table you want to retrieve
    // In this case, the JSON formatted Destiny 2 Inventory Item Definitions
    const manifestDataURL = await fetch('https://www.bungie.net/platform/Destiny2/Manifest/', {
      method: "GET",
      headers: {"X-API-Key": API_KEY}
    }).then(response => response.json())
    .then(data => { 
      // This is the path of the data we want to get
      // Response - stores all the data paths we need for the lore
      // jsonWorldComponentPaths - the data format we are looking for
      // 'en' - the language we want
      // DestinyLoreDefinition - This is the file part, what part of the game we want data of
      return data.Response.jsonWorldComponentContentPaths.en.DestinyLoreDefinition;
    });

    // Now that we have the url, we can get the JSON file
    const jsonData = await fetch('https://www.bungie.net/' + manifestDataURL, {
      method: "GET",
      headers: {"X-API-Key": API_KEY}
    })
    .then(response => response.json())
    .then(data => { 
      return JSON.stringify(data);
    });

    // We now have the data we need. So we can save it to a JSON file

    console.log("Step 1 - Raw Lore Data: " + jsonData.length);
    savetoJSON(JSON.parse(jsonData), "./Raw Data from Bungie/raw_data_D2_lore.json")
  }
  catch(e) {
    console.log("Error:  " + e);
  }
}

// get_Destiny2_Manifest_Inventory();
get_Destiny2_Manifest_Lore();
