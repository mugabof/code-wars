const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
function updateRecords(records, id, prop, value) {

  // If value is empty string → delete the property
  if (value === '') {
    delete records[id][prop];
  }

  // If prop is NOT tracks and value is not empty → assign value
  else if (prop !== 'tracks') {
    records[id][prop] = value;
  }

  // If prop is tracks AND value not empty
  else {
    // If album does not have tracks property → create array
    if (!records[id].hasOwnProperty('tracks')) {
      records[id].tracks = [];
    }

    // Add value to tracks array
    records[id].tracks.push(value);
  }

  // Always return entire records object
  return records;
}
// Add new artist
updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// Add track to album with no tracks property
updateRecords(recordCollection, 5439, 'tracks', 'Dancing Queen');

// Add track to existing tracks array
updateRecords(recordCollection, 2548, 'tracks', 'Livin on a Prayer');

// Delete property
updateRecords(recordCollection, 2468, 'artist', '');

// View final result
console.log(recordCollection);


