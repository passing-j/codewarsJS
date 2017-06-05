// Find string and replace it to space
// My solution
function songDecoder(song) {
  return song.replace(/(WUB)+/g, ' ').trim()
}

// method2
function songDecoder(song){
  return song.split('WUB').filter(Boolean).join(' ');
}


console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"))
