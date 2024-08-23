//--------------------------------------- Helper Functions --------------------------------------- 

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

//--------------------------------------- End of Helper Functions --------------------------------------- 




//--------------------------------------- Destiny 2 Lore & Inventory Items ---------------------------------------

// This is working off the python file that gets the API calls from Bungie
// Still working on getting this working in JS, so I can place it all in this one file

/* This is the template for the FINAL DATA LOOK at the moment
const DataTemplate = {
  //--------------- Values inside the displayProperties object
  name: Both_Dataset[key].displayProperties.name,               // From both INVENTORY AND LORE
  description: Both_Dataset[key].displayProperties.description, // From both INVENTORY AND LORE
  hasIcon: Both_Dataset[key].displayProperties.hasIcon,         // From both INVENTORY AND LORE
  icon: Both_Dataset[key].displayProperties.icon,               // From both INVENTORY AND LORE

  //--------------- These values store the same thing (If the item is Armor / Weapon / Ship / Ghost Shell / Sparrow)
  subtitle: Lore_Dataset[key].subtitle,           // Only from LORE
  flavorText: Inventory_Dataset[key].flavorText,  // Only from INVENTORY

  hash: Both_Dataset[key].hash,                 // From both INVENTORY AND LORE
  loreHash: Inventory_Dataset[key].loreHash,    // Used just to find lore entry from inventory page -- Only from INVENTORY
  index: Lore_Dataset[key].index,               // Used for some lore book pagin help
  redacted: Both_Dataset[key].redacted,         // From both INVENTORY AND LORE
  blacklisted: Both_Dataset[key].blacklisted,   // From both INVENTORY AND LORE

  itemTypeAndTierDisplayName: Inventory_Dataset[key].itemTypeAndTierDisplayName,  // Only from INVENTORY
  imageURL: Inventory_Dataset[key].screenshot,                                    // Only from INVENTORY - (called screenshot)

  //--------------- Self added values for search and filter parameters
  isLoreBook: false,  // Only to be true when the lore entry is from a lore book (So only from the LORE DEFINITION)
  loreBookName: "",   // Only to be used when the lore entry is from a lore book (So only from the LORE DEFINITION)
  released: ""        // Used to know which season/expansion the entry is from (For both INVENTORY AND LORE)
}
*/


// hash and loreHash may be the same value every time, but it's good to have

// Dataset[key].displayProperties.icon <---- from INVENTORY DEFINITION
// This has a back up value to find which season the item is from
//
// Dataset[key].quality.displayVersionWatermarkIcons[0] <---- from INVENTORY DEFINITION
// This helps decrease the number of unknowns, but doesn't appear on every item



// All of the commented out savetoJSON functions can be safely uncommented if you want to save the progress of each step
// NOTE - if you run this file again without renaming the savetoJSON calls, it will override the old files

//---------------------------- EACH STEP MUST BE RUN SEPARATELY, ONE AT A TIME (If you are trying to use require() multiple times with the newly saved files) ---------------------------- 

//---------------------------- STEP 1 - GET DATA FROM BUNGIE API ---------------------------- 
// All of this work is done in a different file due to it needing to wait for
// network reponses from Bungie


//---------------------------- STEP 2 - EDIT DOWN THE RAW DATA ---------------------------- 
// We are going to go through the raw data and keep only select entries
// and only keep certain data from those entries


