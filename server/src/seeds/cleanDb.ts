import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    
    if (models[modelName] && models[modelName].db) {
     /* let modelExists = await models[modelName].db.db.listCollections({
        name: collectionName
      }).toArray(); */
      let modelExists = [];
      if (models[modelName].db.db) {
        modelExists = await models[modelName].db.db.listCollections({
          name: collectionName
        }).toArray();
      }
      if (modelExists.length) {
        await db.dropCollection(collectionName);
      }
    } else {
      throw new Error(`Model or database not found for modelName: ${modelName}`);
    }

  } catch (err) {
    throw err;
  }
}
