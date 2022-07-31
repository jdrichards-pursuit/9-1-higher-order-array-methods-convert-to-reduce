/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require('../data/songs');
// Do not change the line above.

/***********************************************************************/

/**
 * getSongsBySaib()
 * Returns an array of all songs by the artist "Saib".
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 * You must use .reduce
 */
function getSongsBySaib(exampleSongData) {
  return exampleSongData.reduce((pv,cv)=> pv.concat(cv.artist==="Saib" ? cv: []),[])
}

/***********************************************************************/

/**
 * getSongsOverThreeMinutes()
 * Returns an array of all songs where the runtime is over three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 * You must use .reduce
 */

function getSongsOverThreeMinutes(exampleSongData) {
  return exampleSongData.reduce((pv,cv)=>{
    if(cv.runtimeInSeconds>180)
    {
      pv.push(cv)
    }
    return pv;
  },[]);
}

/***********************************************************************/

/**
 * getTitleTracks()
 * Returns an array of songs where the song title is the same as the song album.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 * You must use .reduce
 */

function getTitleTracks(exampleSongData) {
  return exampleSongData.reduce((pv,cv)=>{
    if(cv['title']===cv['album'])
    {
      pv.push(cv);
    }
    return pv;
  },[]);
}

module.exports = {
  getSongsBySaib,
  getSongsOverThreeMinutes,
  getTitleTracks
};
