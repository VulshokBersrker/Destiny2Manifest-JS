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

// Since it would take too much time to update all event related items to that expansion they came out in, as the method I'm auto labelling them works based of item icons,
// I will just label them in a blanket "this event" label
// This function is called only when the findSeasonReleased can't find the season (since the item is most likely from an event)
// The only event I skipped over was the Revelry, it was a one-time event in Forsaken (and I didn't want to spend time making an icon for it, for now)
const findEventReleased = (data) => {
  if(data === "/common/destiny2_content/icons/52523b49e5965f6f33ab86710215c676.png") {
    return "Solstice of Heroes";
  }
  else if(data === "/common/destiny2_content/icons/f80e39c767f309f0b2be625dae0e3744.png") {
    return "Festival of the Lost"
  }
  else if(data === "/common/destiny2_content/icons/efdb35540cd169fa6e334995c2ce87b6.png") {
    return "Guardian Games"
  }
  else if(data === "/common/destiny2_content/icons/ad7fdb049d430c1fac1d20cf39059702.png") {
    return "The Dawning"
  }
  else if(data === "/common/destiny2_content/icons/04de56db6d59127239ed51e82d16c06c.png") {
    return "Crimson Days"
  }
  else if(data === "/common/destiny2_content/icons/65097e226318b8581ad535b33827e01a.png") {
    return "Forsaken" // The Revelry
  }
  else if(data === "/common/destiny2_content/icons/671a19eca92ad9dcf39d4e9c92fcdf75.png") {
    return "Bungie 30th Anniversary"
  }
  else {
    return "unknown"
  }
}

