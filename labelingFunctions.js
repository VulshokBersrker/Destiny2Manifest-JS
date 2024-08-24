// This is a list of functions I created to auto label most of the items from the API to make it a little easier to find which season things are from
// The only issue are seasonal events, they can't be auto labeled with a season currently. Instead they are labeled with their event


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
// the imageURL value is just for my project's book entry pages
// You can remove that value from this function
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


// Find the season released for Quests (In Progress)
const findSeasonReleasedQuest = (data) => {

  
  if(data.includes("Echoes Act") 
  || data.includes("Specimen ID: NES")
  || data.includes("A Rising Chorus")
  ) {
    return "Episode Echoes";
  }
  else if(data.includes("A Spark of Hope") 
       || data.includes("Lost Lament") 
       || data.includes("Blast from the Past") 
       || data.includes("Empire's Fall") 
       || data.includes("The Dark Priestess") 
       || data.includes("The Technocrat")
       || data.includes("Light Reforged")
       || data.includes("Born in Darkness")
       || data.includes("Beyond Light")
       || data.includes("Europa")
       || data.includes("Umbral Plunder")
       || data.includes("Stoking The Flame")
       || data.includes("Empire Hunt")
       || data.includes("Quid Pro Quo")
       || data.includes("Aspect of Control")
       || data.includes("Collectible Detector")
       || data.includes("Gazing Into The Abyss")
       || data.includes("Splinter of Darkness")
       || data.includes("The Stasis Prototype")
       || data.includes("On the Offensive")
       || data.includes("Restless Slumber")
       || data.includes("The Warrior")
       || data.includes("Walk the Line")
       || data.includes("Riding the Storm")
       || data.includes("A Hard Rain Falls")
       || data.includes("Ornamental Container")
       || data.includes("Old Secrets, New Challenges")
       || data.includes("Xenology")
       || data.includes("Aspect of Destruction")
       || data === "Soon"
  ) {
    return "Beyond Light"
  }
  else if(data.includes("Incandescence") 
       || data.includes("Captain's Log") 
       || data.includes("The Final Shape")
       || data.includes("Forging an Ingot: ")
       || data.includes("The Return")
       || data.includes("The Veiled")
       || data.includes("Lost in the Light")
       || data.includes("Destined Heroes")
       || data.includes("Wild Card")
       || data.includes("The Hellmouth")
       || data.includes("Alone in the Dark")
       || data.includes("The Visitation")
       || data.includes("Convalescence:")
       || data.includes("The Desperation")
       || data.includes("The Ascendant")
       || data.includes("The Past")
       || data.includes("Found in the Dark")
       || data.includes("Return to the Arbor of Light")
       || data.includes("The Heart's Depths")
       || data.includes("The Shadows")
       || data.includes("The Illusion")
       || data.includes("Ghost Reputation")
       || data.includes("Encoded Log")
       || data.includes("To Ghost")
       || data === "The Oracle"
       || data === "Purification"
  ) {
    return "Final Shape"
  }
  else if(data.includes("Another Last City") 
       || data.includes("The Final Strand")
       || data.includes("Nock, Draw, Loose, Quiet")
       || data.includes("Unfinished Business")
       || data.includes("Lightfall")
       || data.includes("From Zero")
       || data.includes("…To Hero")
  ) {
    return "Lightfall"
  }
  else if(data.includes("Report: ") 
       || data.includes("Learning Light")
       || data.includes("Heavy Does It")
       || data.includes("The Witch Queen")
       || data.includes("Hard Evidence")
       || data.includes("Of Queens and Worms")
       || data.includes("Meditate on the Light")
       || data.includes("Trust Goes Both Ways")
       || data.includes("Shaping: Extraction")
       || data.includes("Memory Alembic")
       || data.includes("The Queen Beckons")
       || data.includes("The Relic")
       || data.includes("The Gift of Appreciation")
       || data.includes("The Spring of Power")
       || data.includes("Reshaping the Enigma") // There is one from Lightfall
  ) {
    return "Witch Queen"
  }
  else if(data.includes("The Vow")
       || data.includes("The Journey")
       || data.includes("Legacy: Shadowkeep")
       || data.includes("Luna's Calling")
  ) {
    return "Shadowkeep"
  }
  else if(data.includes("Wolf's Clothing")
  ) {
    return "Season of Opulence"
  }
  else if(data.includes("O Deepsight Mine")
       || data.includes("Taming the Storm")
       || data.includes("Higher Voltage")
       || data.includes("Parting the Veil")
       || data.includes("Exalting the Flame")
       || data === "Rise"
  ) {
    return "Season of the Deep"
  }
  else if(data.includes("Foundry Shaping")
       || data.includes("The Form of the Danger")
       || data.includes("Foundry Resonance")
  ) {
    return "Season of Plunder"
  }
  else if(data.includes("A Few More Couldn't Hurt")
       || data.includes("A Baking Break")
  ) {
    return "Season of the Forge"
  }
  else if(data.includes("Fizzled Trials Token")
       || data.includes("The Worthy Come to Eververse")
       || data.includes("Trials Returns")
       || data.includes("A Good Match")
  ) {
    return "Season of the Worthy"
  }
  else if(data.includes("And Out Fly the Wolves")
       || data.includes("Tying It All Together")
       || data.includes("Magnum Opus")
       || data.includes("REVISION 7.2.2")
       || data.includes("Eternity Beckons")
       || data.includes("Aspect of Interference")
       || data.includes("Points Piercing Forever")
       || data.includes("Stasis Trigger")
       || data.includes("Competitive Catalyst")
       || data.includes("Strange Xûr in a Strange Land")
       || data.includes("To the Daring Go the Spoils")
       || data.includes("Win Matches")
  ) {
    return "Season of the Lost"
  }
  else if(data.includes("The Corrupted") 
       || data.includes("War for the Dreaming City")
       || data.includes("Dark Monastery")
       || data.includes("Commendation Rewards")
       || data.includes("Broken Courier")
       || data.includes("The Oracle Engine")
       || data.includes("The Shattered Throne")
       || data.includes("Give 5 Commendations")
  ) {
    return "Forsaken"
  }
  else if(data.includes("No Trespassing")
       || data.includes("Forging Iron")
       || data.includes("A Single Thread")
  ) {
    return "Season of the Haunted"
  }
  else if(data.includes("In the Shadow of the Mountain")
       || data.includes("Whispers of the Past")
       || data.includes("Whispers of the Taken")
       || data.includes("Asset Protection")
       || data.includes("An Old Flame")
       || data.includes("Winter Night")
       || data.includes("Outbreak Refined")
       || data.includes("Forged Anew")
       || data.includes("Drop In")
       || data.includes("New Light Armor Requisition")
  ) {
    return "Season of the Wish"
  }
  else if(data.includes("Armor Synthesis Introduction")
  ) {
    return "Season of the Splicer"
  }
  else if(data.includes("Bottomless Pit")
       || data.includes("Hunters' Remembrance")
       || data.includes("Classic Carving")
       || data.includes("Sophisticated Sculpting")
       || data.includes("Grenade Logic")
       || data.includes("Unveiled")
       || data.includes("Timeline Reflection") // There is one from final shape
  ) {
    return "Season of the Witch"
  }
  else if(data.includes("Dividing the Ladder")
       || data.includes("Ares Desperado")
       || data.includes("Volantes Violentiam")
  ) {
    return "Season of the Seraph"
  }
  else if(data.includes("Aspect of Influence")
  ) {
    return "Season of the Chosen"
  }
  else if(data.includes("The Bank Job")
       || data.includes("A New Season Arrives at Eververse")
  ) {
    return "Season of Arrivals"
  }
  else if(data.includes("Ascendant Alloy Requisition")
  ) {
    return "Season of Plunder"
  }
  else if(data.includes("The Dawn Comes to Eververse")
  ) {
    return "Season of Dawn"
  }



  // events
  else if(data.includes("Dawning Duty")
       || data.includes("The Dawning")
       || data.includes("Cookie Delivery Helper")
       || data.includes("Essence of Dawning")
  ) {
    return "The Dawning"
  }
  else if(data.includes("A Glowing Solstice")
       || data.includes("Celebrating Solstice")
       || data.includes("Key to Power")
  ) {
    return "Solstice of Heroes"
  }
  else if(data.includes("Guardian Games")
       || data.includes("Best in Class")
       || data.includes("Shoot to Score")
       || data.includes("Closing Ceremony")
       || data.includes("Top of Class")
       || data.includes("Carpe Podium")
       || data.includes("Medallion Case")
       || data.includes("Vying for Supremacy")
  ) {
    return "Guardian Games"
  }
  else if(data.includes("Collect Candy")
       || data.includes("Just Desserts")
  ) {
    return "Festival of the Lost"
  }
  // A lot of different season dups:
  else if(data.includes("Complete Bounties")
       || data.includes("A Guardian Rises")
       || data.includes("Reshaping the Enigma")
       || data.includes("Into the Abyss")
       || data.includes("Anomalous Object")
       || data.includes("Trials Access")
       || data.includes("Prime Example")
       || data.includes("Making the Cut")
  ) {
    return 'Multiple Seasons'
  }


  // Couldn't find anything
  else {
    return "unknown"
  }

  // A lot of different season dups:
  // Complete Bounties
  // A Spark of Hope
  // A Guardian Rises
  // Reshaping the Enigma
  // Vying for Supremacy
  // Into the Abyss
  // Trials Access
  // Anomalous Object
  // Prime Example
  // Making the Cut

}