// FROM INVENTORY-DEFINITION (Don't worry about Dups yet)
const convert_Raw_Destiny_Data_Inventory_Definition = () => {
  const Dataset = require('./Raw Data from Bungie/D2_MANI_INVENT.json');
  var newData = [];

  Object.keys(Dataset).forEach(function(key) {
    if(Dataset[key].displayProperties.name === "" && Dataset[key].displayProperties.description === "") { }
    // Look for only Armor / Weapons / and Inventory Items with lore
    else if( Dataset[key].itemTypeDisplayName === "Chest Armor"
        || Dataset[key].itemTypeDisplayName === "Ghost Shell"
        || Dataset[key].itemTypeDisplayName === "Vehicle"
        || Dataset[key].itemTypeDisplayName === "Leg Armor"
        || Dataset[key].itemTypeDisplayName === "Helmet"
        || Dataset[key].itemTypeDisplayName === "Hunter Cloak"
        || Dataset[key].itemTypeDisplayName === "Warlock Bond"
        || Dataset[key].itemTypeDisplayName === "Titan Mark"
        || Dataset[key].itemTypeDisplayName === "Auto Rifle"
        || Dataset[key].itemTypeDisplayName === "Scout Rifle"
        || Dataset[key].itemTypeDisplayName === "Pulse Rifle"
        || Dataset[key].itemTypeDisplayName === "Sniper Rifle"
        || Dataset[key].itemTypeDisplayName === "Shotgun"
        || Dataset[key].itemTypeDisplayName === "Fusion Rifle"
        || Dataset[key].itemTypeDisplayName === "Trace Rifle"
        || Dataset[key].itemTypeDisplayName === "Rocket Launcher"
        || Dataset[key].itemTypeDisplayName === "Hand Cannon"
        || Dataset[key].itemTypeDisplayName === "Machine Gun"
        || Dataset[key].itemTypeDisplayName === "Linear Fusion Rifle"
        || Dataset[key].itemTypeDisplayName === "Sidearm"
        || Dataset[key].itemTypeDisplayName === "Gauntlets"
        || Dataset[key].itemTypeDisplayName === "Lore"
        || Dataset[key].itemTypeDisplayName === "Consumable"
        || Dataset[key].itemTypeDisplayName === "Ship"
        || Dataset[key].itemTypeDisplayName === "Sword"
        || Dataset[key].itemTypeDisplayName === "Grenade Launcher"
        || Dataset[key].itemTypeDisplayName === "Submachine Gun"
        || Dataset[key].itemTypeDisplayName === "Combat Bow"
        || Dataset[key].itemTypeDisplayName === "Glaive"
        || Dataset[key].itemTypeDisplayName === "Seasonal Artifact"
       ) {
      var temp = {
        name: Dataset[key].displayProperties.name,
        description: Dataset[key].displayProperties.description,
        hasIcon: Dataset[key].displayProperties.hasIcon,
        icon: "",
        subtitle: Dataset[key].subtitle,
        hash: Dataset[key].hash,
        index: "",
        loreHash: Dataset[key].loreHash,
        redacted: Dataset[key].redacted,
        blacklisted: Dataset[key].blacklisted,
        flavorText: Dataset[key].flavorText,
        itemTypeAndTierDisplayName: Dataset[key].itemTypeAndTierDisplayName,
        imageURL: "https://www.bungie.net/".concat(Dataset[key].screenshot),
        isLoreBook: true,
        loreBookName: "",
        released: ""
      }

      if(Dataset[key].displayProperties.hasIcon === true) {
        temp.icon = "https://www.bungie.net/".concat(Dataset[key].displayProperties.icon);
      }

      if(Dataset[key].screenshot !== undefined) {
        // If there is no iconWatermark - find the backup icon location
        if(Dataset[key].iconWatermark === undefined) {
          if(Dataset[key].quality !== undefined) {
            if(Dataset[key].quality.displayVersionWatermarkIcons[0] !== undefined) {
              temp.icon = "https://www.bungie.net/".concat(Dataset[key].quality.displayVersionWatermarkIcons[0])
              temp.released = findSeasonReleased(Dataset[key].quality.displayVersionWatermarkIcons[0]);
            }
          }
        }
        // If there is the iconWatermark
        else {
          temp.released = findSeasonReleased(Dataset[key].iconWatermark);
        }
      }

      if(Dataset[key].itemTypeAndTierDisplayName !== "Lore") {
        temp.isLoreBook = false;
      }
    
      newData.push(temp);
    }
  });
  // savetoJSON(newData, "D2_STEP_2_MANIFEST_INVENTORY_DATA_EDITTED.json");
  console.log("Step 2 - Manifest Inventory Data size: " + newData.length);
  return newData;
}