// This function is to return the season an item is from when called
// It takes in a string (the iconWaterMark value) and compared it through the list of if statements inside the function
// If it cannot find the season, it will call the findEventReleased functio above
const findSeasonReleased = (data) => {
  if(data === "/common/destiny2_content/icons/4c25426263cacf963777cd4988340838.png") {
    return "Season of Arrivals";
  }
  else if(data === "/common/destiny2_content/icons/2c024f088557ca6cceae1e8030c67169.png") {
    return "Curse of Osiris"
  }
  else if(data === "/common/destiny2_content/icons/fb50cd68a9850bd323872be4f6be115c.png") {
    return "Destiny 2"
  }
  else if(data === "/common/destiny2_content/icons/9e0f43538efe9f8d04546b4b0af6cc43.png") {
    return "Beyond Light"
  }
  else if(data === "/common/destiny2_content/icons/448f071a7637fcefb2fccf76902dcf7d.png") {
    return "Season of the Forge"
  }
  else if(data === "/common/destiny2_content/icons/e3ea0bd2e889b605614276876667759c.png") {
    return "Final Shape"
  }
  else if(data === "/common/destiny2_content/icons/5364cc3900dc3615cb0c4b03c6221942.png") {
    return "Season of Opulence"
  }
  else if(data === "/common/destiny2_content/icons/23968435c2095c0f8119d82ee222c672.png") {
    return "Season of the Splicer"
  }
  else if(data === "/common/destiny2_content/icons/ab075a3679d69f40b8c2a319635d60a9.png") {
    return "Season of the Haunted"
  }
  else if(data === "/common/destiny2_content/icons/e8fe681196baf74917fa3e6f125349b0.png") {
    return "Season of the Undying"
  }
  else if(data === "/common/destiny2_content/icons/ed6c4762c48bd132d538ced83c1699a6.png") {
    return "Warmind"
  }
  else if(data === "/common/destiny2_content/icons/6026e9d64e8c2b19f302dafb0286897b.png") {
    return "Season of the Deep"
  }
  else if(data === "/common/destiny2_content/icons/b973f89ecd631a3e3d294e98268f7134.png") {
    return "Witch Queen"
  }
  else if(data === "/common/destiny2_content/icons/3de52d90db7ee2feb086ef6665b736b6.png") {
    return "Season of the Witch"
  }
  else if(data === "/common/destiny2_content/icons/5ac4a1d48a5221993a41a5bb524eda1b.png") {
    return "Season of the Chosen"
  }
  else if(data === "/common/destiny2_content/icons/2352f9d04dc842cfcdda77636335ded9.png") {
    return "Shadowkeep"
  }
  else if(data === "/common/destiny2_content/icons/0337ec21962f67c7c493fedb447c4a9b.png") {
    return "Episode Echoes"
  }
  else if(data === "/common/destiny2_content/icons/a3923ae7d2376a1c4eb0f1f154da7565.png") {
    return "Season of Plunder"
  }
  else if(data === "/common/destiny2_content/icons/be3c0a95a8d1abc6e7c875d4294ba233.png") {
    return "Season of the Hunt"
  }
  else if(data === "/common/destiny2_content/icons/31445f1891ce9eb464ed1dcf28f43613.png") {
    return "Season of Defiance"
  }
  else if(data === "/common/destiny2_content/icons/af00bdcd3e3b89e6e85c1f63ebc0b4e4.png") {
    return "Lightfall"
  }
  else if(data === "/common/destiny2_content/icons/1b6c8b94cec61ea42edb1e2cb6b45a31.png") {
    return "Forsaken"
  }
  else if(data === "/common/destiny2_content/icons/1448dde4efdb57b07f5473f87c4fccd7.png") {
    return "Season of the Drifter"
  }
  else if(data === "/common/destiny2_content/icons/3ba38a2b9538bde2b45ec9313681d617.png") {
    return "Season of Dawn"
  }
  else if(data === "/common/destiny2_content/icons/d92e077d544925c4f37e564158f8f76a.png") {
    return "Season of the Lost"
  }
  else if(data === "/common/destiny2_content/icons/e775dcb3d47e3d54e0e24fbdb64b5763.png") {
    return "Season of the Seraph"
  }
  else if(data === "/common/destiny2_content/icons/a2fb48090c8bc0e5785975fab9596ab5.png") {
    return "Season of the Wish"
  }
  else if(data === "/common/destiny2_content/icons/b12630659223b53634e9f97c0a0a8305.png") {
    return "Season of the Worthy";
  }
  else if(data === "/common/destiny2_content/icons/fb50cd68a9850bd323872be4f6be115c.png") {
    return "Destiny 2";
  }
  else if(data === "/common/destiny2_content/icons/d5a3f4d7d20fefc781fea3c60bde9434.png") {
    return "Season of the Wish"
  }
  else if( data === "/common/destiny2_content/icons/6e4fdb4800c34ccac313dd1598bd7589.png") {
    return "Season of the Risen"
  }
  else {
    // Not from a Season, must be from an event
    return findEventReleased(data);
  }

}

