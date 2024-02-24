const mongodb = require('mongodb');
const mongoCollections = require('../config/mongoCollections');
const songs = mongoCollections.songs;

//SCHEMA FOR Samples
/* 
    {
        "_id": ObjectId,
        "songId": ObjectId,
        "samples": [ObjectId],
        "sampledBy": [ObjectId],
    }
*/

const createSample = async (songId, samples, sampledBy) => {
    if (!songId || typeof songId !== 'string') throw 'Invalid songId';
    if (!samples || !Array.isArray(samples)) throw 'Invalid samples';
    if (!sampledBy || !Array.isArray(sampledBy)) throw 'Invalid sampledBy';

    const sampleCollection = await samples();
    const newSample = {
        songId: songId,
        samples: samples,
        sampledBy: sampledBy
    };

    const insertInfo = await sampleCollection.insertOne(newSample);
    if (insertInfo.insertedCount === 0) throw 'Could not add sample';

    const newId = insertInfo.insertedId;
    const sample = await getSample(newId);
    return sample;
};

const getAllSamples = async () => {
    const sampleCollection = await samples();
    const sampleList = await sampleCollection.find({}).toArray();
    return sampleList;
}

const getSample = async (id) => {
    if (!id || typeof id !== 'string') throw 'Invalid id';
    const sampleCollection = await samples();
    const sample = await sampleCollection.findOne({ _id: mongodb.ObjectID(id) });
    if (sample === null) throw 'No sample with that id';
    return sample;
}

const updateSample = async (id, songId, samples, sampledBy) => {
    if (!id || typeof id !== 'string') throw 'Invalid id';
    if (!songId || typeof songId !== 'string') throw 'Invalid songId';
    if (!samples || !Array.isArray(samples)) throw 'Invalid samples';
    if (!sampledBy || !Array.isArray(sampledBy)) throw 'Invalid sampledBy';

    const sampleCollection = await samples();
    const updatedSample = {
        songId: songId,
        samples: samples,
        sampledBy: sampledBy
    };

    const updatedInfo = await sampleCollection.replaceOne({ _id: mongodb.ObjectID(id) }, updatedSample);
    if (updatedInfo.modifiedCount === 0) throw 'Could not update sample';

    return await getSample(id);
}

const getSamplesOfSong = async (songId) => {
    if (!songId || typeof songId !== 'string') throw 'Invalid songId';
    const sampleCollection = await samples();
    const sampleList = await sampleCollection.find({ songId: songId }).toArray();
    return sampleList;
}

const getSampledBySongs = async (songId) => {
    if (!songId || typeof songId !== 'string') throw 'Invalid songId';
    const sampleCollection = await samples();
    const sampleList = await sampleCollection.find({ sampledBy: songId }).toArray();
    return sampleList;
}

const removeSample = async (id) => {
    if (!id || typeof id !== 'string') throw 'Invalid id';
    const sampleCollection = await samples();
    const deletionInfo = await sampleCollection.removeOne({ _id: mongodb.ObjectID(id) });
    if (deletionInfo.deletedCount === 0) {
        throw `Could not delete sample with id of ${id}`;
    }
}

module.exports = {
    createSample,
    getAllSamples,
    getSample,
    updateSample,
    getSamplesOfSong,
    getSampledBySongs,
    removeSample
};