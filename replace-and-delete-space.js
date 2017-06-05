// Find string and replace it to space
// My solution
function songDecoder(song) {
  return song.replace(/(WUB)+/g, ' ').trim()
}

console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"))
