const mongodb = require('mongodb');
const mongoCollections = require('../config/mongoCollections');
const songs = mongoCollections.songs;

// SCHEMA FOR SONGS
/*
    {
        "_id": ObjectId,
        "title": String,
        "artist": String,
        "album": String,
        "year": Number,
        "genre": String,
        "artwork": url / String,
    }
*/

const createSong = async (title, artist, album, year, genre, artwork, ytlink) => {
  if (!title || typeof title !== 'string') throw 'Invalid title';
  if (!artist || typeof artist !== 'string') throw 'Invalid artist';
  if (!album || typeof album !== 'string') throw 'Invalid album';
  if (!year || typeof year !== 'number') throw 'Invalid year';
  if (!genre || typeof genre !== 'string') throw 'Invalid genre';
  if (!artwork || typeof artwork !== 'string') throw 'Invalid artwork';
  if (!ytlink || typeof ytlink !== 'string') throw 'Invalid ytlink';

  const songCollection = await songs();
  const newSong = {
    title: title,
    artist: artist,
    album: album,
    year: year,
    genre: genre,
    artwork: artwork,
    ytlink: ytlink,
  };

  const insertInfo = await songCollection.insertOne(newSong);
  if (insertInfo.insertedCount === 0) throw 'Could not add song';

  const newId = insertInfo.insertedId;
  const song = await getSong(newId);
  return song;
};

const getAllSongs = async () => {
  const songCollection = await songs();
  const songList = await songCollection.find({}).toArray();
  return songList;
};

const getSong = async (id) => {
  if (!id || typeof id !== 'string') throw 'Invalid id';
  const songCollection = await songs();
  const song = await songCollection.findOne({_id: mongodb.ObjectID(id)});
  if (song === null) throw 'No song with that id';
  return song;
};

const updateSong = async (id, title, artist, album, year, genre, artwork, ytlink) => {
  if (!id || typeof id !== 'string') throw 'Invalid id';
  if (!title || typeof title !== 'string') throw 'Invalid title';
  if (!artist || typeof artist !== 'string') throw 'Invalid artist';
  if (!album || typeof album !== 'string') throw 'Invalid album';
  if (!year || typeof year !== 'number') throw 'Invalid year';
  if (!genre || typeof genre !== 'string') throw 'Invalid genre';
  if (!artwork || typeof artwork !== 'string') throw 'Invalid artwork';
  if (!ytlink || typeof ytlink !== 'string') throw 'Invalid ytlink';

  const songCollection = await songs();
  const updatedSong = {
    title: title,
    artist: artist,
    album: album,
    year: year,
    genre: genre,
    artwork: artwork,
    ytlink: ytlink,
  };

  const updatedInfo = await songCollection.updateOne({_id: mongodb.ObjectID(id)}, {$set: updatedSong});
  if (updatedInfo.modifiedCount === 0) throw 'Could not update song';

  return await getSong(id);
};

const deleteSong = async (id) => {
  if (!id || typeof id !== 'string') throw 'Invalid id';
  const songCollection = await songs();
  const deletionInfo = await songCollection.removeOne({_id: mongodb.ObjectID(id)});
  if (deletionInfo.deletedCount === 0) throw `Could not delete song with id of ${id}`;
  return true;
};

const searchSongs = async (search) => {
  if (!search || typeof search !== 'string') throw 'Invalid search';
  const songCollection = await songs();
  const songList = await songCollection.find({$text: {$search: search}}).toArray();
  return songList;
};

module.exports = {
  createSong,
  getAllSongs,
  getSong,
  updateSong,
  deleteSong,
};
