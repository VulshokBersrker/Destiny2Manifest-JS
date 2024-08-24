# Destiny 2 Manifest in Javascript
This will be a guide on how to access the Destiny 2 Manifest to get Destiny 2 Lore data

# How to get access to the Bungie API
If you will need to apply for an API Key because almost all of Bungie's API Endpoints require an API to work. This is so no hacker or troll can easily mess up the game for both the devs and players.
You can go to the registration page to apply for a key.
[https://www.bungie.net/7/en/registration](https://www.bungie.net/en/User/API)

# I have a key now. What next?
Before we can get into the fun part, let me talk about the endpoint a little bit. This is helpful if you have never made an API call before, or are new to coding.

This endpoint allows you to get all the data from the game, from lore entries to Lost Sector descriptions. Everything. So it is important to know what part of the endpoint to use. There are a lot of parts to look at. Let's say you did the call and got a good response from Bungie. Now you have an Object that will look something like this:

```
Response:{} 9 keys
    version:"226893.24.07.17.1731-2-bnet.56363"
    mobileAssetContentPath:"/common/destiny2_content...39c8cb952ff2c328496530ab75df2d30.content"
    mobileGearAssetDataBases:[] 3 items
    mobileWorldContentPaths:{} 13 keys
    jsonWorldContentPaths:{} 13 keys
    jsonWorldComponentContentPaths:{} 13 keys
    mobileClanBannerDatabasePath:"/common/destiny2_content...0bbe318c89b30e78f0a59349a8e44054.content"
    mobileGearCDN:{} 5 keys
    iconImagePyramidInfo:[] 0 items

ErrorCode:1
ThrottleSeconds:0
ErrorStatus:"Success"
Message:"Ok"
MessageData:{} 0 keys
```
That's good! But if you look further into each part, it goes further and further. Lot's of nested data. And we don't need most of it.

Bungie is very nice to use and has all the data from the game stored in a few different ways, but I like JSON so that is why we are using the jsonWorldComponentContentPaths. Looking further into that part of the Response we get:
```
jsonWorldComponentContentPaths:{} 13 keys
    en:{} 88 keys
    fr:{} 88 keys
    es:{} 88 keys
    es-mx:{} 88 keys
    de:{} 88 keys
    it:{} 88 keys
    ja:{} 88 keys
    pt-br:{} 88 keys
    ru:{} 88 keys
    pl:{} 88 keys
    ko:{} 88 keys
    zh-cht:{} 88 keys
    zh-chs:{} 88 keys
```
All the data is separated into different languages. I will be focusing on the 'en', or English part. After this, we can see the real parts we want. A list of 88 different JSON tables for different parts of the game. i didn't show all of them because that's a lot to show. But there are two we will focus on:

**DestinyLoreDefinition** and **DestinyInventoryItemDefinition**
```
    DestinyNodeStepSummaryDefinition:"/common/destiny2_conte...e8856610-ba53-4118-9d1a-375ddb5476e4.json"
    DestinyArtDyeChannelDefinition:"/common/destiny2_cont...e8856610-ba53-4118-9d1a-375ddb5476e4.json"
    ...
    DestinyGuardianRankConstantsDefinition:"/common/destiny2_cont...e8856610-ba53-4118-9d1a-375ddb5476e4.json"
    DestinyLoadoutConstantsDefinition:"/common/destiny2_cont...e8856610-ba53-4118-9d1a-375ddb5476e4.json"
    DestinyFireteamFinderConstantsDefinition:"/common/destiny2_cont...e8856610-ba53-4118-9d1a-375ddb5476e4.json"
```

### DestinyLoreDefinition
stores all the lore entries in the game for all the lore books, armor, weapons, quests, and seasonal artifacts.
### DestinyInventoryItemDefinition
stores all the data for any item that appears in your inventory. From weapons, armor, artifacts, consumables, and even ornaments.


# Step 1 - Making the first fetch call
### Once you have your API Key you can make the first call to get the lore data. We will be using basic fetches to make the calls.

Here is the basic format for a fetch call:
```
const results = await fetch('bungie url here', {
    method: "GET",
    headers: {"X-API-Key": API_KEY_HERE }
}).then(response => response.json())
  .then(data => { 
    return data;
  });
```
When we want to retrieve data from an API, we tell the fetch that our method is a 'GET'. This is also were the API Key is needed. We need to pass our API Key with the fetch, and we place it in the headers of the fetch. That way Bungie will see the key and say okay you can get the information you are looking for. That is where the "return data" part comes in. It will return the data to the variable **results** so we can use it later. The **await** part right before the fetch is important as well. If you have this fetch inside a function, you need to make the fetch **await** and the function must be an **async** function. It makes the function wait for a reply from URL before doing anything else.

Here is the first fetch call we need to make. This is just to get the url of the **DestinyInventoryItemDefinition** JSON file.
```
const manifestDataURL = await fetch('https://www.bungie.net/platform/Destiny2/Manifest/', {
      method: "GET",
      headers: {"X-API-Key": API_KEY}
    }).then(response => response.json())
    .then(data => { 
      return data.Response.jsonWorldComponentContentPaths.en.DestinyInventoryItemDefinition;
    });
```
It's very similar to the template fetch from earlier. The only different is what we are returning. If we returned just data, we would get all the extra parts we don't need. You can see how we are narrowing down to what we want if you go back and look at the explanation of what the basic Repsonse is for the endpoint.

First we are saying we only want the **Response** of the call. Then we only want the **jsonWorldComponentContentPaths**, where the lore data is kept. Next we want it to be in English to we choose '**en**'. Lastily we want the inventory data, which is why we have **DestinyInventoryItemDefinition**.

What you should get as a result is a string that looks like a partial URL. 

**'/common/destiny2_content/json/en/DestinyInventoryItemDefinition-e8856610-ba53-4118-9d1a-375ddb5476e4.json'**

This is what you are going to get for the **DestinyInventoryItemDefinition**. The numbers may change if there is an update to the game, but this is basically what you will get.

### The next step is to use this to get the actual data

Now that we have this string, we can makethe second fetch call:
```
const jsonData = await fetch('https://www.bungie.net/' + manifestDataURL, {
      method: "GET",
      headers: {"X-API-Key": API_KEY}
    })
    .then(response => response.json())
    .then(data => {
      return JSON.stringify(data);
    });
```

What we are doing here is adding the partial URL we just got and concatting (or adding to) the base Bungie URL. This will make one full URL for our fetch. Make sure the API Key is also in the header just like last time.

And the reason we are stringifying the data is because that will make all the data into a single string of data, making it easy for the fetch to close and set the data to our variable. If you want to the ouput the data to your screen at this point, like in a print statement, make sure to parse the data:
```
console.log(JSON.parse(jsonData));
or
const data_ready_to_print = JSON.parse(jsonData);
```
This is important because you can get an error or it will print the entire dataset in a very cramped way. It is also not in the correct format to do anything with. Because it is just one giant line of words before you parse it. Once the data is parsed, it transforms the single string into a full object array that you use.

```
console.log(jsonData[73015]);  ->  ' " ' // The 73015'th character in the unparsed string 
console.log(data_ready_to_print[73015]);  ->  {displayProperties: {}, subtitle:'', ....} // The entry with key value 73015
```

You can repeat this step for the **DestinyLoreDefinition** data as well. All you really need to change is the first fetch call's return from **DestinyInventoryItemDefinition** to **DestinyLoreDefinition**.

### A quick explanation of how the JSON data is formatted

If you skipped forward and are having trouble accessing the data from the JSON files, there be an easy solution. This is also helpful for later steps.

All the data is organized with "keys". Meaning you can enter in console.log(data[0]) and expect to get results. If have to use these keys to be able to find the data.
```
// DestinyInventoryItemDefinition format
{
  "1080125": {...},  <-- An Object of data for everything about "Mykel's Reverence"
  "3561203890": {...},  <-- An Object of data for everything about "Tessellation"
  "3637570176": {...},  <-- An Object of data for everything about "Eye of Sol (Adept)"
  ...
}

console.log(data[0])  <-- prints nothing because there is no entry with a key of 0
console.log(data[1080125]) <-- prints the Object for "Mykel's Reverence"
```

# Step 2 - I have all this data, do I need it all?

Good question, no.

There is A LOT of data on every entry for the **Inventory Definition** (not so much for the Lore Definition). The next step is to remove all the data you do not need for whatever you are doing. If you just want the lore, you only need to keep at max, around 12 values. Here is the breakdown of all the varaibles you _should_ keep.

```
"1080125" {
    "displayProperties": {
        "description": "",
        "name": "Mykel's Reverence",
        "icon": "/common/destiny2_content/icons/a21c38a2e55d4e1ffb1c77751e2fe580.jpg",
        "hasIcon": true
    },
    "itemTypeDisplayName": "Sidearm",
    "flavorText": "\"Pain\u2026 Fear\u2026 Sacrifice\u2026 Feed the fiend.\" \u2014Mykel, Leader of the Acolytes of Nezarec",
    "screenshot": "/common/destiny2_content/screenshots/3947966653.jpg",
    "itemTypeDisplayName": "Sidearm",
    "itemTypeAndTierDisplayName": "Legendary Sidearm",
    "loreHash": "",
    "hash": 1080125, // This is the key value for the item
    "redacted": false,
    "blacklisted": false,
}
```
The **redacted** and **blacklisted** variables you can remove if you want. It depends on what you want to keep track of. Ishtar Collective may use these values to place warnings on the entries that they may contain spoilers. They could be helpful later down the line. 
Now **loreHash** doesn't exist on every Inventory Item. But where they do, they are hash reference numbers for data in the Lore Definition data.

The best way to quickly edit down all the data is to automate what to keep and what to leave behind. The function I created to do this is quite long, so I will just reference the name of the function that is in the main file:

**function convert_Raw_Destiny_Data_Inventory_Definition()**

This function will only keep all Armor, Weapons, Consumables, Ships, Sparrows, Ghost Shells, as well as a type of inventory item called "Lore". This will exclude all perks, empty entries and others (Which make up a decent amount of the file.)

There is a separate function for the Lore Definition called **convert_Raw_Destiny_Data_Lore_Definition** that will just update the icon value to have a full URL, instead of a partial URL.

This will be the format of your new data (If you keep my format): 
```
// Inventory Definition
{
  name: oldData.displayproperties.name,
  description: oldData.displayproperties.description,
  hasIcon: oldData.displayproperties.hasIcon,
  hash: oldData.hash,
  loreHash: oldData.loreHash,
  redacted: oldData.redacted,
  blacklisted: oldData.blacklisted,
  icon: oldData.displayproperties.icon,
  flavorText: oldData.flavorText,
  imageURL: oldData.screenshot,
  itemTypeAndTierDisplayName: oldData.itemTypeAndTierDisplayName
}

// Lore Definition
{
  name: oldData.displayproperties.name,
  description: oldData.displayproperties.description,
  hasIcon: oldData.displayproperties.hasIcon,
  subtitle: oldData.subtitle,
  hash: oldData.hash,
  index: oldData.index,
  redacted: oldData.redacted,
  blacklisted: oldData.blacklisted,
  icon: oldData.displayproperties.icon
}
```

# Step 3 - My data is smaller now. Is that it?
Not yet, there are a few duplicate entries in the data.

There are repeats of a lot of weapons that do not have a screenshot variable. This will cause the imageURL value in your new data to have a broken URL value. The function I created to remove those Dups is called:

**remove_Dups_from_Editted_Data_Inventory()** and **remove_Dups_from_Editted_Data_Lore()**

# Step 4 - You now have much smaller JSON data files with all the Destiny Lore data you need
There are a few other things you can do, like merging the Lore and Inventory files into one. You can also make a function for later to find all the new lore entries when new things are added to the game.

My functions may not be the most optimzed, but they do work at least.


If you have any questions, you can find me on [Twitter](https://x.com/VulshokB).

My code is heavily commented to help make this README a little smaller. I will leave in my functions for merging the two files in case someone wants to use them. I also have a number of helper functions for smaller tasks, like auto tagging what season an entry is from.