// FROM RAW LORE-DEFINITION DATA (Don't worry about Dups yet)
const convert_Raw_Destiny_Data_Lore_Definition = () => {
  // We are not saving any entries that have both the subtitle and description empty
  const Dataset = require('./Raw Data from Bungie/D2_MANIFEST-LORE.json');
  var newData = [];

  Object.keys(Dataset).forEach(function(key) {
    if(Dataset[key].subtitle === "" && Dataset[key].displayProperties.description === "") { }
    else {
      var temp = {
        name: Dataset[key].displayProperties.name,
        description: Dataset[key].displayProperties.description,
        hasIcon: Dataset[key].displayProperties.hasIcon,
        icon: "",
        subtitle: Dataset[key].subtitle,
        hash: Dataset[key].hash,
        index: Dataset[key].index,
        redacted: Dataset[key].redacted,
        blacklisted: Dataset[key].blacklisted,
        itemTypeAndTierDisplayName: "Lore",
        imageURL: "",
        isLoreBook: false,
        loreBookName: "",
        released: ""
      }

      if(Dataset[key].displayProperties.hasIcon === true) {
        temp.icon = "https://www.bungie.net/".concat(Dataset[key].displayProperties.icon);
      }

      if(Dataset[key].displayProperties.hasIcon === true) {
        var res = findSeasonReleasedLoreBooks(Dataset[key].displayProperties.icon);
        temp.loreBookName = res.loreBookName;
        temp.released = res.released;
        temp.imageURL = res.imageURL;
        temp.isLoreBook = res.isLoreBook;
      }

      newData.push(temp);
    }
  });
  // savetoJSON(newData, "D2_STEP_2_MANIFEST_LORE_DATA_EDITTED.json");
  console.log("Step 2 - Manifest Lore Data size: " + newData.length);
  return newData;
}

// This is the function to get the raw data
const inventoryData = convert_Raw_Destiny_Data_Inventory_Definition();
const loreData = convert_Raw_Destiny_Data_Lore_Definition();



//------------------- If there are any unknown released item, these are most likely unreleased items for later in the game's life
//------------------- Or event items for an event this season

//---------------------------- STEP 3 - REMOVE DUPS FROM THE DATA ---------------------------- 
// Specifically empty entries and weapons/armor that have defunct parts
// Don't remove items that were re-released that may contain new lore
// Ex - ALL Brave weapons have lore different from their original versions

const remove_Dups_from_Editted_Data_Inventory = (Dataset) => {
  // This will be the data file that you got as raw data from Bungie
  // const Dataset = require('./D2_STEP_1_MANIFEST_INVENTORY_DATA_EDITTED.json');

  var newData = [];

  Dataset.forEach(item => {
    var found = false;

    // Find only the dup values that have a working imageURL link
    for(let i = 0; i < Dataset.length; i++) {
      if(item.name === Dataset[i].name) {
        if(item.imageURL !== "https://www.bungie.net/undefined") {
          found = true;
          break;
        }
      }
    }

    if(found === true) {
      var temp = {
        name: item.name,
        description: item.description,
        hasIcon: item.hasIcon,
        subtitle: item.subtitle,
        hash: item.hash,
        index: item.index,
        loreHash: item.loreHash,
        redacted: item.redacted,
        blacklisted: item.blacklisted,
        icon: item.icon,
        released: item.released,

        // Data values needed from main data
        flavorText: item.flavorText,
        imageURL: item.imageURL,
        itemTypeAndTierDisplayName: item.itemTypeAndTierDisplayName,
        isLoreBook: item.isLoreBook,
        loreBookName: item.loreBookName,
      }     
      newData.push(temp);
    }
  });

  console.log("Step 3 - Manifest Inventory (Unneeded Dups Removed) Data size: " + newData.length);

  // savetoJSON(newData, "D2_STEP_3_MANIFEST_INVENTORY_DUPS_REMOVED.json");
  return newData;
}

