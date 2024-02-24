const { ObjectId } = require('mongodb');

const paramExists = (param) => {
    return param !== undefined && param !== null && param;
}

