import { Datastore } from "nedb-async-await";

let favorites = new Datastore({ filename: './favorites.db', autoload: true });

export async function insertFavorite(data) {
    return await favorites.insert(data)
}

export async function getFavoriteByUserId(userId) {
    const faves = await favorites.find({ "userId": userId }, { userId: 0,  _id: 0 });
    //we only need the favorite values
    const valOnly = faves.map(f => Object.values(f));
    return valOnly;
}

export async function removeFavoriteByUserId(userId, flightNumber) {
    return await favorites.remove({attributes: { $elemMatch: { userId: userId, flightNumber: flightNumber }}});
}