const remove_Dups_from_Editted_Data_Lore = (Dataset) => {
  // This will be the data file that you got as raw data from Bungie
  // const Dataset = require('./D2_STEP_1_MANIFEST_LORE_DATA_EDITTED.json');

  var newData = [];

  Dataset.forEach(item => {
    var found = false;

    // Find only the dup values that have a working imageURL link
    for(let i = 0; i < Dataset.length; i++) {
      if(item.name === Dataset[i].name) {
        if(item.imageURL !== "https://www.bungie.net/undefined") {
          found = true;
          break;
        }
      }
    }

    if(found === true) {
      var temp = {
        name: item.name,
        description: item.description,
        hasIcon: item.hasIcon,
        subtitle: item.subtitle,
        hash: item.hash,
        index: item.index,
        redacted: item.redacted,
        blacklisted: item.blacklisted,
        icon: item.icon,
        released: item.released,

        // Data values needed from main data
        imageURL: item.imageURL,
        itemTypeAndTierDisplayName: item.itemTypeAndTierDisplayName,
        isLoreBook: item.isLoreBook,
        loreBookName: item.loreBookName,
      }     
      newData.push(temp);
    }
  });

  console.log("Step 3 - Manifest Lore (Unneeded Dups Removed) Data size: " + newData.length);

  // savetoJSON(newData, "D2_STEP_3_MANIFEST_LORE_DUPS_REMOVED.json");
  return newData;
}

const inventoryData_no_Dups = remove_Dups_from_Editted_Data_Inventory(inventoryData);
const loreData_no_Dups = remove_Dups_from_Editted_Data_Lore(loreData);

// --------------------------------------------- IF YOU DO NOT WANT TO MERGE THE TWO FILES, YOU CAN END HERE --------------------------------------------- 

//---------------------------- STEP 4 - CROSS ADD SOME OF THE DATA ---------------------------- 
// Specifically empty entries and weapons/armor that have multiple entries
// Don't remove items that were re-released that contained new lore
// Ex - ALL Brave weapons have lore different from their original versions
// The reason I have 'double' added data from both files is to make the merging in step 4 easier and faster. One downside from this merge is that
// some of the hashes may not turn up results on Ishtar due to the functions replacing them in this step

const add_Data_from_Lore_to_Inventory = (Lore_Dataset, Inventory_Dataset) => {

  // const Lore_Dataset = require('./D2_STEP_2_MANIFEST_LORE_DUPS_REMOVED.json');
  // const Inventory_Dataset = require('./D2_STEP_2_MANIFEST_INVENTORY_DUPS_REMOVED.json');

  var newData = [];
  Inventory_Dataset.forEach(item => {  newData.push(item) });

  // We are finding the same items from Inventory to add to Lore
  for(let i = 0; i < newData.length; i++) {
    for(let j = 0; j < Lore_Dataset.length; j++) {
      if(newData[i].name === Lore_Dataset[j].name) {
        // Values from INVENTORY to copy over to LORE
        newData[i].description = Lore_Dataset[j].description;
        newData[i].index = Lore_Dataset[j].index;
        break;
      }
    }
  }

  console.log("Step 4 - Manifest Inventory New Values Added Data size: " + newData.length);

  // savetoJSON(newData, "D2_STEP_4_MANIFEST_INVENTORY_EXTRA_DATA_ADDED.json");
  return newData;
}

const add_Data_from_Inventory_to_Lore = (Lore_Dataset, Inventory_Dataset) => {

  // const Lore_Dataset = require('./D2_STEP_2_MANIFEST_LORE_DUPS_REMOVED.json');
  // const Inventory_Dataset = require('./D2_STEP_2_MANIFEST_INVENTORY_DUPS_REMOVED.json');

  var newData = [];
  Lore_Dataset.forEach(item => {  newData.push(item) });

  // We are finding the same items from Inventory to add to Lore
  for(let i = 0; i < newData.length; i++) {
    for(let j = 0; j < Inventory_Dataset.length; j++) {
      if(newData[i].name === Inventory_Dataset[j].name) {
        // Values from INVENTORY to copy over to LORE
        newData[i].released = Inventory_Dataset[j].released;
        newData[i].imageURL = Inventory_Dataset[j].imageURL;
        newData[i].itemTypeAndTierDisplayName = Inventory_Dataset[j].itemTypeAndTierDisplayName;
        newData[i].icon = Inventory_Dataset[j].icon;
        newData[i].hasIcon = Inventory_Dataset[j].hasIcon;
        break;
      }
    }
  }

  console.log("Step 4 - Manifest Lore New Values Added Data size: " + newData.length);

  // savetoJSON(newData, "D2_STEP_4_MANIFEST_LORE_EXTRA_DATA_ADDED.json");
  return newData;
}