// This works similar to findSeasonReleased, but for the lore book entries instead
const findSeasonReleasedLoreBooks = (data) => {
  var temp = {
    loreBookName: "",
    released: "",
    isLoreBook: true
  }
  if(     data === "/common/destiny2_content/icons/4272a809d87b1614d86463a89d1f73dc.png") {
    temp.loreBookName = "Awoken of the Reef";
    temp.released = "Forsaken";
  }
  else if(data === "/common/destiny2_content/icons/9fe7a88347899171c845ef2374d51a23.png") {
    temp.loreBookName = "Lucent Tales";
    temp.released = "Witch Queen";
  }
  else if(data === "/common/destiny2_content/icons/d2c555b552d72a071cb2a3d74581958a.png") {
    temp.loreBookName = "Shattered Suns";
    temp.released = "Witch Queen";
  }
  else if(data === "/common/destiny2_content/icons/1231f3c947048ecea9a2b513509eb800.png") {
    temp.loreBookName = "Chirality";
    temp.released = "Final Shape";
  }
  else if(data === "/common/destiny2_content/icons/105ea923e82e3eb32f0158c5cf01b205.png") {
    temp.loreBookName = "Aspect";
    temp.released = "Shadowkeep";
  }
  else if(data === "/common/destiny2_content/icons/aabc6379a6d696d9f264454faeec9d44.png") {
    temp.loreBookName = "From the Front";
    temp.released = "Season of the Chosen";
  }
  else if(data === "/common/destiny2_content/icons/69140028e23636da14227b349d8ef980.png") {
    temp.loreBookName = "Ghost Stories";
    temp.released = "Forsaken";
  }
  else if(data === "/common/destiny2_content/icons/d1db2ee57a317518d761551fd33427b5.png") {
    temp.loreBookName = "The Singular Exegete";
    temp.released = "Season of Arrivals";
  }
  else if(data === "/common/destiny2_content/icons/7c5fb27203ac22ed66830074f64d4c2d.png") {
    temp.loreBookName = "Marasenna";
    temp.released = "Forsaken";
  }
  else if(data === "/common/destiny2_content/icons/ca0211d03791f481024b50ce3f667747.png") {
    temp.loreBookName = "The Dark Future";
    temp.released = "Beyond Light";
  }
  else if(data === "/common/destiny2_content/icons/2e2bce4b4868dbd5cde01114661d75b2.png") {
    temp.loreBookName = "Bray Lab Records - Confidential";
    temp.released = "Beyond Light";
  }
  else if(data === "/common/destiny2_content/icons/7402094f57c04a566d95bb2452b0d9ec.png") {
    temp.loreBookName = "Book of Unmaking";
    temp.released = "Season of the Forge";
  }
  else if(data === "/common/destiny2_content/icons/e9e03c0ae7fe0167d7fdd787eb3eec55.png") {
    temp.loreBookName = "Letters from a Renegade";
    temp.released = "Season of the Forge";
  }
  else if(data === "/common/destiny2_content/icons/bb1ae077d9bf1f783d80b035da8a087f.png") {
    temp.loreBookName = "To Old Friends";
    temp.released = "Season of the Wish";
  }
  else if(data === "/common/destiny2_content/icons/f7f04331cd75ec280a0cc9ef5cecae27.png") {
    temp.loreBookName = "The Forsaken Prince";
    temp.released = "Forsaken";
  }
  else if(data === "/common/destiny2_content/icons/3d91325bf15c7a4f33544eb0649b0420.png") {
    temp.loreBookName = "Nothing Ends";
    temp.released = "Season of Opulence";
  }
  else if(data === "/common/destiny2_content/icons/633745d1b28f8011524d424ab92d678a.png") {
    temp.loreBookName = "Acts of Mercy";
    temp.released = "Witch Queen";
  }
  else if(data === "/common/destiny2_content/icons/077d825281628d559cee56c7fd8acad6.png") {
    temp.loreBookName = "A Tangled Web";
    temp.released = "Beyond Light";
  }
  else if(data === "/common/destiny2_content/icons/145d908b9bf79c326482aff99f621a0a.png") {
    temp.loreBookName = "The Pigeon and the Phoenix";
    temp.released = "Season of Dawn";
  }
  else if(data === "/common/destiny2_content/icons/4a15a370b5630a2d4317144435d16f84.png") {
    temp.loreBookName = "Mnemosyne";
    temp.released = "Witch Queen";
  }
  else if(data === "/common/destiny2_content/icons/8cc1141a4b5ed75b5871027b8ff83cee.png") {
    temp.loreBookName = "Enemies of Humanity";
    temp.released = "Lightfall";
  }
  else if(data === "/common/destiny2_content/icons/c96ea356746f9e300e7c1664f1e9565d.png") {
    temp.loreBookName = "Last Days on Kraken Mare";
    temp.released = "Shadowkeep";
  }
  else if(data === "/common/destiny2_content/icons/19b84b7ee5addab06342893417b0bcd2.png") {
    temp.loreBookName = "Ecdysis";
    temp.released = "Season of the Drifter";
  }
  else if(data === "/common/destiny2_content/icons/20d87677e859f7f4d149ab38196870f8.png") {
    temp.loreBookName = "The Liar";
    temp.released = "Season of the Worthy";
  }
  else if(data === "/common/destiny2_content/icons/dd0d1f9ec809e9fd61371ddfdab4fcac.png") {
    temp.loreBookName = "Legacy's Lament";
    temp.released = "Beyond Light";
  }
  else if(data === "/common/destiny2_content/icons/eb7c74b592f526c4ad2331e1a8abf862.png") {
    temp.loreBookName = "Call of the Cryptolith";
    temp.released = "Season of the Hunt";
  }
  else if(data === "/common/destiny2_content/icons/a5bb06c1aabca25e9e2e2c1be6b3675f.png") {
    temp.loreBookName = "Martian Missives";
    temp.released = "Witch Queen";
  }
  else if(data === "/common/destiny2_content/icons/b21651257905839fa593c248fb485174.png") {
    temp.loreBookName = "Your Friend, Micah Abram";
    temp.released = "Beyond Light";
  }
  else if(data === "/common/destiny2_content/icons/a4d13dcfa396399587f1d94c65b6ad27.png") {
    temp.loreBookName = "Dynasty";
    temp.released = "Episode Echoes";
  }
  else if(data === "/common/destiny2_content/icons/12b788b318336be608cb0d11de311ad0.png") {
    temp.loreBookName = "Inspiral";
    temp.released = "Lightfall";
  }
  else if(data === "/common/destiny2_content/icons/8a38d755c249c9bee23305ccf90079a4.png") {
    temp.loreBookName = "Entities of Sol";
    temp.released = "Lightfall";
  }
  else if(data === "/common/destiny2_content/icons/692b800a129a120563a5db7d1b98b555.png") {
    temp.loreBookName = "Duress and Egress";
    temp.released = "Season of Arrivals";
  }
  else if(data === "/common/destiny2_content/icons/ecd61c64c2141ca007c5ba4a6f5cd096.png") {
    temp.loreBookName = "Confessions";
    temp.released = "Season of Opulence";
  }
  else if(data === "/common/destiny2_content/icons/99064a4214c0f87539a3787638ba171f.png") {
    temp.loreBookName = "A Man With No Name";
    temp.released = "Season of the Drifter";
  }
  else if(data === "/common/destiny2_content/icons/e8dcd10a6f98ba17be3c9b8b40bf5f8b.png") {
    temp.loreBookName = "Inquisition of the Damned";
    temp.released = "Shadowkeep";
  }
  else if(data === "/common/destiny2_content/icons/a71348a015a09895356aaa3a98bf9293.png") {
    temp.loreBookName = "Stolen Intelligence";
    temp.released = "Season of the Drifter";
  }
  else if(data === "/common/destiny2_content/icons/2e497600f2d3b7675885204bbc28658d.png") {
    temp.loreBookName = "Regarding Stasis";
    temp.released = "Beyond Light";
  }
  else if(data === "/common/destiny2_content/icons/2ab399181fd3d0af0f3a4fe7b569f6f7.png") {
    temp.loreBookName = "Unveiling";
    temp.released = "Shadowkeep";
  }
  else if(data === "/common/destiny2_content/icons/c523f9dfb062f070c27a51dbb837de93.png") {
    temp.loreBookName = "Wall of Wishes";
    temp.released = "Forsaken";
  }
  else if(data === "/common/destiny2_content/icons/47659cd6f39619f678dedb3a626c409c.png") {
    temp.loreBookName = "Warp and Weft";
    temp.released = "Lightfall";
  }
  else if(data === "/common/destiny2_content/icons/a3e332de197e2e9975104ce2912314c3.png") {
    temp.loreBookName = "Gifts and Bargains";
    temp.released = "Season of the Wish";
  }
  else if(data === "/common/destiny2_content/icons/2e6574aba81d8c410c14584488dd11ad.png") {
    temp.loreBookName = "The Black Armory Papers";
    temp.released = "Season of the Forge";
  }
  else if(data === "/common/destiny2_content/icons/377992e0d7c6b7de495edfabfda4da59.png") {
    temp.loreBookName = "Empress";
    temp.released = "Season of the Chosen";
  }
  else if(data === "/common/destiny2_content/icons/abd584069a0f9f043c4e1772517dbd1d.png") {
    temp.loreBookName = "Triage";
    temp.released = "Season of the Haunted";
  }
  else if(data === "/common/destiny2_content/icons/9e6d7fe2449c8907fffcc62b75a4472d.png") {
    temp.loreBookName = "Guardians and Ghosts";
    temp.released = "Lightfall";
  }
  else if(data === "/common/destiny2_content/icons/2cfd18dcf908263d3b1c129e383ea8ce.png") {
    temp.loreBookName = "Polyphony";
    temp.released = "Episode Echoes";
  }
  else if(data === "/common/destiny2_content/icons/6709263daa5d46d4bac142535638c675.png") {
    temp.loreBookName = "The Man They Call Cayde";
    temp.released = "Forsaken";
  }
  else if(data === "/common/destiny2_content/icons/47fdcd364673fcd21bcc2c19f231abf8.png") {
    temp.loreBookName = "Last Days";
    temp.released = "Lightfall";
  }
  else if(data === "/common/destiny2_content/icons/44919592467f79aa909a2286b52e1024.png") {
    temp.loreBookName = "The Dreaming City";
    temp.released = "Forsaken";
  }
  else if(data === "/common/destiny2_content/icons/aca62f7687b08ca5058cf543956397dd.png") {
    temp.loreBookName = "Sororicide";
    temp.released = "Season of the Witch";
  }
  else if(data === "/common/destiny2_content/icons/e36bd38f6d20cd8e69168ca83f3c0dfc.png") {
    temp.loreBookName = "Revelation";
    temp.released = "Shadowkeep";
  }
  else if(data === "/common/destiny2_content/icons/dedfaf80b2ae8b1ac799e4745ec41328.png") {
    temp.loreBookName = "Luna's Lost";
    temp.released = "Shadowkeep";
  }
  else if(data === "/common/destiny2_content/icons/5a526fbe656d3056b35e4d12bd797a09.png") {
    temp.loreBookName = "Constellations";
    temp.released = "Season of Dawn";
  }
  else if(data === "/common/destiny2_content/icons/a32fc26e54e2049d6138b7939e5d991b.png") {
    temp.loreBookName = "A Guardian's Ideals";
    temp.released = "Lightfall";
  }
  else if(data === "/common/destiny2_content/icons/3cbbe5fef8ef9c411387b53d47e25a1b.png") {
    temp.loreBookName = "Captain's Log";
    temp.released = "Season of the Chosen";
  }
  else if(data === "/common/destiny2_content/icons/f08999a615967a655fc0a0c4a12977a3.png") {
    temp.loreBookName = "Voices of the Haunted";
    temp.released = "Season of the Haunted";
  }
  else if(data === "/common/destiny2_content/icons/f769fa6cfc2b270b936665f9c2a5826e.png") {
    temp.loreBookName = "Dragonslayers";
    temp.released = "Season of the Wish";
  }
  else if(data === "/common/destiny2_content/icons/a37695f737378a986f758805c2fd46aa.png") {
    temp.loreBookName = "The Beaten Path";
    temp.released = "Lightfall";
  }
  else if(data === "/common/destiny2_content/icons/e3f6c8237b2518f1c1626afaeb3e573f.png") {
    temp.loreBookName = "Achilles Weaves a Cocoon";
    temp.released = "Season of the Splicer";
  }
  else if(data === "/common/destiny2_content/icons/c1f6a63916b29ea4df0fb6069c2b8571.png") {
    temp.loreBookName = "Ripples";
    temp.released = "Season of the Lost";
  }
  else if(data === "/common/destiny2_content/icons/c4d9d81d1dc66770e1f11f66f0916a23.png") {
    temp.loreBookName = "The Chronicon";
    temp.released = "Season of Opulence";
  }
  else if(data === "/common/destiny2_content/icons/52991e0b4bf227b00a0802f76a6cdc4b.png") {
    temp.loreBookName = "Guardian Directives";
    temp.released = "Lightfall";
  }
  else if(data === "/common/destiny2_content/icons/e1c465d559f4f5a49e4f6476cc307f9c.png") {
    temp.loreBookName = "Becoming Legend";
    temp.released = "Lightfall";
  }
  else if(data === "/common/destiny2_content/icons/49c85361700019d3f9eb29f50a03728e.png") {
    temp.loreBookName = "Beneath the Endless Night";
    temp.released = "Season of the Splicer";
  }
  else if(data === "/common/destiny2_content/icons/cab2361a227e1f49a48e45d5c385a505.png") {
    temp.loreBookName = "Between Stolen Stars";
    temp.released = "Season of Plunder";
  }
  else if(data === "/common/destiny2_content/icons/d61b8de8f96995a67682bbb5a2103eb0.png") {
    temp.loreBookName = "For Every Rose, a Thorn";
    temp.released = "Season of the Drifter";
  }
  else if(data === "/common/destiny2_content/icons/8df7ab3986f46a1bd083bfdc30588043.png") {
    temp.loreBookName = "Sol, A History";
    temp.released = "Lightfall";
  }
  else if(data === "/common/destiny2_content/icons/059e543c2fa87037f8960f5522e7594e.png") {
    temp.loreBookName = "A New Age";
    temp.released = "Lightfall";
  }
  else if(data === "/common/destiny2_content/icons/578c386e96e96848b35b775ed198e0db.png") {
    temp.loreBookName = "Letters from Eris";
    temp.released = "Shadowkeep";
  }
  else if(data === "/common/destiny2_content/icons/5065f002fdabe8b801ba092abf515636.png") {
    temp.loreBookName = "Truth to Power";
    temp.released = "Forsaken";
  }
  else if(data === "/common/destiny2_content/icons/267fd51cdf75c4b6fa8528e1aff8100c.png") {
    temp.loreBookName = "Dawning Delights";
    temp.released = "The Dawning";
  }
  else if(data === "/common/destiny2_content/icons/000dacc6771a2b084e08738f1c4b56ec.png") {
    temp.loreBookName = "The Once-Shipstealer";
    temp.released = "Beyond Light";
  }
  else if(data === "/common/destiny2_content/icons/1aec143160407036c18f5b254d388b0f.png") {
    temp.loreBookName = "Quintessence";
    temp.released = "Witch Queen";
  }
  else if(data === "/common/destiny2_content/icons/6fd2b76d90c78b266f5a90ed22037343.png") {
    temp.loreBookName = "Trials and Tribulations";
    temp.released = "Season of the Worthy";
  }
  else if(data === "/common/destiny2_content/icons/bf2d9748f987ea1dd91d59f0d8dfe43c.png") {
    temp.loreBookName = "The Lawless Frontier";
    temp.released = "Forsaken";
  }
  else if(data === "/common/destiny2_content/icons/d8607a8e354f8d58590a7495a358f24a.png") {
    temp.loreBookName = "Our Allies";
    temp.released = "Lightfall";
  }
  else if(data === "/common/destiny2_content/icons/6638858e72b62a33f2601c91aad8d250.png") {
    temp.loreBookName = "A Drifter's Gambit";
    temp.released = "Forsaken";
  }
  else if(data === "/common/destiny2_content/icons/44b0bb920cb518d5ce0619e92c6721f2.png") {
    temp.loreBookName = "Eva's Journey";
    temp.released = "Forsaken";
  }
  else if(data === "/common/destiny2_content/icons/7d535c6afacdd3d1e50ce371f704cf76.png") {
    temp.loreBookName = "Above All Else";
    temp.released = "Season of Plunder";
  }
  else if(data === "/common/destiny2_content/icons/a73178dca3494846dcec42cc32c23520.png") {
    temp.loreBookName = "Rites of Passage";
    temp.released = "Season of the Witch";
  }
  else if(data === "/common/destiny2_content/icons/238bff92ad545ddc5b0a58c1d032fdac.png") {
    temp.loreBookName = "Purpose";
    temp.released = "Season of the Deep";
  }
  else if(data === "/common/destiny2_content/icons/c84276086e2e7cbea64cc7864d6041b6.png") {
    temp.loreBookName = "Most Loyal";
    temp.released = "Forsaken";
  }
  else if(data === "/common/destiny2_content/icons/1f44c3c51a568d3a0ec309b25b9da4ed.png") {
    temp.loreBookName = "Dust";
    temp.released = "Season of the Drifter";
  }
  else if(data === "/common/destiny2_content/icons/b073657c2e4d60b5223bfd5c7296eaac.png") {
    temp.loreBookName = "Cloud Strider Legacies";
    temp.released = "Lightfall";
  }
  else if(data === "/common/destiny2_content/icons/65a410ad0767d857a09d9b69c9e34a70.png") {
    temp.loreBookName = "Pathfinding";
    temp.released = "Season of the Splicer";
  }
  else if(data === "/common/destiny2_content/icons/7a9e6a6f3d0ddcdf4eecb5f69ffd1efd.png") {
    temp.loreBookName = "The Vanguard";
    temp.released = "Lightfall";
  }
  else if(data === "/common/destiny2_content/icons/d61d0fce5f55e8728ea20cc2b0e03ad4.png") {
    temp.loreBookName = "Sightlines";
    temp.released = "Lightfall";
  }
  else if(data === "/common/destiny2_content/icons/44609a6368035fc9fe7d5228463aa5d7.png") {
    temp.loreBookName = "The Warlock Aunor";
    temp.released = "Season of the Drifter";
  }
  else if(data === "/common/destiny2_content/icons/67bfc3d614c860946d3bb2bcd990eab5.png") {
    temp.loreBookName = "Persona";
    temp.released = "Season of the Seraph";
  }
  else if(data === "/common/destiny2_content/icons/589c8c1a5e1880bed11c9ea1cc7ac7e5.png") {
    temp.loreBookName = "Rubicon";
    temp.released = "Final Shape";
  }
  else if(data === "/common/destiny2_content/icons/d4b92f545dfa7b7e37a98e3e0aeed084.png") {
    temp.loreBookName = "Companions";
    temp.released = "Final Shape";
  }
  else if(data === "/common/destiny2_content/icons/92012d4bc40380ea70cf285298707da7.png") {
    temp.loreBookName = "Tales of the Forgotten - Vol. 1";
    temp.released = "Season of the Lost";
  }
  else if(data === "/common/destiny2_content/icons/ecfc5d7754d9eea30fb3e9da06eed717.png") {
    temp.loreBookName = "Tales of the Forgotten - Vol. 2";
    temp.released = "Season of Plunder";
  }
  else if(data === "/common/destiny2_content/icons/6138f57135a1df7577df8c21ca4569ff.png") {
    temp.loreBookName = "Tales of the Forgotten - Vol. 3";
    temp.released = "Season of the Witch";
  }
  else {
    temp.loreBookName = "";
    temp.released = "";
    temp.isLoreBook = false;
  }
  return temp;
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