const loreDataFinal = add_Data_from_Inventory_to_Lore(loreData_no_Dups, inventoryData_no_Dups);
const inventoryDataFinal = add_Data_from_Lore_to_Inventory(loreData_no_Dups, inventoryData_no_Dups);
// savetoJSON(loreDataFinal, "D2_LORE_FINAL.json");
// savetoJSON(inventoryDataFinal, "D2_INVENTORY_FINAL.json");

// Some entries don't have loreHash, place the hash from LORE into that slot to make sure it's there


//---------------------------- STEP 5 - MERGE DATA INTO ONE FILE ---------------------------- 
// Get all the data from both files (no Dups) and place it into one file


const merge_Inventory_into_Lore = (Lore_Dataset, Inventory_Dataset) => {

  // const Lore_Dataset = require('./D2_STEP_3_MANIFEST_LORE_EXTRA_DATA_ADDED.json');
  // const Inventory_Dataset = require('./D2_STEP_2_MANIFEST_INVENTORY_DUPS_REMOVED.json');

  var newData = [];
  Lore_Dataset.forEach(item => { newData.push(item) });

  // Find all the items not in Lore, then add to array
  Inventory_Dataset.forEach(item => {  
    for(let i = 0; i < newData.length; i++) {
      if(item.name !== newData.name) {
        newData.push(item);
        break;
      }
    }
  });

  var formatted_With_Keys = {};
  for(let i = 0; i < newData.length; i++) {
    formatted_With_Keys[newData[i].hash] = newData[i];
  }

  
  var jj = 0;
  Object.keys(formatted_With_Keys).forEach(function(key) { jj++; })

  console.log("Step 5 - Merged Lore & Inventory Data size: " + newData.length);
  console.log("Step 5 - Merged Data with Formatted Key size: " + jj);

  // savetoJSON(newData, "D2_MERGED_FINAL.json");
  return formatted_With_Keys;
}

const finalData_merged = merge_Inventory_into_Lore(loreDataFinal, inventoryData_no_Dups);
savetoJSON(finalData_merged, "/final_test.json");

// IF YOU ARE TRYING TO GET THE NEW DATA FROM A NEW BUNGIE API UPDATE, MAKE SURE TO RENAME THE FILE OR YOU WILL LOSE THE OLD FILE
// AND YOU WON'T BE ABLE TO SEE WHAT WAS ADDED (Only important if you push updates to a site, makes the update samller or just want to see what is new)



// There will still be Duplicate items in this list
// But they are re-released items in different seasons


//---------------------------- FINAL OUTPUT ---------------------------- 

/* 
{
  name: "",   
  description: "", 
  hasIcon: "",       
  icon: "",    

  subtitle:"",     // Only from LORE
  flavorText: "",  // Only on entries from INVENTORY files

  hash: "",         
  loreHash: "",    // Only on entries from INVENTORY files (most of the time loreHash matches hash)
  index: "",
  redacted: "",
  blacklisted: "",

  itemTypeAndTierDisplayName: "",
  imageURL: "",

  isLoreBook: "", 
  loreBookName: "",
  released: ""
}
*/

// Aug 5, 2024 - There are 11 items that have the value released: "" - They are for Solstice of Heroes/Guardian Games
// This is one entries Commemortive Steed (371288281) that is not on Ishtar, no info to show why


//---------------------------- STEP 6 - CHECKING FOR NEW DATA UPLOADED BY BUNGIE ---------------------------- 
// Repeat the process when new data is uploaded to Bungie
// We will be checking our old data with new data we pulled by running the previous steps again when new items
// may have been added to the game

// THIS WILL FIND ANY ENTRIES IN YOUR OLD DATA YOU HAVE DELETED

const checkforNewEntries = (newDataset) => {

  const oldDataset = require('./Finalized Data/D2_MERGED_FINAL.json');
  let i = 0;

  var newEntries = [];

  Object.keys(newDataset).forEach(function(key) {
    
    if(!oldDataset[key]) {
      newEntries.push(newDataset[key]);
      i++;
    }
  });

  console.log("Step 6 - Number of New Entries after Bungie Update: " + i);

  return newEntries;
}

const newUpdateData = checkforNewEntries(finalData_merged);
savetoJSON(newUpdateData, "./NEW_ENTRIES_ONLY.json");
